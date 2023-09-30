const Sales = require('../models/sales_model')
const mongoose = require('mongoose')

// get all Financial
const getSales = async (req, res) => {
  const sales = await Sales.find();
  res.status(200).json(sales)
}

// get a single Financial
const getSalesById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Sales'})
  }

  const sales = await Sales.findById(id)

  if (!sales) {
    return res.status(404).json({error: 'No such Sales'})
  }

  res.status(200).json(sales)
}

// create a new Financial
const createSales = async (req, res) => {

  const {id,name,description,product_s,price,qty} = req.body


  // add to the database
  try {
    const sales = await Sales.create({ id,name,description,product_s,price,qty})
    res.status(200).json(sales)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Financial
const deleteSales = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Sales'})
  }

  const sales = await Sales.findOneAndDelete({_id: id})

  if(!sales) {
    return res.status(400).json({error: 'No such Sales'})
  }

  res.status(200).json(Sales)
}



module.exports = {
  getSales,
  getSalesById,
  createSales,
  deleteSales,
}