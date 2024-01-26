"use strict";
const db = require("/db/models/index");
db.sequelize.sync();

export async function GET(req, res) {
  // console.log("----------------RES-------------------", res.params);
  const playerId = res.params.id;

  try {
    // Get Player
    const player = await db.Players.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    // Return the matches and players as a JSON response with status 200
    return new Response(JSON.stringify({ player }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Unable to connect to the database:", error });
  }
}
