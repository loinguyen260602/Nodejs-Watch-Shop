// routes/productsRoute.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login'); 
  }
router.get('/',isAuthenticated, categoryController.getAllCategory);
router.get('/add',isAuthenticated, (req, res) => {
    res.render('../admin/views/category/addcategory.ejs');
});
router.post('/search',isAuthenticated, categoryController.searchC);
router.get('/update/:categoryId',isAuthenticated, categoryController.getCategory);

router.post('/add', categoryController.AddCategory);
router.post('/update/:categoryId', categoryController.UCategory);
router.post('/del/:categoryId', categoryController.delcategory);
module.exports = router;
