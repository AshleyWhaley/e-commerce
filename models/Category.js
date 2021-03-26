const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//foreign keys Category has many Product models, 
//as a category can have multiple products but a product can only belong to one category

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type:DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
