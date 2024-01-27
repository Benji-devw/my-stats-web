"use strict";
import db from "../../../../db/models/index.js";
db.sequelize.sync();

// Add post method to create a new playermatch
export async function POST(req, res) {
  // console.log(db);
  try {
    // Récupérer le corps de la requête POST
    const requestBody = await req.json();

    // Créer un nouveau playermatch avec les données du corps de la requête
    const newPlayerMatch = await db.PlayersMatches.create(requestBody);

    // Retourner le nouveau playermatch en tant que réponse JSON avec le statut 201
    return new Response(JSON.stringify({ newPlayerMatch }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Unable to connect to the database:", error });
  }
}

