import Image from 'next/image';
import {footballData} from "@/app/ApiFetchs/football";
export const revalidate = 10800; // 3 saat = 10800 saniye
 
export async function FootballSuperLeague() {

const teams = [];
const fbLeague = await footballData();
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
					team = 'EYÜPSPOR'
					break;
				case 'RAMS%20BA%EF%BF%BDAK%EF%BF%BDEH%EF%BF%BDR%20FUTBOL%20KUL%EF%BF%BDB%EF%BF%BD':
					team = 'BAŞAKŞEHİR FK'
					break;
				case 'G%EF%BF%BDZTEPE%20A.%EF%BF%BD.':
					team = 'GÖZTEPE A.Ş.'
					break;
				case 'SAMSUNSPOR%20A.%EF%BF%BD.':
					team = 'SAMSUNSPOR'
					break;
				case '%20KASIMPA%EF%BF%BDA%20A.%EF%BF%BD.':
					team = 'KASIMPAŞA A.Ş.'
					break;
				case 'T%EF%BF%BDMOSAN%20KONYASPOR':
					team = 'KONYASPOR'
					break;
				case 'HESAP.COM%20ANTALYASPOR':
					team = 'ANTALYASPOR'
					break;
				case '%EF%BF%BDAYKUR%20R%EF%BF%BDZESPOR%20A.%EF%BF%BD.':
					team = 'ÇAYKUR RİZESPOR A.Ş'
					break;
				case 'GAZ%EF%BF%BDANTEP%20FUTBOL%20KUL%EF%BF%BDB%EF%BF%BD%20A.%EF%BF%BD.':
					team = 'GAZİANTEP FUTBOL KULÜBÜ A.Ş.'
					break;
				case 'TRABZONSPOR%20A.%EF%BF%BD.':
					team = 'TRABZONSPOR A.Ş'
					break;
				case 'CORENDON%20ALANYASPOR':
					team = 'ALANYASPOR'
					break;
				case 'ZECORNER%20KAYSER%EF%BF%BDSPOR':
					team = 'KAYSERİSPOR'
					break;
				case 'KOCAEL%EF%BF%BDSPOR':
                                        team = 'KOCAELİSPOR'
                                        break;
				case 'MISIRLI.COM.TR%20FAT%EF%BF%BDH%20KARAG%EF%BF%BDMR%EF%BF%BDK':
                                        team = 'FATİH KARAGÜMRÜK'
                                        break;
				default:
					team = ''
					break;
			}
			return team;
		}
		/*
	async function getLeagueDatas() {
        try {
            const sql = `select * from superlig ORDER BY idsuperlig desc limit 1`;
            const [rows] = await Pool.query(sql); // Pool.query doğrudan bağlantıyı yönetir!
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
    
		for (let index = 0; index < 5; index++) {
			const brokenTeam = fbLeague[index].team;
			const clnTeam	=	brokenTeam.substr(2);
			const absTeam	=	teamCharsCorrection(clnTeam);
			teams.push({...fbLeague[index], "team": absTeam})
		}
	const crown	=	`/crown.png`
	return(
		<table className="w-5/6 m-auto text-textLight dark:text-textDark"><thead><tr><th>Takım</th><th className="text-right">Puan</th></tr></thead><tbody>{teams.map((data, i) => (i != 0) ? <tr key={i}><td className="float-left">{data.team}</td><td className="text-right">{data.score}</td></tr> : <tr key={i}><td className="float-left flex flex-row items-center gap-1">
		<Image
		className="w-6"
        src={`${crown}`}
        width={24}
        height={24}
        alt="Lider"
      />
		{data.team}</td><td className="text-right">{data.score}</td></tr>)}</tbody></table>
	)
}
/*
// Sayfanın 3600 saniye (1 saat) cache'lenmesini sağla
export const revalidate = 3600;
export const fetchCache = "only-cache"; // ISR devrede
export const generateMetadata = { revalidateTag: "super-league" };
*/
