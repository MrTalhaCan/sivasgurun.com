import { NextResponse } from "next/server.js";
import { Pool } from "../pool.js";
export async function GET(req, res) {
	try {
		var sql = `SELECT * FROM schools ORDER BY idschools DESC LIMIT 5`;
		const [rows] = await Pool.query(sql);
		return NextResponse.json({result: rows}, {status: 200 });	
	} catch (err) {
		console.error("MySQL Error:", err);
		return NextResponse.json({result: err}, {status: 500 });
	}
}