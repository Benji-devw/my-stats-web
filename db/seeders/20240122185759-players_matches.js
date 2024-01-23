"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("PlayersMatches", [
     {
        goals: 6,
        assists: 8,
        shoots: 10,
        average: 4.5,
        player_id: 1,
        match_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goals: 9,
        assists: 3,
        shoots: 12,
        average: 8.0,
        player_id: 2,
        match_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goals: 7,
        assists: 12,
        shoots: 15,
        average: 6.5,
        player_id: 3,
        match_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        goals: 0,
        assists: 12,
        shoots: 22,
        average: 3.5,
        player_id: 4,
        match_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
    await queryInterface.bulkDelete("PlayersMatches", null, {});
  },
};
