module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('CreditCards', [{
    bank: 'HSBC',
    company: 'Visa',
  },
  {
    bank: 'HSBC',
    company: 'Mastercard',
  }, {
    bank: 'Santander',
    company: 'Visa',
  }, {
    bank: 'HSBC',
    company: 'Amex',
  }], {}),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('CreditCards', null, {}),
};
