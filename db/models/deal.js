const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define('Deal', {
    date: {
      type: DataTypes.DATE,
      get() { return moment(new Date(this.getDataValue('date'))).format('YYYY-MM-DD'); },
    },
    symbol: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    payment: DataTypes.DECIMAL,
  }, {
    timestamps: false,
  });
  // eslint-disable-next-line no-unused-vars
  Deal.associate = (models) => {
  };
  return Deal;
};
