import { Pool } from "@/app/ApiFetchs/pool";
import GezilecekyerlerClient from "@/app/ApiFetchs/gezilecekyerlerclient";
export const metadata = {
  title: "Sivas Gürün - Gezilecek Yerler",
  description: "Sivas Gürün'de gezilecek yerler: Berrak ve mavinin her tonunu içeren Gökpınar Gölü, yeşilmi yeşil Şuğul Vadisi, tarihi Gürün Kilisesi ve Osmanlı camileriyle doğa ve tarih dolu bir keşif. Gürün gezi rehberiyle eşsiz rotaları keşfedin.",
};
export default async function Posts() {
    const getPosts = async function(){
        try {
        const sql = `select * from gezilecekyerler WHERE town='gürün' ORDER BY idgezilecekyerler desc`;
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
        <div className="flex flex-wrap gap-y-8 items-center justify-center divide-solid sm:divide-none divide-y divide-slate-400 text-textLight dark:text-textDark"><GezilecekyerlerClient posts={reslt} /></div>
    );
}