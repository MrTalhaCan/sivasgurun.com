import { NextResponse } from "next/server.js";
import { Pool } from "../pool.js";
export async function GET(req, res) {
	const searchParams = req.nextUrl.searchParams
	const wthrid = Number(searchParams.get('wthrid'))
	try {
		var sql = `select forecast from havadurumu WHERE idyazilar=${wthrid} AND forecast IS NOT NULL ORDER BY idhavadurumu DESC LIMIT 1`;
		const [rows] = await Pool.query(sql);
		const getFirstRow = rows[0]; // return first row
		return NextResponse.json({result: getFirstRow}, {status: 200 });	
	} catch (err) {
		console.error("MySQL Error:", err);
		return NextResponse.json({result: err}, {status: 500 });
	}
}