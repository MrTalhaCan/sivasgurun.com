import axios from "axios";
import { Pool } from "./app/ApiFetchs/pool.js"; // kendi Pool.js dosyanı buraya yaz
import * as xml2js from 'xml2js';

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
		let insrtCount = 0;
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
			  insrtCount++;
		  } 
		}
		console.log(`${insrtCount} Earthquakes successfully inserted!`);
		
	} catch (error) {
		console.error("Earthquake Insert Error", error);
	}
}

await InsertErthQuakeData()