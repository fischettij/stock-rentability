'use strict';

module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define('CreditCard', {
    bank: DataTypes.STRING,
    company: DataTypes.STRING,
  }, {
    timestamps: false
  });
  CreditCard.associate = function (models) {
  };
  return CreditCard;
};