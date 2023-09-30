const express = require('express');
const router = express.Router();

const {getCustomer,getCustomerById,createCustomer,updateCustomer,deleteCustomer} = require('../controllers/customer_controller');

router.get('/', getCustomer);
router.get('/:id', getCustomerById);
router.post('/create', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;