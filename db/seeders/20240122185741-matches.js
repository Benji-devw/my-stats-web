"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Matches", [
      {
        media_video: "/assets/videos/1.mp4",
        team1_name: "Team A",
        team2_name: "Team B",
        team1_score: 15,
        team2_score: 12,
        match_average: 3.5,
        encounter_date: "01-01-2024 13:30",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        media_video: "/assets/videos/2.mp4",
        team1_name: "Team A",
        team2_name: "Team B",
        team1_score: 8,
        team2_score: 12,
        match_average: 3.5,
        encounter_date: "05-01-2024 12:30",
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
    await queryInterface.bulkDelete("Matches", null, {});
  },
};
