'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    contactEmail: DataTypes.STRING
  }, {});
  Customer.associate = function (models) {
    Customer.hasMany(models.Invoice, { foreignKey: 'customerId'});
  };
  return Customer;
};