'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Expenses', [
      { description: 'Normal Usage', numberOfUnits: 70.00, rate: 50.00, invoiceId: 4, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
      { description: 'Over X Usage', numberOfUnits: 15.00, rate: 75.00, invoiceId: 4, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
      { description: 'Normal Usage', numberOfUnits: 81.75, rate: 50.00, invoiceId: 1, createdAt: '2019-04-09', updatedAt: '2019-04-09' },
      { description: 'Normal Usage', numberOfUnits: 83.50, rate: 50.00, invoiceId: 2, createdAt: '2019-04-16', updatedAt: '2019-04-16' },
      { description: 'Normal Usage', numberOfUnits: 33.00, rate: 50.00, invoiceId: 3, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { description: 'Over X Usage', numberOfUnits: 17.25, rate: 75.00, invoiceId: 2, createdAt: '2019-04-16', updatedAt: '2019-04-16' },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Expenses', {
      invoiceId: [1, 2, 3, 4]
    });
  }
};
