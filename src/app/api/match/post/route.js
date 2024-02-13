"use strict";
import db from "/db/models/index.js";

db.sequelize.sync();

export async function POST(req, res) {
  try {
    const requestBody = await req.json();

    const newMatch = await db.Matches.create(requestBody);

    return new Response(JSON.stringify({newMatch}), {
      headers: {"Content-Type": "application/json"},
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({message: "Unable to connect to the database:", error});
  }
}
