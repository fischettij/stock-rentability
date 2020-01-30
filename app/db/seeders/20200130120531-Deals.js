'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Deals', [{
        date: Date.now(),
        simbol: 'YPFD',
        type: 'C',
        amount: 15,
        price: 608,
        payment: 9120,
      },
      {
        date: Date.now(),
        simbol: 'YPFD',
        type: 'V',
        amount: 15,
        price: 700,
        payment: 1050,
      },
      {
        date: Date.now(),
        simbol: 'BBAR',
        type: 'C',
        amount: 100,
        price: 15,
        payment: 150,
      },{
        date: Date.now(),
        simbol: 'BBAR',
        type: 'V',
        amount: 100,
        price: 16,
        payment: 160,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Deals', null, {});
  }
};
