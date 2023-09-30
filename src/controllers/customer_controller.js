const Customer = require('../models/customer_model')
const mongoose = require('mongoose')
const LastOrderNumber=require('../models/LastOrderNumber')

// get all Financial
const getCustomer = async (req, res) => {
  const customer = await Customer.find();
  res.status(200).json(customer)
}

// get a single Financial
const getCustomerById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such customer'})
  }

  const customer = await Customer.findById(id)

  if (!customer) {
    return res.status(404).json({error: 'No such customer'})
  }

  res.status(200).json(customer)
}

// create a new Financial
const createCustomer = async (req, res) => {
    const { name, address, details, phone } = req.body;

    try {
        // Fetch the last used order number
        let lastOrderNumber = await LastOrderNumber.findOne();

        if (!lastOrderNumber) {
            // If there's no entry in the LastOrderNumber collection, create one with 1 as the initial order number
            lastOrderNumber = await LastOrderNumber.create({ lastOrderNumber: 1 });
        }

        // Use the fetched order number and increment it for the new order
        const order = await Customer.create({ orderNumber: lastOrderNumber.lastOrderNumber, name, address, details, phone });

        // Increment the last used order number for the next order
        lastOrderNumber.lastOrderNumber += 1;
        await lastOrderNumber.save();

        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};







// delete a Financial
const deleteCustomer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such customer'})
  }

  const customer = await Customer.findOneAndDelete({_id: id})

  if(!customer) {
    return res.status(400).json({error: 'No such customer'})
  }

  res.status(200).json(customer)
}

// update a Financial
const updateCustomer = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such customer'})
  }

  const customer = await Customer.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!customer) {
    return res.status(400).json({error: 'No such customer'})
  }

  res.status(200).json(customer)
}

module.exports = {
  getCustomer,
  getCustomerById,
  createCustomer,
  deleteCustomer,
  updateCustomer
}