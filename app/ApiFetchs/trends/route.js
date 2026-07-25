import { NextResponse } from "next/server.js";
import { Pool } from "../pool.js";
export const dynamic = 'force-dynamic';
export async function GET(req, res) {
	try {
		var sql = `SELECT results FROM trends ORDER BY idtrends DESC LIMIT 1`;
		const [rows] = await Pool.query(sql);
		const getFirstRow = rows[0]; // return first row
		return NextResponse.json({result: getFirstRow.results}, {status: 200 });	
	} catch (err) {
		console.error("MySQL Error:", err);
		return NextResponse.json({result: err}, {status: 500 });
	}
}
