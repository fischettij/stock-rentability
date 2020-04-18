'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('CreditCards', [{
        bank: 'HSBC',
        company: 'Visa'
      },
      {
        bank: 'HSBC',
        company: 'Mastercard'
      },{
        bank: 'Santander',
        company: 'Visa'
      },{
        bank: 'HSBC',
        company: 'Amex'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('CreditCards', null, {});
  }
};
