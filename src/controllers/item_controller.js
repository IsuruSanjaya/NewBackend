const Items = require('../models/Item_model')
const mongoose = require('mongoose')

// get all Financial
const getItems = async (req, res) => {
  const items = await Items.find();
  res.status(200).json(items)
}

// get a single Financial
const getItemsById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Items'})
  }

  const items = await Items.findById(id)

  if (!items) {
    return res.status(404).json({error: 'No such Items'})
  }

  res.status(200).json(items)
}

// create a new Financial
const createItems = async (req, res) => {

  const {item,description,price,qty,date} = req.body


  // add to the database
  try {
    const items = await Items.create({ item,description,price,qty,date })
    res.status(200).json(items)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Financial
const deleteItems = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such items'})
  }

  const items = await Items.findOneAndDelete({_id: id})

  if(!items) {
    return res.status(400).json({error: 'No such Items'})
  }

  res.status(200).json(items)
}

// update a Financial
const updateItems = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Items'})
  }

  const items = await Items.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!items) {
    return res.status(400).json({error: 'No such Items'})
  }

  res.status(200).json(items)
}

module.exports = {
  getItems,
  getItemsById,
  createItems,
  deleteItems,
  updateItems
}