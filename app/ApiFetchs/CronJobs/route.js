import axios from "axios";
import { NextResponse } from "next/server.js";
import { Pool } from "../pool.js";
import * as cheerio from "cheerio"
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { escape } from "mysql2";
import {fileURLToPath} from 'url';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
export const dynamic = 'force-dynamic';
import * as xml2js from 'xml2js';


export async function GET(req, res) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let msg = "not yet!";
	async function doCronJobs(){
		/*
			async function InsertErthQuakeData() {
				try {						
					const url = "http://udim.koeri.boun.edu.tr/zeqmap/xmlt/son24saat.xml";

					const response = await axios.get(url);
					const xml = response.data;
					console.log("xml data ", xml)
					const parser = new xml2js.Parser({ explicitArray: false });
					const result = await parser.parseStringPromise(xml);

					// Her <e> etiketi bir deprem verisi
					const earthquakes = result.eqlist.earhquake;
					console.log("her bir data:", earthquakes)
					let dbLastQuakeDate = null;
					const quakeQry = `SELECT quakedate FROM earthquakes ORDER BY quakedate DESC LIMIT 1`;
					try {
						const [rows] = await Pool.query(quakeQry); // mysql2/promise için
						
						if (rows.length > 0) {
							dbLastQuakeDate = new Date(rows[0].quakedate);
						}
					} catch (err) {
						console.error("MySQL Error:", err);
					}
					for (const quake of earthquakes) {
					  const quakedate = quake["$"].name;
					  const loc = quake["$"].lokasyon;
					  console.log(`quakedate: ${quakedate} ....... quakeloc: ${loc}`)
					  if(loc.search('GURUN') > -1 && new Date(quakedate) > new Date(dbLastQuakeDate)){
						 const lat = parseFloat(quake["$"].lat);
						  const lng = parseFloat(quake["$"].lng);
						  const mag = parseFloat(quake["$"].mag);
						  const depth = parseFloat(quake["$"].Depth);
						  await Pool.query(`
							INSERT INTO earthquakes (quakedate, loc, lat, lng, mag, depth)
							VALUES (?, ?, ?, ?, ?, ?)
						  `, [quakedate, loc, lat, lng, mag, depth]); 
					  } 
					}
					console.log("Earthquakes successfully inserted!");
					
				} catch (error) {
					console.error("Earthquake Insert Error", error);
				}
			}
			
			await InsertErthQuakeData()
			*/
			
			async function InsertFootballData() {
				try {						
					//football
					const footballUrl = `https://www.tff.org/default.aspx?pageID=198`;
					const footballData  = (await axios.get(footballUrl)).data;
					const $football = cheerio.load(footballData);  // new addition
					const footballResults = [];
					$football('table.alanlar2 div.puanDurumuHafta + div table tr').each((i, elem) => {
						if(i == 0 || i > 11) return
						const team = $football(elem).find('td:first-child a').text();
						const score = $football(elem).find('td:last-child span').text();
						console.log(`${team} : ${score}`)
						footballResults.push({"team": team, "score": score});
					});
					var footballQry = `INSERT INTO superlig (results) VALUES ('[{"team": "${footballResults[0].team}", "score": ${footballResults[0].score}}, {"team": "${footballResults[1].team}", "score": ${footballResults[1].score}},{"team": "${footballResults[2].team}", "score": ${footballResults[2].score}}, {"team": "${footballResults[3].team}", "score": ${footballResults[3].score}}, {"team": "${footballResults[4].team}", "score": ${footballResults[4].score}}]')`;
					
					
					await Pool.query(footballQry);
					
				} catch (error) {
					console.error("Football Insert Error", error);
				}
			}
			
			await InsertFootballData()
			
			/*
			async function InsertBSLData() {
				try {						
					//football
					const bslUrl = `https://www.tbf.org.tr/ligler/bsl-2024-2025/puan-durumu`;
					const bslData  = (await axios.get(bslUrl)).data;
					const $bsl = cheerio.load(bslData);  // new addition
					const bslResults = [];
					$bsl('container-main-content div:nth-child(3) table tr:nth-child(odd)').each((i, elem) => {
						if(i == 0 || i > 10) return
						const team = $bsl(elem).find('td:nth-child(4)').text();
						const score = $bsl(elem).find('td:nth-child(13)').text();
						console.log(`${team} : ${score}`)
						bslResults.push({"team": team, "score": score});
					});
					console.log(bslResults)
					var bslQry = `INSERT INTO bsl (results) VALUES ('[{"team": "${bslResults[0].team}", "score": ${bslResults[0].score}}, {"team": "${bslResults[1].team}", "score": ${bslResults[1].score}},{"team": "${bslResults[2].team}", "score": ${bslResults[2].score}}, {"team": "${bslResults[3].team}", "score": ${bslResults[3].score}}, {"team": "${bslResults[4].team}", "score": ${bslResults[4].score}}]')`;
					
					await Pool.query(bslQry);
					
				} catch (error) {
					console.error("BSL Insert Error", error);
				}
			}
			
			await InsertBSLData()
			*/
			
			
			//BSL INSERT
/*
			await (async () => {
				const bslDomain =  `https://www.tbf.org.tr/ligler/bsl-2024-2025/puan-durumu`
			const bslAry = []
			const getBSL = async () => {
				const browser = await chromium.launch({
					headless: true, // Görünmez mod
					timeout: 120000, // 120 seconds
					args: ['--no-sandbox', '--disable-setuid-sandbox'],
				});
			
				const page = await browser.newPage();
				await page.goto(`${bslDomain}`, { timeout: 60000, waitUntil: 'domcontentloaded' });
				// Sayfanın yüklenmesini bekle
				await page.waitForSelector('.container-main-content div:nth-child(3) table tr', { timeout: 10000, state: 'visible' });
				// Tablonun yüklendiğinden emin ol
				await page.waitForFunction(() => {
					return document.querySelectorAll('.container-main-content div:nth-child(3) table tr').length > 1;
				});
				const rows = await page.$$('.container-main-content div:nth-child(3) table tr:nth-child(odd)');
				console.log(rows.length)
				for (let index = 0; index < 5; index++) {
					const team = await rows[index].$('td:nth-child(4)');
					const score = await rows[index].$('td:nth-child(13)');
					bslAry[index] = {team: title, score: fullyear};
					console.log("bsl takım adı ve puanı", bslAry[index])
				}
				await browser.close();
			};
			await getBSL();
				try {
					const bslQry = `INSERT INTO bsl (results) VALUES (?)`;
					const params = [
					  JSON.stringify(bslAry)
					];

					await Pool.query(bslQry, params);
				} catch (err) {
					console.error("MySQL Error:", err);
					throw err;
				}
			})()
*/			
			
			
			//local-goverment
			/*
			const govUrl = `https://gurun.bel.tr/post/news/0/tum-haberler.html`;
			const { data } = await axios.get(govUrl);
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
			var govQry = `INSERT INTO belediyehaber (results) VALUES ('[{"title": "${results[0].title}", "description": "${results[0].description}", "img": "${results[0].img}", "link": "${results[0].link}"}, {"title": "${results[1].title}", "description": "${results[1].description}", "img": "${results[1].img}", "link": "${results[1].link}"},{"title": "${results[2].title}", "description": "${results[2].description}", "img": "${results[2].img}", "link": "${results[2].link}"}, {"title": "${results[3].title}", "description": "${results[3].description}", "img": "${results[3].img}", "link": "${results[3].link}"}, {"title": "${results[4].title}", "description": "${results[4].description}", "img": "${results[4].img}", "link": "${results[4].link}"}]')`;
			con.query(govQry, function (err, result) {
				if (err) throw err;
				console.log("localgov inserted");
				con.release();
			});
			*/
			//trends
			async function InsertTrends() {
				try {
					const trendsAry =  [];
					await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftrends.google.com%2Ftrending%2Frss%3Fgeo%3DTR`, { cache: "no-cache" }).then(response => response.json()).then(data => {
						data.items.forEach((trend, i) => {
							if(i>10) return
							console.log(trend)
							trendsAry.push(`"${trend.title}"`)
						});
					}).catch(err => console.log(err))
					var trendsQry = `INSERT INTO trends (results) VALUES ('[${trendsAry}]')`;
					await Pool.query(trendsQry);
				} catch (error) {
					console.error("Trends Insert Error:", error);
				}
			}

			await InsertTrends()
			
			async function downloadImage(url, filename) {
				const dir = path.join(__dirname, '..', '..', '..', 'uploads', 'school-imgs');  // Klasör yolu
		
				if (!fs.existsSync(dir)) {
				  fs.mkdirSync(dir);  // Klasörü oluştur (recursive)
				}
			  
				const filePath = path.join(dir, filename);
				const writer = fs.createWriteStream(filePath);      
				const response = await axios({
				  url,
				  method: 'GET',
				  responseType: 'stream',
				});
			  
				response.data.pipe(writer);
			  
				return new Promise((resolve, reject) => {
				  writer.on('finish', resolve);
				  writer.on('error', reject);
				});
			}
			
			//Cumhuriyet school
			await (async () => {
				const cumhuriyetDomain =  `https://guruncumhuriyet.meb.k12.tr`
			const cumhuriyetSchoolAry = []
			let schoolQry = `SELECT postid FROM schools WHERE schoolname='Gürün Cumhuriyet ilkokulu' ORDER BY idschools DESC LIMIT 1`;
				let lastPostId = null;
				try {
					const [rows] = await Pool.query(schoolQry); // mysql2/promise için
					
					if (rows.length > 0) {
						lastPostId = rows[0].postid;
					}
				} catch (err) {
					console.error("MySQL Error:", err);
					throw err;
				}
			const getCumhuriyetNews = async () => {
				const browser = await chromium.launch({
					headless: true, // Görünmez mod
					timeout: 120000, // 60 seconds
					args: ['--no-sandbox', '--disable-setuid-sandbox'],
				});
			
				const page = await browser.newPage();
				await page.goto(`${cumhuriyetDomain}/icerikler/listele_165341_haber`, { timeout: 60000, waitUntil: 'domcontentloaded' });
				await page.waitForResponse(response => 
					response.url().includes('tema/icerik_listele_ajax') && response.status() === 200
				);
				// Sayfanın yüklenmesini bekle
				await page.waitForSelector('#icerik-listesi_wrapper table tbody tr', { timeout: 10000, state: 'visible' });
				// Tablonun yüklendiğinden emin ol
				await page.waitForFunction(() => {
					return document.querySelectorAll('#icerik-listesi_wrapper table tbody tr').length > 1;
				});
				const rows = await page.$$('#icerik-listesi_wrapper table tbody tr');
				console.log(rows.length)
				for (let index = 0; index < 2; index++) {
					const imgsrc = await rows[index].$eval('td:first-child a img', el => el.getAttribute('src'));
					const postAtag = await rows[index].$('td:first-child a');
					let pageUrl = postAtag ? await postAtag.getAttribute('href') : null;
					const spltdLink = pageUrl.split('_');
					const postid = spltdLink[spltdLink.length - 1].split('.')[0];
					if(postid == lastPostId) break;
					const title = await rows[index].$eval('td:last-child .blog_txt h3', el => el.innerText.trim());
					const datePlace = await rows[index].$eval('td:last-child .blog_txt small', el => el.innerText.trim());
					const fullyear = datePlace.split('-')[0].split(':')[1].trim();
					const newimgname = `okul-haber-${Math.floor(Math.random() * 10)}-${new Date().getTime()}.jpg`
					cumhuriyetSchoolAry[index] = {title: title, fullyear: fullyear, postid: postid};
					if(imgsrc){
						await downloadImage(`${cumhuriyetDomain}${imgsrc}`, newimgname)
						cumhuriyetSchoolAry[index].imgsrc = newimgname;
					}
					console.log(cumhuriyetSchoolAry[index])
				}
				await browser.close();
			};
			await getCumhuriyetNews();
			if(cumhuriyetSchoolAry.length > 0){
				try {
					schoolQry = `INSERT INTO schools (datejson, datadate, schoolname, postid) VALUES (?, ?, ?, ?)`;
					const params = [
					  JSON.stringify(cumhuriyetSchoolAry),
					  cumhuriyetSchoolAry[0].fullyear,
					  'Gürün Cumhuriyet ilkokulu',
					  Number(cumhuriyetSchoolAry[0].postid)
					];

					await Pool.query(schoolQry, params);
				} catch (err) {
					console.error("MySQL Error:", err);
					throw err;
				}
			}
			})()
			
			
			await (async () => {
			const browser = await chromium.launch({
			headless: true, // Görünmez mod
			timeout: 120000, // 60 seconds
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
			});
			let schoolQry = `SELECT postid FROM schools WHERE schoolname='Gürün Atatürk Ortaokulu' ORDER BY idschools DESC LIMIT 1`;
			let lastPostId = null;
			try {
				const [rows] = await Pool.query(schoolQry); // mysql2/promise için
				
				if (rows.length > 0) {
					lastPostId = rows[0].postid;
				}
			} catch (err) {
				console.error("MySQL Error:", err);
				throw err;
			}

			//ataturk school
			const ataturkDomain = `https://gurunataturkortaokulu.meb.k12.tr`
			const page = await browser.newPage();
			await page.goto(`${ataturkDomain}/icerikler/icerikler/listele_1052154_Haberler`, { timeout: 60000, waitUntil: 'domcontentloaded' });
			await page.waitForResponse(response => 
				response.url().includes('tema/icerik_listele_ajax') && response.status() === 200
			);
			// Sayfanın yüklenmesini bekle
			await page.waitForSelector('#icerik-listesi_wrapper', { timeout: 10000, state: 'visible' });
			// Tablonun yüklendiğinden emin ol
			await page.waitForFunction(() => {
				return document.querySelectorAll('#icerik-listesi_wrapper table tbody tr').length > 0;
			});
			
			const ataSchoolAry = []
			const rows = await page.$$('#icerik-listesi_wrapper table tbody tr');

			for (let index = 0; index < 2; index++) {
				const datedata = await rows[index].$eval('td:first-child .tarih .gun', el => el.innerText.trim());
				const month = await rows[index].$eval('td:first-child .tarih .ay', el => el.innerText.trim());
				const year = await rows[index].$eval('td:first-child .tarih .yil', el => el.innerText.trim());
				const imgElement = await rows[index].$('td:nth-child(2) a img');
				const postAtag = await rows[index].$('td:nth-child(2) a');
				let pageUrl = postAtag ? await postAtag.getAttribute('href') : null;
				const spltdLink = pageUrl.split('_');
				const postid = spltdLink[spltdLink.length - 1].split('.')[0];
				if(postid == lastPostId) break;
				let imgsrc = imgElement ? await imgElement.getAttribute('src') : null;
				const title = await rows[index].$eval('td:last-child .liste_baslik', el => el.innerText.trim());
				const dateEl = await rows[index].$('td:first-child .tarih .gun time');
				const fullyear = imgElement ? await dateEl.getAttribute('datetime') : null;
				let cleanedData = datedata.replace(/\n+/g, ' ').trim();

				// Kullanım örneği
				if(imgsrc){
					const imageUrl = `${ataturkDomain}${imgsrc}`;  // Fotoğrafın URL'si
					console.log(imageUrl)
					const filename = `okul-haber-${Math.floor(Math.random() * 10)}-${new Date().getTime()}.jpg`; // Kaydedilecek dosya adı
					downloadImage(imageUrl, filename)
					.then(() => {
						console.log('Fotoğraf başarıyla indirildi!'); 
					})
					.catch((error) => {
					console.error('Fotoğraf indirilemedi:', error);
					});
					imgsrc = filename;
				}
				ataSchoolAry[index] = {datedata: cleanedData, month: month, year: year, imgsrc: imgsrc, title: title, fullyear: fullyear, postid: postid};
				console.log(ataSchoolAry[index])
			}
			await browser.close();
			if(ataSchoolAry.length > 0){
				try {
					schoolQry = `INSERT INTO schools (datejson, datadate, schoolname, postid) VALUES (?, ?, ?, ?)`;
					const params = [
					  JSON.stringify(ataSchoolAry),
					  ataSchoolAry[0].fullyear,
					  'Gürün Atatürk Ortaokulu',
					  Number(ataSchoolAry[0].postid)
					];

					await Pool.query(schoolQry, params);
				} catch (err) {
					console.error("MySQL Error:", err);
					throw err;
				}
			}
			
		})();

		//Yibo school
		await (async () => {
			const yiboDomain =  `https://gurunortaokulu.meb.k12.tr`
			const yiboSchoolAry = []
			let schoolQry = `SELECT postid FROM schools WHERE schoolname='Gürün Yibo Ortaokulu' ORDER BY idschools DESC LIMIT 1`;
			let lastPostId = null;
			try {
				const [rows] = await Pool.query(schoolQry); // mysql2/promise için
				
				if (rows.length > 0) {
					lastPostId = rows[0].postid;
				}
			} catch (err) {
				console.error("MySQL Error:", err);
				throw err;
			}
			const getYiboNews = async () => {
				const browser = await chromium.launch({
				headless: true, // Görünmez mod
				timeout: 120000, // 60 seconds
				args: ['--no-sandbox', '--disable-setuid-sandbox'],
				});
			
				const page = await browser.newPage();
				await page.goto(`${yiboDomain}/icerikler/icerikler/listele_165366_Haberler`, { timeout: 60000, waitUntil: 'domcontentloaded' });
				// Sayfanın yüklenmesini bekle
				await page.waitForResponse(response => 
					response.url().includes('tema/icerik_listele_ajax') && response.status() === 200
				);
				await page.waitForSelector('#icerik-listesi_wrapper table tbody tr', { timeout: 10000, state: 'visible' });
				// Tablonun yüklendiğinden emin ol
				await page.waitForFunction(() => {
					return document.querySelectorAll('#icerik-listesi_wrapper table tbody tr').length > 1;
				});
				const rows = await page.$$('#icerik-listesi_wrapper table tbody tr');
				console.log(rows.length)
				for (let index = 0; index < 2; index++) {
					const title = await rows[index].$eval('td:last-child', el => el.innerText.trim());
					const pageUrlEl = await rows[index].$('td:last-child a');
					let pageUrl = pageUrlEl ? await pageUrlEl.getAttribute('href') : null;
					const spltdLink = pageUrl.split('_');
					const postid = spltdLink[spltdLink.length - 1].split('.')[0];
					if(postid == lastPostId) break;
					const fullyear = await rows[index].$eval('td:first-child', el => el.innerText.trim());           
					yiboSchoolAry[index] = {title: title, fullyear: fullyear, pageUrl: pageUrl, postid: postid};
				}
				await browser.close();
			};
			async function getLinksData(url, indx){
				const browser = await chromium.launch({
					headless: true, // Görünmez mod
					args: ['--no-sandbox', '--disable-setuid-sandbox'],
				});
				
				const page = await browser.newPage();
				await page.goto(`${yiboDomain}${url}`, { timeout: 60000, waitUntil: 'domcontentloaded' });
				// Sayfanın yüklenmesini bekle
				await page.waitForSelector('.icerik-yazi', { timeout: 10000, state: 'visible' });
			
				// icerigin yüklendiğinden emin ol
				await page.waitForFunction(() => {
					return document.querySelectorAll('.icerik-yazi').length > 0;
				});
				const comnEl = await page.$('.icerik-yazi');
					const newsImgEl = await comnEl.$('img');
					let imgsrc = newsImgEl ? await newsImgEl.getAttribute('src') : null;            
				await browser.close();
				return imgsrc;
			}
			await getYiboNews()
			for (let index = 0; index < yiboSchoolAry.length; index++) {        
				const pageImgSrc = await getLinksData(yiboSchoolAry[index].pageUrl, index)
				const newimgname = `okul-haber-${Math.floor(Math.random() * 10)}-${new Date().getTime()}.jpg`
				if(pageImgSrc){
				await downloadImage(`${yiboDomain}${pageImgSrc}`, newimgname)
				yiboSchoolAry[index].imgsrc = newimgname;
				}
				console.log(yiboSchoolAry[index])
			}
			if(yiboSchoolAry.length > 0){
				try {
					schoolQry = `INSERT INTO schools (datejson, datadate, schoolname, postid) VALUES (?, ?, ?, ?)`;
					const params = [
					  JSON.stringify(yiboSchoolAry),
					  yiboSchoolAry[0].fullyear,
					  'Gürün Yibo Ortaokulu',
					  Number(yiboSchoolAry[0].postid)
					];

					await Pool.query(schoolQry, params);
				} catch (err) {
					console.error("MySQL Error:", err);
					throw err;
				}
			}
		})()
		/*
		// news
		const getLastNews = async function(){
			try {
				var sql = `SELECT idnews, uniqueid FROM news ORDER BY idnews DESC LIMIT 1`;
				const [rows] = await Pool.query(sql);
				return rows;
			} catch (err) {
				console.error("MySQL Error:", err);
				throw err;
			} 
		}
	
		const reslt = await getLastNews()
		const newsDbLastItem = reslt[0];
		const webDataFnc = async () => {
			const newsurl = `https://rss.haberler.com/konu.asp?konu=G%C3%9CR%C3%9CN`;
			const newsHrefs  = (await axios.get(newsurl)).data;
			const $newsHrefLoad = cheerio.load(newsHrefs);  // new addition
			const newsLinks = [];
			$newsHrefLoad('tr').each((i, elem) => {
				if(i < 10){
					const newsLink = $newsHrefLoad(elem).find('td:last-child a').attr('href');
					const spltedAry = newsLink.split('/')
					spltedAry.shift();
					spltedAry.pop();
					const dashSplt = spltedAry[spltedAry.length - 1].split('-');
					const uniqueid = dashSplt[dashSplt.length - 2];
					const absLink = spltedAry.filter(v => v != '').join('/')
					if(uniqueid > newsDbLastItem.uniqueid) newsLinks.push(absLink)
				}
			});
			const datasss = Promise.all(newsLinks.map(async (newshref) => {
				const pageurl = `https://${newshref}`;
				const newsDatas  = (await axios.get(pageurl)).data;
				const $loadNews = cheerio.load(newsDatas);
				let newsObj   = {}  // new addition
				$loadNews('article#detaySol').each((i, elem) => {
					if(i < 5){
						const uniqueid = $loadNews(elem).attr('data-tuhps')
						const newsTitle = $loadNews(elem).find('div#icerikAlani h1').text();
						const newsBrief = $loadNews(elem).find('div#icerikAlani h2').text();
						const prgs = [];
						$loadNews(elem).find('div#icerikAlani main.haber_metni p').each((i,el) => prgs[i] = $loadNews(el).text());
						const newsDate = $loadNews(elem).find('div#icerikAlani div.detay-verisi-a div.detay-verisi-time').text();
						const keywordList = [];
						$loadNews(elem).find('div#icerikAlani main.haber_metni div#nwsKeywords a').each((i,el) => keywordList[i] = $loadNews(el).text());
						newsObj = {uniqueid: uniqueid, title: newsTitle, brief: newsBrief, date: newsDate, paragrs: prgs.join(' '), keywords: keywordList};
					}
				});
				return newsObj
			}))
			return await datasss
		}   
		async function genAIdata(webNewsDatas){
			const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
			const schema = {
				description: "List of news",
				type: SchemaType.OBJECT,
				properties: {
					title: {
					type: SchemaType.STRING,
					description: "news title",
					nullable: false,
					},
					brief: {
						type: SchemaType.STRING,
						description: "news brief",
						nullable: false,
					},
					content: {
					type: SchemaType.STRING,
					description: "news content",
					nullable: false,
					},
				},
				required: ["title", "brief", "content"],
			};
			
			const  getAItext  =  async (title, text) => {
				const genAI = new GoogleGenerativeAI("AIzaSyCns-G2JRYvob5dB3nKc0hUtDqqb_Gcsyk");
				const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp", generationConfig: {
					responseMimeType: "application/json",
					responseSchema: schema,
				},
				});
			
				const prompt = `Aşağıda haber başlığı ve metnini veriyorum. Verdiğim bilgilerin anlamını bozmadan ve rakamsal verileri manipüle etmeden SEO uyumlu, insan elinden çıkmış gibi alternatifini oluştur. \n Başlık: ${title}. İçerik: ${text}`;
			
				const result = await model.generateContent(prompt);
				await delay(1500);
				return result.response.text();
			}
		
			const generatedVal = await Promise.all(webNewsDatas.map(data => getAItext(data.title, data.paragrs)))
			return generatedVal;
		}
		const webNewsDatas = await webDataFnc(); 
		const aiGenData = await genAIdata(webNewsDatas)
		async function InsertDataDB(content, aicontent){
			if(content.length > 0 && aicontent.length > 0){
				try {
					const lastUnqId = content[0].uniqueid
					const newsInsertQ = `INSERT INTO news (uniqueid, content, aicontent) VALUES (${lastUnqId}, ${escape(JSON.stringify(webNewsDatas))}, ${escape(JSON.stringify(aiGenData))})`;
					await Pool.query(newsInsertQ);
				} catch (err) {
					console.error("MySQL Error:", err);
					throw err;
				} 
			}
		}
		await InsertDataDB(webNewsDatas, aiGenData)
		*/
	}
	try{
		await doCronJobs();
		msg= "cronDone";
		return NextResponse.json({ msg: msg }, {status: 200 });	
	}catch (error){
		console.log(error)
		msg = "error";
		return NextResponse.json({ msg: error }, {status: 500 });
	}
}
