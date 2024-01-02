// controllers/productsController.js
const db = require('../models/dbconnect');

exports.getAllOrder = (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy danh sách sản phẩm
  db.query('SELECT `order`.*, users.Fullname FROM `users` JOIN `order` ON `users`.Id = `order`.CustomerId', (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      const message = 'Internal Server Error';
      res.send(`<script>alert("${message}"); window.location.href = "/admin";</script>`);
    }
    // Sử dụng tệp EJS để hiển thị danh sách sản phẩm
    res.render('../admin/views/orders/orders.ejs', { order: results });
  });
};
exports.getOrder = (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy sản phẩm
  const orderId = req.params.orderId;
  db.query('SELECT orderdetail.*, order.Address, order.Status, products.Name AS ProductName FROM `order` JOIN orderdetail ON `order`.Id = orderdetail.OrderId JOIN products ON orderdetail.ProductId = products.Id WHERE orderdetail.OrderId = ?',[orderId], (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      const message = 'Internal Server Error';
      res.send(`<script>alert("${message}"); window.location.href = "/admin/orders";</script>`);
    }
    // Sử dụng tệp EJS để hiển thị danh sách sản phẩm
    res.render('../admin/views/orders/orderdetails.ejs', { order: results });
  });
};

exports.setStatus = (req, res) => {
  const { status,address } = req.body;
  const orderId = req.params.orderId;
  db.query('UPDATE maymayshop.order SET Address = ?, Status = ? WHERE Id = ?',
    [address, status, orderId],
    (err, results) => {
      if (err) {
        console.error('Lỗi update đơn hàng:', err);
        res.status(500).json({ message: 'Lỗi update đơn hàng' });
      } else {
        const message = 'Dữ liệu đã được update thành công';
        res.send(`<script>alert("${message}"); window.location.href = "/admin/orders";</script>`);
      }
    }
  );
};
exports.searchOrder = (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy sản phẩm
  const searchTerm = req.body.searchTerm;
  const searchValue = '%' + searchTerm + '%';
  db.query('SELECT `order`.*, users.Fullname FROM `users` JOIN `order` ON `users`.Id = `order`.CustomerId where `order`.Id LIKE ? OR CustomerId LIKE ? OR Fullname LIKE ?',
  [searchValue,searchValue,searchValue,searchValue], 
  (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('../admin/views/orders/orders.ejs', { order: results });
  });
};