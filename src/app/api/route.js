
'use strict';
const db = require('/db/models/index');
db.sequelize.sync();

export async function GET(req, res) {
  // console.log('----------------models-------------------', db);
  // Get all
  const matches = await db.Matches.findAll();
  const players = await db.Players.findAll();
  // console.log('----------------matches-------------------', matches);
  
  // Return the matches and players as a JSON response with status 200
  return new Response(JSON.stringify({ matches, players }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}


// import db from '../../../db/models/index.js';
// export default async function handler(req, res) {
//   try {
//     await db.sequelize.authenticate();
//   } catch (error) {
//     return res.status(400).json({"message":"Unable to connect to the database:", error});
//   }
//   const matches = await Matches.findAll();      
//   res.status(200).json({ matches })
// }