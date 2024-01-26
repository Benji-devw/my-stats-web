'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Players.init({
    player_id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    media: DataTypes.TEXT,
    team: DataTypes.TEXT,
    comment_team: DataTypes.TEXT,
    comment_player: DataTypes.TEXT,
    player_average: DataTypes.REAL,
    golden: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Players',
  });
  return Players;
};