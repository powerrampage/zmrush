import { pool } from "@/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = Number(searchParams.get("size")) || 10;
  const page = Number(searchParams.get("page")) || 0;
  const nickname = searchParams.get("nickname");

  let connection;

  try {
    connection = await pool.getConnection();

    let query = `SELECT * FROM rank_system_new WHERE Player != 'BOT'`;
    const queryParams: any[] = [];

    if (nickname) {
      query += ` AND NickName = ?`;
      queryParams.push(nickname);
    }

    query += ` ORDER BY level DESC LIMIT ? OFFSET ?`;
    queryParams.push(limit, page * limit);

    const [results] = await connection.query(query, queryParams);

    const countQuery = nickname
      ? `SELECT COUNT(*) as total FROM rank_system_new WHERE Player != 'BOT' AND NickName = ?`
      : `SELECT COUNT(*) as total FROM rank_system_new WHERE Player != 'BOT'`;

    const [countResults] = await connection.query(
      countQuery,
      nickname ? [nickname] : []
    );

    const total = (countResults as any[])[0]?.total || 0;
    console.log({ result: results, total });
    return NextResponse.json({ result: results, total });
  } catch (error) {
    console.error("Leaderboard fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard data", reason: error },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
