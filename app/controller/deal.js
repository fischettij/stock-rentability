const sequelize = require('../db/models').sequelize;
const DealDB = require('../db/models').Deal

exports.getAll = (req, res, next) => {
  DealDB.findAll()
    .then(deals => res.status(200).json(deals))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
};

exports.post = async (req, res, next) => {
  sequelize.transaction(t => {
    return DealDB.create({
      date: req.body.date,
      symbol: req.body.symbol,
      type: req.body.type,
      amount: req.body.amount,
      price: req.body.price,
      payment: req.body.payment,
    }, { transaction: t }).then(deal => { return deal })
  }).then((result) => { res.status(201).json({ id: result.id }) })
    .catch((err) => { console.log(err); res.status(500).send(err) })
};

exports.getById = (req, res, next) => { res.status(200) };

exports.put = (req, res, next) => {
  sequelize.transaction(t => {
    DealDB.update(
      {
        symbol: req.body.symbol,
        type: req.body.type,
        amount: req.body.amount,
        price: req.body.price,
        payment: req.body.payment,
      },
      { where: { id: req.params.id } }
    )
      .then(rowsUpdated => {
        res.status(200).json(rowsUpdated)
      })
      .catch(next)
  })
};