import * as mysql from 'mysql'
import cron from 'node-cron';
export default async function Trends() {
    var pool  = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "password",
        database: "gurunilan",
    });
    const trendsAry =  [];
    cron.schedule('00 */3 * * *', async () => {
        pool.getConnection(async (err, con) => {
            if (err) throw err;
            console.log("Connected!");
            await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftrends.google.com%2Ftrending%2Frss%3Fgeo%3DTR`).then(response => response.json()).then(data => {
                data.items.forEach((trend, i) => {
                    if(i>10) return
                    console.log(trend)
                    trendsAry.push(`"${trend.title}"`)
                });
            }).catch(err => console.log(err))
            var sql = `INSERT INTO trends (results) VALUES ('[${trendsAry}]')`;
            con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            con.release();
            });
        });
      });
      const getTrends = function(){
        return new Promise(function(resolve, reject){
            pool.getConnection((err, con) => {
                if (err) throw err;
                console.log("Connected!");
                var sql = `select * from gurunilan.trends ORDER BY idtrends desc limit 1`;
                con.query(
                    sql, 
                    function(err, rows){                                                
                        if(rows === undefined){
                            reject(new Error("Hata! Veri bulunamadı"));
                        }else{
                            resolve(rows);
                            con.release();
                        }
                    }
                )
            });
        }
    )}   
    const reslt = await getTrends()
    .then(data => {
        const sub   =   data[0].results.substr(1, data[0].results.length - 2)
        const endAry = sub.split(",")
        const noDoublequote = endAry.map(element => element.replace(/["']/g, "").trim());
        return noDoublequote
    })
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
    return (
        <ul>{reslt.map((res, i) => <li key={i}># {res}</li>)}</ul>
    );
}