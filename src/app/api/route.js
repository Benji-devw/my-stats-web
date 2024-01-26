"use strict";
const db = require("/db/models/index");
db.sequelize.sync();

// Add get method to get all matches & players
export async function GET(req, res) {
  // Get all
  const matches = await db.Matches.findAll();

  const players = await db.Players.findAll({
    order: [["player_average", "DESC"]],
  });

  const playerMatches = await db.Players_Matches.findAll();


  // Return the matches and players as a JSON response with status 200
  return new Response(JSON.stringify({ matches, players, playerMatches }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
