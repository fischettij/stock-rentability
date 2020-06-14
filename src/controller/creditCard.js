const { sequelize } = require('../../db/models');
const CreditCardDB = require('../../db/models').CreditCard;

exports.getAll = (req, res) => {
  CreditCardDB.findAll()
    .then(deals => res.status(200).json(deals))
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.post = async (req, res) => {
  sequelize.transaction(t => CreditCardDB.create({
    bank: req.body.bank,
    company: req.body.company,
  }, { transaction: t }).then(card => card)).then((result) => { res.status(201).json({ id: result.id }); })
    .catch((err) => { res.status(500).send(err); });
};

exports.getById = (req, res) => { res.status(500).json({ error: 'Not implemented' }); };

exports.put = (req, res) => { res.status(500).json({ error: 'Not implemented' }); };

const asyncDelete = async (req, res) => {
  const card = await CreditCardDB.findOne({ where: { id: req.params.id } });
  if (card === null) {
    res.status(404).json({
      status: 404,
      error: 'Credit Card not found',
      objectThatFailed: { id: req.params.id },
    });
  } else {
    const deleteResult = await card.destroy();
    if (deleteResult) {
      res.status(200).json({
        status: 200,
        error: 'Credit Card deleted successfully',
      });
    } else {
      res.status(500).json({
        status: 500,
        error: 'Cannot delete credit card',
        objectThatFailed: { id: req.params.id },
      });
    }
  }
};

module.exports.asyncDelete = asyncDelete;
