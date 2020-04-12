const sequelize = require('../db/models').sequelize;
const DealDB = require('../db/models').Deal

exports.getAll = (req, res, next) => {
  DealDB.findAll()
    .then(deals => res.status(200).json(deals))
    .catch(err => {
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
  updatedDeal = {
    symbol: req.body.symbol,
    type: req.body.type,
    amount: req.body.amount,
    price: req.body.price,
    payment: req.body.payment,
  };
  sequelize.transaction(t => {
    DealDB.update(updatedDeal,
      { where: { id: req.params.id } }
    )
      .then(resultArray => {
        if (resultArray[0] === 1) {
          res.status(204).json(
            {
              status: "success",
              deal: updatedDeal
            }
          )
        } else {
          res.status(400).json({
            status: 400,
            error: "Can't update Deal",
            objectThatFailed: updatedDeal
          })
        }
      })
      .catch(next)
  })
};