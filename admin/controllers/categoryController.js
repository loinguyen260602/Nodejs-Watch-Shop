const db = require('../models/dbconnect');

exports.getAllCategory = (req, res) => {
  db.query('SELECT * FROM category', (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      const message = 'Internal Server Error';
      res.send(`<script>alert("${message}"); window.location.href = "/admin";</script>`);
    }
    res.render('../admin/views/category/category.ejs', { category: results });
  });
};

exports.getCategory = (req, res) => {
  const categoryId = req.params.categoryId;
  db.query('SELECT * FROM category WHERE Id = ?', [categoryId], (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      const message = 'Internal Server Error';
      res.send(`<script>alert("${message}"); window.location.href = "/admin/category";</script>`);
    }
    res.render('../admin/views/category/Ucategory.ejs', { category: results });
  });
};

exports.AddCategory = (req, res) => {
  const { name } = req.body;
  db.query('SELECT * FROM category WHERE Name = ?', [name], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    if (results.length > 0) {
      const message = 'Đã có loại sản phẩm này rồi';
      res.send(`<script>alert("${message}"); window.location.href = "/admin/category";</script>`);
    } else {
      db.getConnection((err, connection) => {
        if (err) {
          console.error('Lỗi kết nối đến cơ sở dữ liệu:', err);
          res.status(500).json({ message: 'Lỗi kết nối đến cơ sở dữ liệu' });
        } else {
          const sql = 'INSERT INTO category (Name) VALUES (?)';
          connection.query(sql, [name], (queryErr, result) => {
            connection.release();

            if (queryErr) {
              console.error('Lỗi thêm dữ liệu:', queryErr);
              res.status(500).json({ message: 'Lỗi thêm dữ liệu' });
            } else {
              const message = 'Dữ liệu đã được thêm thành công';
              res.send(`<script>alert("${message}"); window.location.href = "/admin/category";</script>`);
            }
          });
        }
      });
    }
  });
};

exports.UCategory = (req, res) => {
  const name = req.body.name;
  const categoryId = req.params.categoryId;
  db.query('SELECT * FROM category WHERE Id = ?', [categoryId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    if (results.length > 0) {
      db.getConnection((err, connection) => {
        if (err) {
          console.error('Lỗi kết nối đến cơ sở dữ liệu:', err);
          res.status(500).json({ message: 'Lỗi kết nối đến cơ sở dữ liệu' });
        } else {
          const sql = 'UPDATE category SET Name = ? WHERE Id = ?';
          connection.query(sql, [name,categoryId], (queryErr, result) => {
            connection.release();

            if (queryErr) {
              console.error('Lỗi sửa dữ liệu:', queryErr);
              res.status(500).json({ message: 'Lỗi sửa dữ liệu' });
            } else {
              const message = 'Dữ liệu đã được cập nhật thành công';
              res.send(`<script>alert("${message}"); window.location.href = "/admin/category";</script>`);
            }
          });
        }
      });
    } else {
      const message = 'không tìm thấy loại sản phẩm này';
      res.send(`<script>alert("${message}"); window.location.href = "/admin/category";</script>`);
    }
  });
};

exports.delcategory = (req, res) => {
  const  categoryId  = req.params.categoryId;
  db.query('SELECT * FROM category WHERE Id = ?', [categoryId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    if (results.length > 0) {
      db.getConnection((err, connection) => {
        if (err) {
          console.error('Lỗi kết nối đến cơ sở dữ liệu:', err);
          res.status(500).json({ message: 'Lỗi kết nối đến cơ sở dữ liệu' });
        } else {
          let sql = 'DELETE FROM products WHERE CategoryId = ?';
          connection.query(sql, [categoryId], (queryErr, result) => {
            connection.release();
          });
          sql = 'DELETE FROM category WHERE Id = ?';
          connection.query(sql, [categoryId], (queryErr, result) => {
            // Trả lại kết nối vào pool sau khi hoàn thành
            connection.release();

            if (queryErr) {
              console.error('Lỗi xóa dữ liệu:', queryErr);
              res.status(500).json({ message: 'Lỗi xóa dữ liệu' });
            } else {
              const message = 'Dữ liệu đã được xoá thành công';
              res.send(`<script>alert("${message}"); window.location.href = "/admin/category";</script>`);
            }
          });
        }
      });
    } else {
      const message = 'loại sản phẩm này chưa có';
      res.send(`<script>alert("${message}"); window.location.href = "/admin/category";</script>`);
    }
  });
}
exports.searchC = (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy sản phẩm
  const searchTerm = req.body.searchTerm;
  const searchValue = '%' + searchTerm + '%';
  db.query('SELECT * FROM category where Id LIKE ? OR Name LIKE ?',
  [searchValue,searchValue,searchValue], 
  (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('../admin/views/category/category.ejs', { category: results });
  });
};