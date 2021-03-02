'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      numberOfUnits: {
        type: Sequelize.NUMERIC(10,3),
        allowNull: false
      },
      rate: {
        type: Sequelize.NUMERIC(10,3),
        allowNull: false
      },
      invoiceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Invoices"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Expenses');
  }
};