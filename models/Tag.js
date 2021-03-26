const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Tag belongs to many Product models. 
//Allow products to have multiple tags and tags to have many products by using the ProductTag through model.

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
