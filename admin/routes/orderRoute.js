// routes/productsRoute.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login'); 
  }
router.post('/search',isAuthenticated, orderController.searchOrder);
router.get('/',isAuthenticated, orderController.getAllOrder);
router.get('/:orderId',isAuthenticated, orderController.getOrder);
router.post('/:orderId', orderController.setStatus);
module.exports = router;
