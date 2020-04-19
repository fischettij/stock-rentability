const sequelize = require('../db/models').sequelize;
const DealDB = require('../db/models').Deal

async function getAll(req, res, next) {
  try {
    let deals = await DealDB.findAll()
    let dealsBySymbol = await groupBy(deals, 'symbol')
    let accountBalance = {}
    // Dictionary symbol => [deals]
    for (let symbol in dealsBySymbol) {
      accountBalance[symbol] = balanceFrom(dealsBySymbol[symbol])
    }
    return res.status(200).json(accountBalance)
  } catch {
    e => { res.status(500).json(3) }
  }
};
module.exports.getAll = getAll

var groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var balanceFrom = (dealsArray) => {
  let balance = 0
  dealsArray.forEach(element => {
    if (element.type === 'C') {
      balance = (balance + element.payment)
    } else {
      balance = (balance - element.payment)
    }
  })
  return balance
}
