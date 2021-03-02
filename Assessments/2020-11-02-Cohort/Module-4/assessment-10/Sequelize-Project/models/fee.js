'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  // what is this??? 
  class Fee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // this is wrong and why my associations arent passing
      Fee.belongsTo(Invoices);
    }
  };
  Fee.init({
    description: DataTypes.STRING,
    amount: DataTypes.NUMERIC,
    invoiceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fee',
  });
  return Fee;
};