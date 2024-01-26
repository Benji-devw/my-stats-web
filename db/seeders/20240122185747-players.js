"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Players", [
      {
        name: "Steph",
        media: "/medias/steph.jpg",
        team: "equipe_a",
        comment_team: '["comment 1","comment 2"]',
        comment_player: '["mon comment 1","mon comment 2"]',
        player_average: 3.5,
        golden: true,
        golden_old: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tom",
        media: "/medias/tom.jpg",
        team: "equipe_a",
        comment_team: '["comment 1","comment 2"]',
        comment_player: '["mon comment 1","mon comment 2"]',
        player_average: 3.5,
        golden: false,
        golden_old: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pedro",
        media: "/medias/pedro.jpg",
        team: "equipe_a",
        comment_team: '["comment 1","comment 2"]',
        comment_player: '["mon comment 1","mon comment 2"]',
        player_average: 3.5,
        golden: false,
        golden_old: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quentin",
        media: "/medias/quentin.jpg",
        team: "equipe_a",
        comment_team: '["comment 1","comment 2"]',
        comment_player: '["mon comment 1","mon comment 2"]',
        player_average: 3.5,
        golden: false,
        golden_old: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ben",
        media: "/medias/ben.jpg",
        team: "equipe_a",
        comment_team: '["comment 1","comment 2"]',
        comment_player: '["mon comment 1","mon comment 2"]',
        player_average: 3.5,
        golden: false,
        golden_old: 0,
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
    await queryInterface.bulkDelete("Players", null, {});
  },
};
