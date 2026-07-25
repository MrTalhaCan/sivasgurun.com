import { Pool } from "./../../ApiFetchs/pool.js";
export default async function FAQ(){
    const getDestData = async () => {
    try {
        const sql = `select * from mesafeler ORDER BY idmesafeler desc limit 1`;
        const [rows] = await Pool.query(sql); // Pool.query doğrudan bağlantıyı yönetir!
        return rows;
    } catch (err) {
        console.error("MySQL Error:", err);
        throw err;
    }
};
    const reslt = await getDestData()
    .then(data => { return data != undefined ? data[0].results : [] })
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })

    return(
        <>
            {reslt.map((dest, i) => <div className="my-5 p-2 text-textLight" key={i}><h2 className="text-xl font-bold dark:text-titleDark">{dest.title}</h2><p className="tracking-wide mt-2 p-2 border-l-4 border-slate-500 dark:border-slate-500 dark:text-textDark">{dest.answer}</p>{/*<figure className="p-2">
  <iframe src={dest.rota} title={`güzergah-${i}`} width="400" height="300" style={{border: 0, width: '100%', maxWidth: 400}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <figcaption></figcaption>
</figure>*/}</div>)}
        </>
    )
}