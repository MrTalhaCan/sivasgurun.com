import { Pool } from "@/app/ApiFetchs/pool";
import PostsClient from "@/app/ApiFetchs/postsClient";
export const metadata = {
  title: "Sivas Gürün - Yazılar",
  description: "Sivas'ın Gürün ilçesinin tarihi ve kültürel zenginliklerini keşfedin: Hititlerden Osmanlı'ya uzanan geçmişi, Gürün Ulu Cami, Gürün Toraman Cami ve Kaya Evleri gibi önemli yapıları ve diğer mekan ile lokasyonları tanıyın.",
};
export default async function Posts() {
    const getPosts = async function(){
        try {
        const sql = `select * from yazilar WHERE region='gürün' AND subregion IS NULL AND idyazilar <> 12 AND kategori='yazi' ORDER BY idyazilar desc`;
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
const myDir = `/mekanlar/gurun/`;
    return (
        <div className="flex flex-wrap gap-y-8 items-center divide-solid sm:divide-none divide-y divide-slate-400 text-textLight dark:text-textDark"><PostsClient othr={myDir} posts={reslt} /></div>
    );
}