"use strict";
import db from "/db/models/index.js";
db.sequelize.sync();

export async function GET(req, res) {
  const playerId = res.params.id;

  try {
    const player = await db.Players.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    return new Response(JSON.stringify({ player }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Unable to connect to the database:", error });
  }
}

// Add post method to create a new player
export async function POST(req, res) {
  try {
    const requestBody = await req.json();

    const newPlayer = await db.Players.create(requestBody);

    return new Response(JSON.stringify({ newPlayer }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Unable to connect to the database:", error });
  }
}

// Add put method to update a player

export async function PUT(req, res) {
  try {
    // Get the player ID from the request parameters
    const playerId = res.params.id;

    // Get the player from the database
    const player = await db.Players.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    // Get the updated data from the request body
    const requestBody = await req.json();

    // Update the player with the new data
    const updatedPlayer = await player.update(requestBody);

    // Return the updated player as a JSON response with status 200
    return new Response(JSON.stringify({ updatedPlayer }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Unable to connect to the database:", error });
  }
}