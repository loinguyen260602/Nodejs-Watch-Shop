const db = require('../models/dbconnect');
const path = require('path');
// Hàm lấy tổng số sản phẩm
function getTotalProducts() {
  return new Promise((resolve, reject) => {
      db.query('SELECT COUNT(*) AS TotalProducts FROM products', (err, results) => {
          if (err) {
              console.error('Error executing query for total products:', err);
              return reject(err);
          }
          const totalProducts = results[0].TotalProducts;
          resolve(totalProducts);
      });
  });
}

// Hàm lấy tổng số người dùng
function getTotalUsers() {
  return new Promise((resolve, reject) => {
      db.query('SELECT COUNT(*) AS TotalUsers FROM users', (err, results) => {
          if (err) {
              console.error('Error executing query for total users:', err);
              return reject(err);
          }
          const totalUsers = results[0].TotalUsers;
          resolve(totalUsers);
      });
  });
}

// Hàm lấy tổng số đơn hàng
function getTotalOrders() {
  return new Promise((resolve, reject) => {
      db.query('SELECT COUNT(*) AS TotalOrders FROM maymayshop.order', (err, results) => {
          if (err) {
              console.error('Error executing query for total orders:', err);
              return reject(err);
          }
          const totalOrders = results[0].TotalOrders;
          resolve(totalOrders);
      });
  });
}

exports.getChartData = async (req, res) => {
    if (req.isAuthenticated() && req.user.isAdmin === 1) {
        const totalProducts = await getTotalProducts();
        const totalUsers = await getTotalUsers();
        const totalOrders = await getTotalOrders();
        db.query('SELECT products.Name AS ProductName, SUM(orderdetail.Quantity) AS TotalSold FROM orderdetail JOIN products ON orderdetail.ProductId = products.Id GROUP BY orderdetail.ProductId', (err, results) => {
            if (err) {
              console.error('Error executing query:', err);
              return res.status(500).json({ error: 'Internal Server Error' });
            }
            const generateRandomColor = () => {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
              };
            const colors = [];
            const borderColor = [];
        
            results.forEach((row) => {
              const randomColor = generateRandomColor();
              colors.push(randomColor);
              borderColor.push(`${randomColor}FF`);
            });
            const data = {
              labels: results.map(row => row.ProductName), // Tên sản phẩm 
              datasets: [{
                label: 'Sản phẩm bán được',
                data: results.map(row => row.TotalSold),
                backgroundColor: colors, // Màu nền
                borderColor: borderColor, // Màu viền
                borderWidth: 1
              }]
            };
            const indexPath = path.join(__dirname, '../views/adminpage/index.ejs');
            res.render(indexPath, { user: req.user, data , totalProducts, totalUsers, totalOrders });
          });
    } else {
    const message = 'bạn không có quyền admin';
    res.send(`<script>alert("${message}"); window.location.href = "/home";</script>`);
    }
  
};
