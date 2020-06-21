const { sequelize } = require('../../db/models');
const DealDB = require('../../db/models').Deal;

exports.getAll = (req, res) => {
  DealDB.findAll()
    .then(deals => res.status(200).json(deals))
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.post = async (req, res) => {
  sequelize.transaction(t => DealDB.create({
    date: req.body.date,
    symbol: req.body.symbol,
    type: req.body.type,
    amount: req.body.amount,
    price: req.body.price,
    payment: req.body.payment,
  }, { transaction: t }).then(deal => deal)).then((result) => { res.status(201).json({ id: result.id }); })
    .catch((err) => { res.status(500).send(err); });
};

exports.getById = (re, res) => { res.status(200); };

exports.put = (req, res, next) => {
  const updatedDeal = {
    symbol: req.body.symbol,
    type: req.body.type,
    amount: req.body.amount,
    price: req.body.price,
    payment: req.body.payment,
  };
  sequelize.transaction(() => {
    DealDB.update(updatedDeal,
      { where: { id: req.params.id } })
      .then((resultArray) => {
        if (resultArray[0] === 1) {
          res.status(204).json(
            {
              status: 'success',
              deal: updatedDeal,
            },
          );
        } else {
          res.status(400).json({
            status: 400,
            error: "Can't update Deal",
            objectThatFailed: updatedDeal,
          });
        }
      })
      .catch(next);
  });
};

async function asyncDelete(req, res) {
  const deal = await DealDB.findOne({ where: { id: req.params.id } });
  if (deal === null) {
    res.status(404).json({
      status: 404,
      error: 'Deal not found',
      objectThatFailed: { id: req.params.id },
    });
  } else {
    const deleteResult = await deal.destroy();
    if (deleteResult) {
      res.status(200).json({
        status: 200,
        error: 'Deal deleted successfully',
      });
    } else {
      res.status(500).json({
        status: 500,
        error: 'Cannot delete deal',
        objectThatFailed: { id: req.params.id },
      });
    }
  }
}

module.exports.asyncDelete = asyncDelete;
