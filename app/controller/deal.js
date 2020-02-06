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
      symbol: req.body.subTitle,
      type: req.body.publisher,
      amount: req.body.description,
      price: req.body.datePublished,
      payment: req.body.authors
    }, { transaction: t }).then(deal => { return deal })
  }).then((result) => { res.status(201).json({ dealId: result[0].dealId }) })
    .catch((err) => { console.log(err); res.status(500).send(err) })
};

exports.getById = (req, res, next) => { res.status(200) };

exports.put = (req, res, next) => { res.status(200) };