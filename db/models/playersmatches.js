"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlayersMatches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlayersMatches.init(
    {
      player_match_id: DataTypes.INTEGER,
      goals: DataTypes.INTEGER,
      assists: DataTypes.INTEGER,
      shoots: DataTypes.INTEGER,
      average: DataTypes.REAL,
      player_id: DataTypes.INTEGER,
      match_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PlayersMatches",
    }
  );
  return PlayersMatches;
};
