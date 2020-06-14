/* eslint-disable guard-for-in */
const DealDB = require('../../db/models').Deal;

const balanceFrom = (dealsArray) => {
  let balance = 0;
  dealsArray.forEach((element) => {
    if (element.type === 'C') {
      balance += element.payment;
    } else {
      balance -= element.payment;
    }
  });
  return balance;
};

const groupBy = (xs, key) => xs.reduce((rv, x) => {
  // eslint-disable-next-line no-param-reassign
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});

async function getAll(req, res) {
  try {
    const deals = await DealDB.findAll();
    const dealsBySymbol = await groupBy(deals, 'symbol');
    const accountBalance = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const symbol in dealsBySymbol) {
      accountBalance[symbol] = balanceFrom(dealsBySymbol[symbol]);
    }
    return res.status(200).json(accountBalance);
  } catch (error) {
    res.status(500).json(error);
  }
  return res;
}
module.exports.getAll = getAll;
