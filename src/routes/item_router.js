const express = require('express');
const router = express.Router();

const {getItems,getItemsById,createItems,updateItems,deleteItems} = require('../controllers/item_controller');

router.get('/', getItems);
router.get('/:id', getItemsById);
router.post('/create', createItems);
router.put('/:id', updateItems);
router.delete('/:id', deleteItems);

module.exports = router;