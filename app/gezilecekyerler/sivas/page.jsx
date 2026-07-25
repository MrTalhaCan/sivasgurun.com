import { Pool } from "@/app/ApiFetchs/pool";
import GezilecekyerlerClient from "@/app/ApiFetchs/gezilecekyerlerclient";
export const metadata = {
  title: "Sivas Merkez - Gezilecek Yerler",
  description: "Sivas'ta gezilecek yerler: Çifte Minareli Medrese, Sivas Kongre Binası Atatürk ve Kongre Müzesi, Gök Medrese, I. İzzeddin Keykavus tarafından yapıtrılan Şifaiye Medresesi, Sivas Kalesi ve daha fazlasıyla tarih ve kültür dolu bir keşif sizi bekliyor. Sivas gezi rehberiyle Selçuklu ve Osmanlı mimarisini yakından tanıyın.",
};
export default async function Posts() {
    const getPosts = async function(){
        try {
        const sql = `select * from gezilecekyerler WHERE town='merkez' ORDER BY idgezilecekyerler desc`;
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