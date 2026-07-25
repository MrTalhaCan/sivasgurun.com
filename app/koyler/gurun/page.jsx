import { Pool } from "@/app/ApiFetchs/pool";
import YazilarClient from "@/app/ApiFetchs/yazilarclient";
export const metadata = {
  title: "Sivas Gürün - Köyler",
  description: "Sivas Gürün ilçesinin 60 köyü hakkında detaylı bilgiler: Akdere, Akpınar, Ayvalı, Bağlıçay, Bahçeiçi, Başören, Beypınarı, Bozhüyük, Böğrüdelik, Camiliyurt, Çamlıca, Çiçekyurt, Davulhüyük, Dayakpınar, Deveçayırı, Dürmepınar, Erdoğan, Eskibektaşlı, Eskihamal, Göbekören, Gökçeyazı, Güldede, Güllübucak, Güneş, Hüyüklüyurt, İncesu, Kaledere, Karadoruk, Karahisar, Karakuyu, Karaören, Karapınar, Kaşköy, Kavakköy, Kayalar, Kaynarca, Kılıçdoğan, Kındıralık, Kızılburun, Kızılören, Kızılpınar, Konakpınar, Koyunlu, Külahlı, Kürkçü, Mağara, Mahkenli, Osmandede, Reşadiye, Sarıca, Sularbaşı, Tepecik, Yaylacık, Yazyurdu, Yelken, Yenibektaşlı, Yeşildere, Yılanhüyük, Yolgeçen ve Yuva köylerinin tarihçesi, kültürü ve doğal güzellikleri hakkında bilgi edinin.",
};
export default async function Posts() {
    const getPosts = async function(){
        try {
        const sql = `select * from yazilar WHERE region='gürün' AND subregion='köy' ORDER BY idyazilar`;
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
        <div className="flex flex-wrap gap-y-8 items-center justify-center divide-solid sm:divide-none divide-y divide-slate-400 text-textLight dark:text-textDark"><YazilarClient posts={reslt} /></div>
    );
}