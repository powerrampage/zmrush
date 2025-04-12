import { pool } from ".";

export async function getLeaderboardData({
  page = 0,
  size = 10,
  nickname = "",
}: {
  page?: number;
  size?: number;
  nickname?: string;
}) {
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
    queryParams.push(size, page * size);

    const [results] = await connection.query(query, queryParams);

    const countQuery = nickname
      ? `SELECT COUNT(*) as total FROM rank_system_new WHERE Player != 'BOT' AND NickName = ?`
      : `SELECT COUNT(*) as total FROM rank_system_new WHERE Player != 'BOT'`;

    const [countResults] = await connection.query(
      countQuery,
      nickname ? [nickname] : []
    );

    const total = (countResults as any[])[0]?.total || 0;

    return { result: results, total };
  } catch (error) {
    console.error("DB Error:", error);
    throw new Error("Failed to fetch leaderboard data");
  } finally {
    if (connection) connection.release();
  }
}
