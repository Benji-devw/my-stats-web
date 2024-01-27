import db from "../../../db/models/index.js";
db.sequelize.sync();

// Add get method to get all matches & players
export async function GET(req, res) {

  const matches = await db.Matches.findAll({
    order: [["encounter_date", "DESC"]]
  });

  const players = await db.Players.findAll({
    order: [["player_average", "DESC"]],
  });

  const playerMatches = await db.PlayersMatches.findAll();

  return new Response(JSON.stringify({ matches, players, playerMatches }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}


