//import { Pool } from './pool';
async function getTrends() {
  const res = await fetch(`https://sivasgurun.com/ApiFetchs/trends`, {
      next: {
        revalidate: 43200,         // 12 saatte bir güncellensin
        tags: ['trends']     // opsiyonel: manuel güncelleme için tag
      },
    })
  const data = await res.json()
  return data
}

export async function trendsData() {
	/*
      async function getTrends() {
        try {
            const sql = `SELECT * FROM trends ORDER BY idtrends DESC LIMIT 1`;
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
	*/
    const reslt = await getTrends()
    .then(data => { return data != undefined ? data.result : [];
    })
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
	return reslt;
}
