module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Deals', [{
    date: Date.now(),
    symbol: 'YPFD',
    type: 'C',
    amount: 15,
    price: 608,
    payment: 9120,
  },
  {
    date: Date.now(),
    symbol: 'YPFD',
    type: 'V',
    amount: 15,
    price: 700,
    payment: 1050,
  },
  {
    date: Date.now(),
    symbol: 'BBAR',
    type: 'C',
    amount: 100,
    price: 15,
    payment: 150,
  }, {
    date: Date.now(),
    symbol: 'BBAR',
    type: 'V',
    amount: 100,
    price: 16,
    payment: 160,
  }], {}),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Deals', null, {}),
};
