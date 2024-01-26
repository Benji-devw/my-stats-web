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
    console.error(error);
    return res.status(400).json({ message: "Unable to connect to the database:", error });
  }
}

// Add post method to create a new player
export async function POST(req, res) {
  try {
    // Récupérer le corps de la requête POST
    const requestBody = await req.json();

    // Créer un nouveau player avec les données du corps de la requête
    const newPlayer = await db.Players.create(requestBody);

    // Retourner le nouveau player en tant que réponse JSON avec le statut 201
    return new Response(JSON.stringify({ newPlayer }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Unable to connect to the database:", error });
  }
}
