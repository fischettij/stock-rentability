const sequelize = require('../db/models').sequelize;
const CreditCardDB = require('../db/models').CreditCard;

exports.getAll = (req, res, next) => {
  CreditCardDB.findAll()
    .then(deals => res.status(200).json(deals))
    .catch(err => {
      res.status(500).json(err)
    })
};

exports.post = async (req, res, next) => { res.status(500).json({error: "Not implemented"}) };

exports.getById = (req, res, next) => { res.status(500).json({error: "Not implemented"}) };

exports.put = (req, res, next) => { res.status(500).json({error: "Not implemented"}) };

async function asyncDelete(req, res, next) { res.status(500).json({error: "Not implemented"}) }

module.exports.asyncDelete = asyncDelete