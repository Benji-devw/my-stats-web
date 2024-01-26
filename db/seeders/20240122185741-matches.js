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
      {
        media_video: "/assets/videos/3.mp4",
        team1_name: "Team A",
        team2_name: "Team B",
        team1_score: 19,
        team2_score: 10,
        match_average: 3.5,
        encounter_date: "09-01-2024 15:30",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        media_video: "/assets/videos/4.mp4",
        team1_name: "Team A",
        team2_name: "Team B",
        team1_score: 33,
        team2_score: 12,
        match_average: 7.5,
        encounter_date: "02-02-2024 14:30",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        media_video: "/assets/videos/5.mp4",
        team1_name: "Team A",
        team2_name: "Team B",
        team1_score: 11,
        team2_score: 12,
        match_average: 5.0,
        encounter_date: "04-02-2024 11:30",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        media_video: "/assets/videos/6.mp4",
        team1_name: "Team A",
        team2_name: "Team B",
        team1_score: 21,
        team2_score: 18,
        match_average: 7.0,
        encounter_date: "22-02-2024 13:30",
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
