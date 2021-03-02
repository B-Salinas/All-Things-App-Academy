'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    contactEmail: DataTypes.STRING
  }, {});
  Customer.associate = function (models) { // I think my associates are wrong, thats why nothing is passing
    Customer.hasMany('Invoice', {
      foreignKey: 'customerId'
    });
    
    Invoice.belongsTo(Customer);
  return Customer;
  }
};