import { Pool } from "@/app/ApiFetchs/pool";
import Link from 'next/link'
export const metadata = {
  title: "Sivas Gürün - Köyler Hava Durumu",
  description: "Sivas Gürün ilçesine bağlı 60 köyün güncel hava durumu bilgileri: Akdere, Akpınar, Ayvalı, Bağlıçay, Bahçeiçi, Başören, Beypınarı, Bozhüyük, Böğrüdelik, Camiliyurt, Çamlıca, Çiçekyurt, Davulhüyük, Dayakpınar, Deveçayırı, Dürmepınar, Erdoğan, Eskibektaşlı, Eskihamal, Göbekören, Gökçeyazı, Güldede, Güllübucak, Güneş, Hüyüklüyurt, İncesu, Kaledere, Karadoruk, Karahisar, Karakuyu, Karaören, Karapınar, Kaşköy, Kavakköy, Kayalar, Kaynarca, Kılıçdoğan, Kındıralık, Kızılburun, Kızılören, Kızılpınar, Konakpınar, Koyunlu, Külahlı, Kürkçü, Mağara, Mahkenli, Osmandede, Reşadiye, Sarıca, Sularbaşı, Tepecik, Yaylacık, Yazyurdu, Yelken, Yenibektaşlı, Yeşildere, Yılanhüyük, Yolgeçen ve Yuva köylerinin hava tahminlerini öğrenin.",
openGraph: {
    title: "Sivas Gürün - Tüm Köyler Hava Durumu",
    description:
      "Sivas Gürün'e bağlı tüm köylerin 3 günlük hava durumu tahminleri",
    url: "https://sivasgurun.com/hava-durumu/koyler/gurun/",
    siteName: "sivasgurun.com",
    images: [
      {
        url: "https://sivasgurun.com/hava-durumu.webp",
        width: 1280,
        height: 720,
        alt: "Sivas Gürün Tüm Köyler Hava Durumu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

};
export default async function Posts() {
    const getPosts = async function(){
        try {
        const sql = `SELECT y.idyazilar, y.results FROM yazilar y INNER JOIN ( SELECT idyazilar, MAX(idhavadurumu) as max_id FROM havadurumu GROUP BY idyazilar )
as latest_hava ON y.idyazilar = latest_hava.idyazilar INNER JOIN havadurumu h ON h.idhavadurumu = latest_hava.max_id ORDER BY y.idyazilar;
`;
        const [rows] = await Pool.query(sql); // Pool.query doğrudan bağlantıyı yönetir!
        return rows;
    } catch (err) {
        console.error("MySQL Error:", err);
        throw err;
    }

    }
    const reslt = await getPosts()
    .then(data => {return data != undefined ? data : []} )
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
    return (
        <div className="my-20 text-textLight dark:text-textDark">
	<h1 className="text-3xl dark:text-titleDark text-titleLight text-center">Gürün Köyleri Hava Durumu</h1>
	<ul className="p-3">
	{reslt.map((forecast, key) => <li key={key} className="text-center py-3">&#9658; <Link href={`/hava-durumu/koyler/gurun/${forecast.results.link}-hava-durumu`}>{forecast.results.title} Hava Durumu</Link></li>)}
</ul>
</div>
    );
}