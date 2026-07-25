async function getFootball() {
  const res = await fetch(`https://sivasgurun.com/ApiFetchs/football`, {
      next: {
        revalidate: 10800,        // 3 saatte bir güncellensin
        tags: ['football']     // opsiyonel: manuel güncelleme için tag
      },
    })
  const data = await res.json()
  return data
}

export async function footballData() {
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
    const reslt = await getFootball()
    .then(data => { return data != undefined ? data.result : [];
    })
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
        return reslt;
}
