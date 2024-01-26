'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matches.belongsToMany(models.Players, {
        through: "PlayersMatches",
        foreignKey: "match_id",
      });
    }
  }
  Matches.init({
    // match_id: DataTypes.INTEGER,
    media_video: DataTypes.STRING,
    team1_name: DataTypes.STRING,
    team2_name: DataTypes.STRING,
    team1_score: DataTypes.INTEGER,
    team2_score: DataTypes.INTEGER,
    match_average: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Matches',
  });
  return Matches;
};