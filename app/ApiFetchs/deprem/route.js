import { NextResponse } from "next/server.js";
import { Pool } from "../pool.js";
export async function GET(req, res) {
	const searchParams = req.nextUrl.searchParams
	const ilce = searchParams.get('ilce')
	try {
		var sql = `select * from earthquakes ORDER BY quakeid DESC LIMIT 10`;
		const [rows] = await Pool.query(sql);
		return NextResponse.json({result: rows}, {status: 200 });	
	} catch (err) {
		console.error("MySQL Error:", err);
		return NextResponse.json({result: err}, {status: 500 });
	}
}