const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log({ BASE_URL });

export const fetchLeaderboardData = async ({
  page,
  size,
  search,
}: {
  page: number;
  size: number;
  search: string;
}) => {
  const res = await fetch(
    `${BASE_URL}/api/leaderboard?page=${page}&size=${size}&nickname=${search}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  return res.json();
};
