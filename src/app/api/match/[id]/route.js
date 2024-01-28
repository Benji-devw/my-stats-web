"use strict";
import db from "../../../../../db/models/index.js";
// const db = require("./db/models/index.js");
db.sequelize.sync();

// Add get method to get all matches
export async function GET(req, res) {
  const matchId = req.params.id; // Change this line

  try {
    // Get Match
    const match = await db.Matches.findOne({
      where: { id: matchId },
      include: {
        model: db.Players,
        attributes: ["id", "name", "media", "player_average", "golden"],
        through: { model: db.PlayersMatches, attributes: ["goals", "shoots", "assists", "average"] },
        // through: { attributes: [] }, // Exclude association table data
      },
    });

    if (!match) {
      return res.status(404).json({ message: "match not found" });
    }

    // Return the matches and Matches as a JSON response with status 200
    return new Response(JSON.stringify({ match }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "Unable to connect to the database:", error });
  }
}