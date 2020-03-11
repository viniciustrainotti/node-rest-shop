const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth')

const OrdersController = require('../controllers/orders');

router.get('/', OrdersController.orders_get_all);
router.post('/', checkAuth, OrdersController.orders_create_order);
router.get('/:orderId', OrdersController.orders_get_order);
router.delete('/:orderId', checkAuth, OrdersController.orders_delet_order);

module.exports = router;