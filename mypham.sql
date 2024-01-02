-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 04:50 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maymayshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Id`, `Name`) VALUES
(1, 'Rolex'),
(8, 'cartier'),
(9, 'mido'),
(10, 'Piguet');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `Id` int(11) NOT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `OrderDate` datetime DEFAULT NULL,
  `Address` varchar(200) DEFAULT NULL,
  `Total` float DEFAULT NULL,
  `Status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`Id`, `CustomerId`, `OrderDate`, `Address`, `Total`, `Status`) VALUES
(1, 1, '2023-10-07 00:14:19', 'Hà Nam, Việt Nam', 30000, 2),
(2, 1, '2023-10-07 00:29:14', 'Hà nội', 340000, 2),
(3, 1, '2023-10-07 00:40:42', 'Hà nội', 370000, 1),
(4, 1, '2023-10-07 00:48:20', 'Hà nội', 530000, 1),
(5, 1, '2023-10-07 00:54:56', 'Hà nội', 80000, 1),
(6, 1, '2023-10-07 01:13:03', 'Hà nội', 30000, 1),
(7, 1, '2023-10-07 01:50:49', 'Hà nội', 100000, 1),
(8, 1, '2023-10-07 01:59:24', 'Hà nội', 150000, 1),
(9, 1, '2023-10-07 02:26:32', 'Hà nội', 100000, 1),
(10, 1, '2023-10-07 02:50:37', 'Hà nội', 150000, 1),
(11, 1, '2023-10-07 02:53:09', 'Hà nội', 200000, 1),
(12, 1, '2023-10-07 03:02:17', 'Hà nội', 30000, 2),
(13, 1, '2023-10-07 11:34:33', 'Sơn Tây', 380000, 2),
(14, 1, '2023-10-07 15:28:03', 'Sơn Tây', 260000, 0),
(16, 11, '2023-10-22 19:50:11', 'Hà nội', 554000, 1),
(17, 1, '2023-10-29 00:40:00', 'Sơn Tây', 1300000, 1),
(18, 1, '2023-10-29 19:34:23', 'Hà nội', 260000, 1),
(19, 1, '2023-10-29 22:00:56', 'Hà nội', 6605000, 1),
(20, 1, '2023-10-29 22:02:50', 'Sơn Tây', 2026000, 1),
(21, 1, '2023-10-30 16:07:18', 'Hà nội', 385000, 1),
(22, 1, '2023-11-23 09:39:52', 'hanoi', 115000, 1),
(23, 1, '2023-11-23 09:47:49', 'hà nội', 250000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `OrderId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`OrderId`, `ProductId`, `Quantity`, `Price`) VALUES
(1, 1, 1, 30000),
(2, 1, 3, 90000),
(3, 1, 4, 120000),
(4, 1, 6, 180000),
(4, 1, 6, 180000),
(5, 1, 1, 30000),
(5, 2, 1, 50000),
(6, 1, 1, 30000),
(7, 2, 2, 100000),
(8, 2, 3, 150000),
(9, 2, 2, 100000),
(10, 2, 3, 150000),
(11, 2, 4, 200000),
(12, 1, 1, 30000),
(13, 1, 6, 180000),
(13, 2, 4, 200000),
(14, 1, 2, 60000),
(14, 2, 4, 200000),
(16, 35, 5, 30000),
(16, 31, 3, 240000),
(16, 40, 2, 34000),
(16, 33, 1, 250000),
(17, 32, 1, 1300000),
(18, 36, 1, 5000),
(18, 2, 3, 150000),
(18, 31, 1, 80000),
(18, 30, 1, 25000),
(19, 30, 3, 75000),
(19, 3, 6, 30000),
(19, 32, 5, 6500000),
(20, 33, 6, 1500000),
(20, 36, 6, 30000),
(20, 40, 8, 136000),
(20, 45, 6, 180000),
(20, 44, 4, 180000),
(21, 2, 1, 50000),
(21, 33, 1, 250000),
(21, 3, 1, 5000),
(21, 31, 1, 80000),
(22, 2, 2, 100000),
(22, 3, 3, 15000),
(23, 33, 1, 250000);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `Id` int(11) NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Img` varchar(45) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `ShortDes` varchar(200) DEFAULT NULL,
  `FullDes` varchar(500) DEFAULT NULL,
  `Price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`Id`, `Name`, `Img`, `CategoryId`, `ShortDes`, `FullDes`, `Price`) VALUES
(1, 'Thương hiệu đồng hồ Cartier', '1.jpg', 1, 'Sang Trọng', 'Pin năng lượng mặt trời, chống nước 100%, sang trọng lịch sử', 30000),
(2, 'Hãng đồng hồ Rolex. ...', '2.jpg', 1, 'Tinh tế', 'Thiết kế tinh xảo, đính kim cương nhân tạo, sang trọng, bảo hành 4 năm\nđồng hồ giới hạn, bảo hành 5 năm, pin năng \nlượng mặt trời, chống nước , xước 100%', 50000),
(3, 'Thương hiệu đồng hồ Cartier.', '3.jpg', 1, 'Tinh tế', 'Sản phẩm giới hạn, chống nước, xước, bảo hành 5 năm', 5000),
(30, 'Hãng đồng hồ nổi tiếng Aude', '4.jpg', 8, 'Quý Phái', '\r\nThiết kế tinh xảo, đính kim cương nhân tạo, sang trọng, bảo hành 4 năm\r\nđồng hồ giới hạn, bảo hành 5 năm, pin năng \r\n', 25000),
(31, ' đồng hồ nổi tiếng Patea', '5.jpg', 10, 'Sang', 'Thiết kế tinh xảo, đính kim cương nhân tạo, sang trọng, bảo hành 4 năm\r\nđồng hồ giới hạn, bảo hành 5 năm, pin năng \r\nlượng mặt trời, chống nước , xước 100%', 80000),
(32, ' đồng hồ nổi tiếng Patek', '6.jpg', 10, 'Xịn', 'Sang trọng , đồng hồ cơ, chống xước, nước tuyệt đối\r\nSản phẩm giới hạn, chống nước, xước, bảo hành 5 nă\r\nCá bị nhiễm khuẩn- Không sơ chế kĩ- Bảo quản không đúng cách', 1300000),
(33, 'Hãng đồng hồ Jaeger-LeCoultre.', '7.jpg', 10, 'Sang', 'Thiết kế tinh xảo, đính kim cương nhân tạo, sang trọng, bảo hành 4 năm\r\nđồng hồ giới hạn, bảo hành 5 năm, pin năng \r\nlượng mặt trời, chống nước , xước 100%', 250000),
(34, 'Thương hiệu đồng hồ Calvin Klein', '8.jpg', 10, 'MM', 'Pin năng lượng mặt trời, chống nước 100%, sang trọng lịch sử\r\nSang trọng , đồng hồ cơ, chống xước, nước tuyệt đối', 150000),
(35, 'Thương hiệu đồng hồ Longines', '9.jpg', 10, 'Đẹp da, sáng mắt', 'đồng hồ giới hạn, bảo hành 5 năm, pin năng \r\nlượng mặt trời, chống nước , xước 100%', 6000),
(36, 'Thương hiệu đồng hồ Cartier', '10.jpg', 9, 'Giàu', 'đồng hồ giới hạn, bảo hành 5 năm, pin năng \r\nlượng mặt trời, chống nước , xước 100%. ', 5000),
(37, 'Hãng đồng hồ nổi tiếng Audemars', '11.jpg', 1, 'Ssang', 'đồng hồ giới hạn, bảo hành 5 năm, pin năng \r\nlượng mặt trời, chống nước , xước 100%', 30000),
(38, 'Thương hiệu đồng hồ Cartier.', '12.jpg', 1, 'Tinh tế', 'Sản phẩm giới hạn, chống nước, xước, bảo hành 5 năm\r\nThiết kế tinh xảo, đính kim cương nhân tạo, sang trọng, bảo hành 4 năm\r\nđồng hồ giới hạn, bảo hành 5 năm, pin năn', 320000),
(39, 'Hãng đồng hồ Jaeger-LeCoultre', '12.jpg', 1, 'Đẹp', 'đẹp', 30000),
(40, 'Thương hiệu đồng hồ Calvin Klein', '13.jpg', 9, 'xinh', 'chất lượng cao', 17000),
(41, 'Thương hiệu đồng hồ Cartier', '14.jpg', 10, 'sang', 'đẹp', 25000),
(42, 'Hãng đồng hồ nổi tiếng Audemars', '4.jpg', 1, 'xịn', 'đẹp', 10000),
(43, 'Thương hiệu đồng hồ Calvin Klein', '8.jpg', 10, 'đẹp', 'đẹp', 45000),
(44, 'watch', '12.jpg', 10, 'đẹp', 'sang.', 45000),
(45, 'Hãng đồng hồ Mido', '7.jpg', 10, 'đẹp', 'đẹp', 30000),
(46, 'Thương hiệu đồng hồ Longines.', '8.jpg', 10, 'sang trọng', 'xinh', 25000),
(47, 'Hãng đồng hồ nổi tiếng Audemars', '2.jpg', 8, 'đẹp', 'đẹp', 6000),
(48, 'Thương hiệu đồng hồ Calvin Klein', '9.jpg', 8, 'xinh', 'cryptoxanthin.', 14000),
(49, 'Hãng đồng hồ Mido', '6.jpg', 8, 'Tin', 'đjep', 15000),
(50, 'Hãng đồng hồ Jaeger-LeCoultre.', '8.jpg', 8, 'đẹp', 'đẹp', 10000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Fullname` varchar(45) NOT NULL,
  `Img` varchar(45) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `SDT` varchar(45) NOT NULL,
  `isAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Fullname`, `Img`, `Username`, `Password`, `Email`, `SDT`, `isAdmin`) VALUES
(1, 'Nguyễn Lợi', 'loi.jpg', 'admin', '1', 'abc@gmail.com', '113', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_Customer_idx` (`CustomerId`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD KEY `Fk_orderId_idx` (`OrderId`),
  ADD KEY `Fk_productId_idx` (`ProductId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_categoryId_idx` (`CategoryId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `Fk_Customer` FOREIGN KEY (`CustomerId`) REFERENCES `users` (`Id`);

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `Fk_orderId` FOREIGN KEY (`OrderId`) REFERENCES `order` (`Id`),
  ADD CONSTRAINT `Fk_productId` FOREIGN KEY (`ProductId`) REFERENCES `products` (`Id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `Fk_categoryId` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
