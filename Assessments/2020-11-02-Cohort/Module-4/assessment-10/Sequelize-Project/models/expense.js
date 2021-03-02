'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // my associations are wrong, this is why nothing is passing
      Expense.belongsTo(Invoice);
    }
  };
  Expense.init({
    description: DataTypes.STRING,
    numberOfUnits: DataTypes.NUMERIC,
    rate: DataTypes.NUMERIC,
    invoiceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};