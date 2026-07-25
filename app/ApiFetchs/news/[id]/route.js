import { Pool } from "./../../pool.js";
export async function GET(request, { params }) {
  const id = (await params).id
  /*
  const getNews = function(){
        return new Promise(function(resolve, reject){
            Pool.getConnection((err, con) => {
                if (err) throw err;
                console.log("Connected!");
                var sql = `SELECT * FROM news WHERE idnews='${id}'`;
                con.query(
                    sql,
                    function(err, rows){      
                        if(rows === undefined){
                            reject(new Error("Hata! Veri bulunamad覺"));
                        }else{
                            resolve(rows);
                        }
                    }
                )
				con.release()
            })
        })
    }
	*/
	async function getNews() {
        try {
            const sql = `SELECT * FROM news WHERE idnews='${id}'`;
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

    const reslt = await getNews()
    return Response.json(reslt)
}