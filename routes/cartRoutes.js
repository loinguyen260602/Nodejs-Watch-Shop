const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Sử dụng phương thức POST để thêm sản phẩm vào giỏ hàng
router.post('/products/:productId', cartController.addToCart);

// Sử dụng phương thức GET để xem giỏ hàng
router.get('/', cartController.getCart);
router.post('/remove/:productId', cartController.removeFromCart);
module.exports = router;
