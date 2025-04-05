import { pool } from "@/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request?.nextUrl?.searchParams;
  const limit = Number(searchParams.get("size")) || 10;
  const page = Number(searchParams.get("page")) || 0;
  const nickname = searchParams.get("nickname");

  try {
    let query = `SELECT * FROM rank_system_new WHERE Player != 'BOT'`;
    const queryParams: any[] = [limit, page * limit];

    if (nickname) {
      query += ` AND NickName = ?`;
      queryParams.unshift(nickname);
    }

    query += ` ORDER BY level DESC LIMIT ? OFFSET ?`;

    const results = await pool.query(query, queryParams);

    const totalQuery = nickname
      ? "SELECT COUNT(*) as total FROM rank_system_new WHERE Player != 'BOT' AND NickName = ?"
      : "SELECT COUNT(*) as total FROM rank_system_new WHERE Player != 'BOT'";

    const totalResult = (await pool.query(
      totalQuery,
      nickname ? [nickname] : []
    )) as any[];
    const total = totalResult[0]?.total || 0;

    await pool.end();

    return NextResponse.json({ result: results, total });
  } catch (error) {
    await pool.end();

    return NextResponse.json(
      { error: "Failed to fetch leaderboard data", reason: error },
      { status: 500 }
    );
  }
}
