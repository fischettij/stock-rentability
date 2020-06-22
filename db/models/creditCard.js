module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define('CreditCard', {
    bank: DataTypes.STRING,
    company: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  // eslint-disable-next-line no-unused-vars
  CreditCard.associate = (models) => {
  };
  return CreditCard;
};
