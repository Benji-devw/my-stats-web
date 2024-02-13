"use strict";
import db from "/db/models/index.js";
db.sequelize.sync();

// Add get method to get all matches
export async function GET(req, res) {
  const matchId = res.params.slug;
  try {
    // Get Match
    const match = await db.Matches.findOne({
      where: {id: matchId},
      include: {
        model: db.Players,
        attributes: ["id", "name", "media", "player_average", "golden"],
        through: {
          model: db.PlayersMatches,
          attributes: ["goals", "shoots", "assists", "average"],
        },
        // through: { attributes: [] }, // Exclude association table data
      },
    });

    if (!match) {
      return res.status(404).json({message: "match not found"});
    }

    // Return the matches and Matches as a JSON response with status 200
    return new Response(JSON.stringify({match}), {
      headers: {"Content-Type": "application/json"},
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({message: "Unable to connect to the database:", error});
  }
}

// Add put method to update a match
export async function PUT(req, res) {
  try {
    // Get the match ID from the request parameters
    const matchId = res.params.slug;

    // Get the match from the database
    const match = await db.Matches.findOne({where: {id: matchId}});

    // If the match doesn't exist, return a 404 error
    if (!match) {
      return res.status(404).json({message: "match not found"});
    }

    // Get the updated data from the request body
    const updatedData = await req.json();

    // Update the match with the new data
    const updatedMatch = await match.update(updatedData);

    // Return the updated match as a JSON response with status 200
    return new Response(JSON.stringify({updatedMatch}), {
      headers: {"Content-Type": "application/json"},
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({message: "Unable to connect to the database:", error});
  }
}
