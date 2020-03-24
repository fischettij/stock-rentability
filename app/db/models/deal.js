'use strict';

const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define('Deal', {
    date: {
      type: DataTypes.DATE,
      get() { return moment.utc(this.getDataValue('date')).format('YYYY-MM-DD')},
    },
    symbol: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    payment: DataTypes.DECIMAL
  },{
    timestamps: false
  });
  Deal.associate = function(models) {
  };
  return Deal;
};