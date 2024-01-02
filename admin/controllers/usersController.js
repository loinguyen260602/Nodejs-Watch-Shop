const db = require('../models/dbconnect');

exports.addUser = (req, res) => {
  const { fullname, username, password, email, sdt,isAdmin } = req.body;
  // Kiểm tra xem người dùng đã tải lên ảnh chưa
  if (!req.file) {
    console.error('Không có tệp ảnh được tải lên.');
    res.status(400).json({ message: 'Không có tệp ảnh được tải lên.' });
    return;
  }
  const image = req.file.filename; 
  db.query('INSERT INTO users (Fullname, Img, Username, Password, Email, SDT, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [fullname, image, username, password, email, sdt, isAdmin],
    (err, results) => {
      if (err) {
        console.error('Lỗi thêm sản phẩm:', err);
        res.status(500).json({ message: 'Lỗi thêm sản phẩm' });
      } else {
        const message = 'Dữ liệu đã được thêm thành công';
        res.send(`<script>alert("${message}"); window.location.href = "/admin/users";</script>`);
      }
    }
  );
};

exports.getAllUsers = (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy danh sách sản phẩm
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Sử dụng tệp EJS để hiển thị danh sách sản phẩm
    res.render('../admin/views/users/users.ejs', { users: results });
  });
};
exports.getUser = (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy sản phẩm
  const userId = req.params.userId;
  db.query('SELECT * FROM users where Id=?',[userId], (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Sử dụng tệp EJS để hiển thị danh sách sản phẩm
    res.render('../admin/views/users/userdetails.ejs', { u: results });
  });
};
exports.UpdateUser = (req, res) => {
  const { fullname, username, password, email, sdt,isAdmin } = req.body;
  const userId = req.params.userId;
  let image='';
  // Kiểm tra xem người dùng đã tải lên ảnh chưa
  if (!req.file) {
    image=req.body.curImg;
  }else{ image = req.file.filename;}
  db.query('UPDATE users SET Fullname = ?, Img = ?, Username = ?, Password = ?, Email = ?, SDT = ?, isAdmin = ? WHERE Id = ?',
    [fullname, image, username, password, email, sdt, isAdmin, userId],
    (err, results) => {
      if (err) {
        console.error('Lỗi update người dùng:', err);
        res.status(500).json({ message: 'Lỗi update người dùng' });
      } else {
        const message = 'Dữ liệu đã được update thành công';
        res.send(`<script>alert("${message}"); window.location.href = "/admin/users";</script>`);
      }
    }
  );
};
exports.searchUser = (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy sản phẩm
  const searchTerm = req.body.searchTerm;
  const searchValue = '%' + searchTerm + '%';
  db.query('SELECT * FROM users where Id LIKE ? OR Fullname LIKE ? OR Username LIKE ?',
  [searchValue,searchValue,searchValue], 
  (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('../admin/views/users/users.ejs', { users: results });
  });
};