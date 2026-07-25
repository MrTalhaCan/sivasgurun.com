import { Pool } from "./pool";
import SecondHandClient from "./seconhandClient";
export default async function SecondHand() {
	
	const getSecondHandData = async () => {
    try {
        const sql = `select * from ikinciel ORDER BY idikinciel desc limit 1`;
        const [rows] = await Pool.query(sql); // Pool.query doğrudan bağlantıyı yönetir!
        return rows;
    } catch (err) {
        console.error("MySQL Error:", err);
        throw err;
    }
};
	
    const letgo =   'https://www.letgo.com';
    const reslt = await getSecondHandData()
    .then(data => {return data != undefined ? data[0].foods : []} )
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
    return (
        <div className="flex flex-wrap gap-y-8 items-center divide-solid sm:divide-none divide-y divide-slate-400 text-textLight dark:text-textDark"><SecondHandClient items={reslt} /></div>
    );
}