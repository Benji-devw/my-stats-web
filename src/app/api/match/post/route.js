"use strict";
import db from "/db/models/index.js";
// const db = require("./db/models/index.js");
db.sequelize.sync();

// Add post method to create a new match
export async function POST(req, res) {
  try {
    // Récupérer le corps de la requête POST
    const requestBody = await req.json();

    // Créer un nouveau match avec les données du corps de la requête
    const newMatch = await db.Matches.create(requestBody);

    // Retourner le nouveau match en tant que réponse JSON avec le statut 201
    return new Response(JSON.stringify({ newMatch }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "Unable to connect to the database:", error });
  }
}
