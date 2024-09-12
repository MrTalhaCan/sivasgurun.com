import axios from "axios";
const cheerio = require('cheerio');  // new addition
const mysql = require('mysql2');
import cron from 'node-cron'
var iconv = require('iconv-lite');
export async function FootballSuperLeague() {
		var pool  = mysql.createPool({
			connectionLimit: 10,
			host: "localhost",
			user: "root",
			password: "password",
			database: "gurunilan",
		});
      cron.schedule('00 */3 * * *', async () => {
		pool.getConnection(async (err, con) => {
			if (err) throw err;
			console.log("Connected!");
			const url = `https://www.tff.org/default.aspx?pageID=198`;
			const { data } = await axios.get(url);
			const $ = cheerio.load(data);  // new addition
			const results = [];
			$('table.alanlar2 div.puanDurumuHafta + div table tr').each((i, elem) => {
				if(i == 0 || i > 5) return
				const team = $(elem).find('td:first-child a').text();
				const score = $(elem).find('td:last-child span').text();
				results.push({"team": team, "score": score});
			});
			var sql = `INSERT INTO superlig (results) VALUES ('[{"team": "${results[0].team}", "score": ${results[0].score}}, {"team": "${results[1].team}", "score": ${results[1].score}},{"team": "${results[2].team}", "score": ${results[2].score}}, {"team": "${results[3].team}", "score": ${results[3].score}}, {"team": "${results[4].team}", "score": ${results[4].score}}]')`;
			con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
			con.release();
			});
		});
		  
	  })
		function teamCharsCorrection(brokenTeam){
			var team = encodeURI(brokenTeam)
			switch (team) {
				case 'FENERBAH%EF%BF%BDE%20A.%EF%BF%BD.':
					team = 'FENERBAHÇE A.Ş.'
					break;
				case 'GALATASARAY%20A.%EF%BF%BD.':
					team = 'GALATASARAY A.Ş.'
					break;
				case 'BE%EF%BF%BD%EF%BF%BDKTA%EF%BF%BD%20A.%EF%BF%BD.':
					team = 'BEŞİKTAŞ A.Ş.'
					break;
				case '%EF%BF%BDKAS%20EY%EF%BF%BDPSPOR':
					team = 'İKAS EYÜPSPOR'
					break;
				case 'RAMS%20BA%EF%BF%BDAK%EF%BF%BDEH%EF%BF%BDR%20FUTBOL%20KUL%EF%BF%BDB%EF%BF%BD':
					team = 'RAMS BAŞAKŞEHİR FK'
					break;
				case 'G%EF%BF%BDZTEPE%20A.%EF%BF%BD.':
					team = 'GÖZTEPE A.Ş.'
					break;
				case 'SAMSUNSPOR%20A.%EF%BF%BD.':
					team = 'SAMSUNSPOR A.Ş.'
					break;
				case 'KASIMPA%EF%BF%BDA%20A.%EF%BF%BD.':
					team = 'KASIMPAŞA A.Ş.'
					break;
				case 'T%EF%BF%BDMOSAN%20KONYASPOR':
					team = 'TÜMOSAN KONYASPOR'
					break;
				case 'NET%20GLOBAL%20S%EF%BF%BDVASSPOR':
					team = 'NET GLOBAL SİVASSPOR'
					break;
				case 'ANTALYASPOR%20A.%EF%BF%BD.':
					team = 'ANTALYASPOR A.Ş.'
					break;
				case '%EF%BF%BDAYKUR%20R%EF%BF%BDZESPOR%20A.%EF%BF%BD.':
					team = 'ÇAYKUR RİZESPOR A.Ş'
					break;
				case 'GAZ%EF%BF%BDANTEP%20FUTBOL%20KUL%EF%BF%BDB%EF%BF%BD%20A.%EF%BF%BD.':
					team = 'GAZİANTEP FUTBOL KULÜBÜ A.Ş.'
					break;
				case 'S%EF%BF%BDPAY%20BODRUM%20FK':
					team = 'SİPAY BODRUM FK'
					break;
				case 'TRABZONSPOR%20A.%EF%BF%BD.':
					team = 'TRABZONSPOR A.Ş'
					break;
				case 'CORENDON%20ALANYASPOR':
					team = 'CORENDON ALANYASPOR'
					break;
				case 'BELLONA%20KAYSER%EF%BF%BDSPOR':
					team = 'BELLONA KAYSERİSPOR'
					break;
				case 'ATAKA%EF%BF%BD%20HATAYSPOR':
					team = 'ATAKAŞ HATAYSPOR'
					break;
				case 'ADANA%20DEM%EF%BF%BDRSPOR%20A.%EF%BF%BD.':
					team = 'ADANA DEMİRSPOR A.Ş.'
					break;
				default:
					team = ''
					break;
			}
			return team;
		}
	const getLeagueDatas = function(){
        return new Promise(function(resolve, reject){
			pool.getConnection((err, con) => {
				if (err) throw err;
				console.log("Connected!");
				var sql = `select * from gurunilan.superlig ORDER BY idsuperlig desc limit 1`;
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
    const reslt = await getLeagueDatas()
    .then(data => {
		const rawTeam	=	data[0].results;
		const newTeamScore	=	[];
		for (let index = 0; index < rawTeam.length; index++) {
			const brokenTeam = rawTeam[index].team;
			const clnTeam	=	brokenTeam.substr(2);
			const absTeam	=	teamCharsCorrection(clnTeam);
			newTeamScore.push({...rawTeam[index], "team": absTeam})
		}
		return newTeamScore
    })
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
	const crown	=	`/crown.png`
	return(
		<table className="w-5/6 m-auto"><thead><tr><th>Takım</th><th className="text-right">Puan</th></tr></thead><tbody>{reslt.map((data, i) => (i != 0) ? <tr key={i}><td className="float-left">{data.team}</td><td className="text-right">{data.score}</td></tr> : <tr key={i}><td className="float-left flex flex-row items-center gap-1"><img className="w-6" src={`${crown}`} />{data.team}</td><td className="text-right">{data.score}</td></tr>)}</tbody></table>
	)
}