import { Pool } from "./pool";
import Slider from './gurunBelSlider';
export default async function GurunBel() {
    async function getBelediyeData() {
        try {
            const sql = `select * from belediyehaber ORDER BY idbelediyehaber desc limit 1`;
            const [rows] = await Pool.query(sql);

            if (!rows || rows.length === 0) {
                throw new Error("Hata! Veri bulunamadı");
            }
            return rows;
        } catch (error) {
            console.error("Veri çekme hatası:", error);
            return [];
        }
    }

    const reslt = await getBelediyeData()
    .then(data => { return data != undefined ? data[0].results : [] })
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
    console.log(reslt)
    return (
        <Slider news={reslt} />
    );
}