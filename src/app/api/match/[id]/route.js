"use strict";
const db = require("/db/models/index");
db.sequelize.sync();

export async function GET(req, res) {
  const matchId = res.params.id;

  try {
    // Get Match
    const match = await db.Matches.findOne({
      where: { id: matchId },
      include: {
        model: db.Players,
        attributes: ["id", "name", "media"],
        through: { attributes: [] }, // Exclude association table data
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

// Add post method to create a new match
export async function POST(req, res) {
  console.log("----------------REQ-------------------", req);
  const { body } = req;
  const { match } = body;

  // try {
  //   // Create Match
  //   const newMatch = await db.Matches.create(match);

  //   // Return the new match as a JSON response with status 201
  //   return new Response(JSON.stringify({ newMatch }), {
  //     headers: { "Content-Type": "application/json" },
  //     status: 201,
  //   });
  // } catch (error) {
  //   return res
  //     .status(400)
  //     .json({ message: "Unable to connect to the database:", error });
  // }
}
