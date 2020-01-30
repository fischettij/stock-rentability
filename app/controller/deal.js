const sequelize = require('../db/models').sequelize;
const DealDB = require('../db/models').Deal

exports.getAll = (req,res,next) =>{
  DealDB.findAll().then(books => res.status(200).json(deals)).catch(err => res.status(500).json(err)) 
};

exports.post = async (req,res,next) =>{ res.status(200) };

exports.getById = (req,res,next) =>{ res.status(200) };

exports.put = (req,res,next) =>{ res.status(200) };