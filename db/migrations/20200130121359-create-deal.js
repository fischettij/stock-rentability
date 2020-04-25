'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull : false,
      },
      symbol: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull : false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull : false,
      },
      payment: {
        type: Sequelize.DECIMAL,
        allowNull : false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Deals');
  }
};