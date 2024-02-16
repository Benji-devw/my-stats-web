import db from "/db/models/index.js";
db.sequelize.sync();
export const dynamic = 'force-dynamic';

export async function GET() {
  const matches = await db.Matches.findAll({ order: [["encounter_date", "DESC"]] });
  const players = await db.Players.findAll({ order: [["player_average", "DESC"]] });
  const playerMatches = await db.PlayersMatches.findAll();

  return new Response(JSON.stringify({ matches, players, playerMatches }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
    cache: "no-store",
  });
}

