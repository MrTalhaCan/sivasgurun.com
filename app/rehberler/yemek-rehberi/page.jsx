import { Pool } from "@/app/ApiFetchs/pool";
import PostsClient from "@/app/ApiFetchs/postsClient";
export const metadata = {
  title: "Gürün Yemek Rehberi | Sivas Gürün'de Ne Yenir? Yerel Lezzetler",
  description:
    "Sivas Gürün yemek rehberi: Gürün'de ne yenir, yöresel yemekler, geleneksel tarifler ve en meşhur lezzetler. Gürün mutfağını keşfedin.",
  
  keywords: [
    "Gürün yemek rehberi",
    "Gürün'de ne yenir",
    "Sivas Gürün yemekleri",
    "Gürün yöresel yemekler",
    "Sivas mutfağı",
    "Gürün lezzetleri",
    "Anadolu yemekleri",
    "Gürün tarifleri"
  ],

  openGraph: {
    title: "Gürün Yemek Rehberi | Yerel Lezzetleri Keşfet",
    description:
      "Gürün'de ne yenir? En meşhur yöresel yemekler, tarifler ve lezzet durakları bu rehberde.",
    url: "https://sivasgurun.com/rehberler/yemek-rehberi",
    siteName: "sivasgurun.com",
    locale: "tr_TR",
    type: "article",
    images: [
      {
        url: "https://sivasgurun.com/gurun-yerel-lezzetler.jpg",
        width: 700,
        height: 467,
        alt: "Gürün Yemek Rehberi"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Gürün'de Ne Yenir?",
    description:
      "Gürün'ün en meşhur yemeklerini ve yerel lezzetlerini keşfet.",
    images: ["https://sivasgurun.com/gurun-yerel-lezzetler.jpg"]
  },

  alternates: {
    canonical: "https://sivasgurun.com/rehberler/yemek-rehberi"
  },

  robots: {
    index: true,
    follow: true
  },

  other: {
    "geo.region": "TR-58",
    "geo.placename": "Gürün, Sivas",
    "geo.position": "38.722;37.270",
    "ICBM": "38.722, 37.270"
  }
};

export default async function Posts() {
    const getPosts = async function(){
        try {
        const sql = `select * from yazilar WHERE kategori='rehber'`;
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
	const myDir = `/rehberler/yemek-rehberi/`;
    return (
        <div className="flex flex-wrap gap-y-8 items-center divide-solid sm:divide-none divide-y divide-slate-400 text-textLight dark:text-textDark"><PostsClient othr={myDir} posts={reslt} /></div>
    );
}