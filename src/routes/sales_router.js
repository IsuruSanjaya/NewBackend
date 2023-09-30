const express = require('express');
const router = express.Router();

const {getSales,getSalesById,createSales,deleteSales} = require('../controllers/sales_controller');

router.get('/', getSales);
router.get('/:id', getSalesById);
router.post('/create', createSales);
router.delete('/:id', deleteSales);

module.exports = router;