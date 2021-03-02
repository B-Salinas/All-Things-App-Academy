'use strict';

const expense = require("./expense");

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    invoiceNumber: DataTypes.STRING,
    issuedOn: DataTypes.DATE,
    paidOn: DataTypes.DATE,
    customerId: DataTypes.INTEGER
  }, {});
  Invoice.associate = function (models) { // this is wrong
    Invoice.belongsTo(Customer);

    Invoice.hasMany('Fees', {
      foreignKey: 'invoiceId'
    });
    Invoice.hasMany('Expense', {
      foreignKey: 'invoiceId'
    });

    Fees.belongsTo(Invoice);
    Expense.belongs(Invoice);
  };
  return Invoice;
};