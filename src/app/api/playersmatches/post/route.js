"use strict";
import db from "/db/models/index.js";
db.sequelize.sync();

// Add post method to create a new playermatch
export async function POST(req, res) {
  try {
    const requestBody = await req.json();

    const newPlayerMatch = await db.PlayersMatches.create(requestBody);

    return new Response(JSON.stringify({ newPlayerMatch }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Unable to connect to the database:", error });
  }
}