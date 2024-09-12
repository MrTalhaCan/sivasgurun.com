import axios from "axios";
import Slider from './gurunBelSlider';
const cheerio = require('cheerio');  // new addition
const mysql = require('mysql2');
import cron from 'node-cron'
export default async function GurunBel() {
    var pool  = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "password",
        database: "gurunilan",
    });
      cron.schedule('00 */3 * * *', () => {
		pool.getConnection(async (err, con) => {
            if (err) throw err;
            console.log("Connected!");
            const url = `https://gurun.bel.tr/post/news/0/tum-haberler.html`;
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);  // new addition
            const results = [];
            $('div.habertext ul li').each((i, elem) => {
                if(i == 0 || i > 5) return
                const title = $(elem).find('h4.title').text() == undefined ? "" : $(elem).find('h4.title').text();
                const description = $(elem).find('p').text() == undefined ? "" : $(elem).find('p').text().substring(2).replace(/'/g, "\\'");
                const img = $(elem).find('a img').attr('src') == undefined ? "" : $(elem).find('a img').attr('src');
                const link = $(elem).find('a').attr('href') == (undefined || "#") ? "" : $(elem).find('a').attr('href');
                results.push({"title": title, "description": description, "img": img, "link": link});
            });
            var sql = `INSERT INTO belediyehaber (results) VALUES ('[{"title": "${results[0].title}", "description": "${results[0].description}", "img": "${results[0].img}", "link": "${results[0].link}"}, {"title": "${results[1].title}", "description": "${results[1].description}", "img": "${results[1].img}", "link": "${results[1].link}"},{"title": "${results[2].title}", "description": "${results[2].description}", "img": "${results[2].img}", "link": "${results[2].link}"}, {"title": "${results[3].title}", "description": "${results[3].description}", "img": "${results[3].img}", "link": "${results[3].link}"}, {"title": "${results[4].title}", "description": "${results[4].description}", "img": "${results[4].img}", "link": "${results[4].link}"}]')`;
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
              con.release()
            });
        });
	  })
    const getBelediyeData = function(){
        return new Promise(function(resolve, reject){
            pool.getConnection((err, con) => {
                if (err) throw err;
				console.log("Connected!");
                var sql = `select * from gurunilan.belediyehaber ORDER BY idbelediyeHaber desc limit 1`;
                con.query(
                    sql,
                    function(err, rows){                                                
                        if(rows === undefined){
                            reject(new Error("Hata! Veri bulunamadı"));
                        }else{
                            resolve(rows);
                            con.release()
                        }
                    }
                )
            })
        })
    }
        
    const reslt = await getBelediyeData()
    .then(data => { return data[0].results })
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
    return (
        <Slider news={reslt} />
    );
}