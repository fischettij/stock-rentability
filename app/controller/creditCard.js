const sequelize = require('../db/models').sequelize;
const CreditCardDB = require('../db/models').CreditCard;

exports.getAll = (req, res, next) => {
  CreditCardDB.findAll()
    .then(deals => res.status(200).json(deals))
    .catch(err => {
      res.status(500).json(err)
    })
};

exports.post = async (req, res, next) => {
  sequelize.transaction(t => {
    return CreditCardDB.create({
      bank: req.body.bank,
      company: req.body.company
    }, { transaction: t }).then(card => { return card })
  }).then(result => { res.status(201).json({ id: result.id }) })
    .catch((err) => { res.status(500).send(err) })
};

exports.getById = (req, res, next) => { res.status(500).json({ error: "Not implemented" }) };

exports.put = (req, res, next) => { res.status(500).json({ error: "Not implemented" }) };

async function asyncDelete(req, res, next) { res.status(500).json({ error: "Not implemented" }) }

module.exports.asyncDelete = asyncDelete