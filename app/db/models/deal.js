'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define('Deal', {
    date: DataTypes.DATE,
    simbol: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    payment: DataTypes.DECIMAL
  }, {});
  Deal.associate = function(models) {
    // associations can be defined here
  };
  return Deal;
};