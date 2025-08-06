-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 06, 2025 at 07:54 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `g4`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `status` int(2) NOT NULL,
  `parent_id` int(10) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `slug`, `image`, `status`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'Phone', 'New phone', NULL, 'uploads/1753107399913-10609258.jpg', 1, NULL, '2025-07-07 14:04:34', '2025-07-21 14:16:39'),
(2, 'Computer', 'New computer', NULL, 'uploads/1753107530430-555501881.jpg', 1, NULL, '2025-07-08 13:35:13', '2025-07-21 14:18:50'),
(4, 'Laptop', 'laptop', NULL, 'uploads/1753367704647-385433994.webp', 1, 2, '2025-07-08 14:00:24', '2025-07-24 14:35:04'),
(5, 'Monitor', 'laptop', NULL, 'uploads/1753367691328-756592082.webp', 1, 2, '2025-07-08 14:01:02', '2025-07-24 14:34:51'),
(6, 'Tablet', 'tablet', NULL, '', 1, 1, '2025-07-08 14:11:54', '2025-07-08 14:11:54'),
(7, 'Phones', 'phones', NULL, '', 0, 1, '2025-07-08 14:28:19', '2025-07-08 14:28:33'),
(8, 'Apple', 'apple', 'null', 'uploads/1752502950083-344295360.jpg', 1, 4, '2025-07-14 14:22:30', '2025-07-24 14:05:26'),
(9, 'Apple', 'apple', 'null', 'uploads/1752586321096-766417481.jpg', 1, 7, '2025-07-15 13:32:01', '2025-07-24 14:05:38'),
(10, 'Apple', 'apple', NULL, 'uploads/1752586372969-535599472.jpg', 1, 4, '2025-07-15 13:32:52', '2025-07-24 14:35:58'),
(11, 'Apple 03', 'apple 03', NULL, 'uploads/1752586764733-769631241.jpg', 1, 4, '2025-07-15 13:39:24', '2025-07-24 14:35:45'),
(12, 'Apple 04', 'apple 04', NULL, 'uploads/1752590184591-24553505.jpg', 1, 1, '2025-07-15 14:02:45', '2025-07-15 14:36:24');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `tel`, `image`, `gender`, `dob`, `email`, `password`, `created_at`, `updated_at`) VALUES
(2, 'Makara', 'Chhum', '012121212', 'https://media.istockphoto.com/id/184147789/photo/man-looking-away-on-white-background.jpg?s=612x612&w=0&k=20&c=s9KItW2lyjLm__W-c0UKu27iGtWqNCNVHTiHx5o8BNo=', 'Male', '2000-01-01 00:00:00', 'makara@gmail.com', '$2b$10$uuiOEe17bzUTJaFarTL8N.RKCYE601SNZrFl1OPYJQlGgnh1LtU5W', '2025-06-02 14:07:55', '2025-06-02 14:07:55'),
(3, 'van', 'net', NULL, 'https://media.istockphoto.com/id/1316604492/photo/profile-portrait-of-middle-aged-man-over-grey-background.jpg?s=612x612&w=0&k=20&c=m_9Xg7mIqE8E4Zx2bVd_n1DMu2b2OvD97GhNQsJmQeE=', 'Male', '2000-01-01 00:00:00', 'van@gmail.com', '1234', '2025-06-02 14:07:55', '2025-06-02 14:07:55'),
(6, 'Choun', 'Dina 04', '012121213', 'https://media.istockphoto.com/id/1316604492/photo/profile-portrait-of-middle-aged-man-over-grey-background.jpg?s=612x612&w=0&k=20&c=m_9Xg7mIqE8E4Zx2bVd_n1DMu2b2OvD97GhNQsJmQeE=', 'male', '2000-01-01 00:00:00', 'dina@gmail.com', '$2b$10$uuiOEe17bzUTJaFarTL8N.RKCYE601SNZrFl1OPYJQlGgnh1LtU5W', '2025-06-05 13:41:14', '2025-06-05 13:41:14'),
(7, 'mey', 'heng', NULL, 'https://media.istockphoto.com/id/1316604492/photo/profile-portrait-of-middle-aged-man-over-grey-background.jpg?s=612x612&w=0&k=20&c=m_9Xg7mIqE8E4Zx2bVd_n1DMu2b2OvD97GhNQsJmQeE=', 'male', '2000-01-01 00:00:00', 'heng@gmail.com', '1234', '2025-06-05 14:05:43', '2025-06-05 14:05:43');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `qty` int(10) NOT NULL DEFAULT 0,
  `price` float NOT NULL,
  `discount_percent` float NOT NULL,
  `discount_amount` float NOT NULL,
  `net_price` float NOT NULL,
  `status` int(2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `qty`, `price`, `discount_percent`, `discount_amount`, `net_price`, `status`, `created_at`, `updated_at`, `category_id`) VALUES
(2, 'Headphones', 'High-quality noise-canceling over-ear headphones', 150, 120, 10, 12, 108, 1, '2025-06-09 14:04:09', '2025-06-09 14:10:47', 3),
(4, 'Iphone 16', 'High-quality noise-canceling over-ear headphones', 10, 1000, 0, 0, 1000, 1, '2025-06-09 14:30:51', '2025-06-09 14:30:51', 3),
(5, 'Macbook ', 'High-quality noise-canceling over-ear headphones', 3, 2000, 0, 0, 1000, 1, '2025-06-10 14:27:42', '2025-06-12 13:59:14', 3),
(7, 'Mac book 222', 'color red', 3, 1000, 10, 100, 900, 1, '2025-06-11 14:17:12', '2025-07-24 14:14:01', 10),
(9, 'Macbook M3', 'High-quality noise-canceling over-ear headphones', 3, 2000, 0, 0, 1000, 1, '2025-06-17 14:09:56', '2025-07-24 14:15:39', 2),
(10, 'Ipad', 'High-quality noise-canceling over-ear headphones', 3, 2000, 0, 0, 1000, 0, '2025-06-17 14:10:31', '2025-06-17 14:29:36', 3),
(11, 'Macbook M4', 'ប្រភេទមេ :កុំព្យូទ័រ & គ្រឿងបន្លាស់\nប្រភេទ :កុំព្យូទ័រយួរដៃ\nម៉ាក :Apple\nលក្ខខណ្ឌ :ថ្មី\nទំហំ​អេក្រង់ :15\" - 15.9\"\nទំហំផ្ទុកទិន្នន័យ :500GB - 512GB\nអង្គ​ចងចាំ - RAM :16GB\nCPU :M4\nVGA :រួមបញ្ចូល - Integrated\n-Apple M4 Chip\n-10 Core CPU & 10 Core GPU\n-16GB Unified Ram\n-512GB SSD PCIe\n-15.3\" Liquid Retina Display\n-Weight : 1.5Kg', 3, 2000, 0, 0, 1000, 1, '2025-06-17 14:19:37', '2025-07-24 13:44:59', 2),
(13, 'Iphone 16', 'High-quality noise-canceling over-ear headphones', 3, 2000, 0, 0, 1000, 1, '2025-06-19 13:56:08', '2025-07-10 13:47:23', 7),
(14, 'test', 'High-quality noise-canceling over-ear headphones', 3, 2000, 0, 0, 1000, 0, '2025-07-07 14:20:20', '2025-07-21 14:36:03', 3),
(15, 'Samsung', 'ប្រភេទមេ :ទូរស័ព្ទ & ថេប្លេត ប្រភេទ :ទូរស័ព្ទ ម៉ាក :Samsung ម៉ូដែល :ផ្សេងៗ ទំហំផ្ទុកទិន្នន័យ :128GB លក្ខខណ្ឌ :បានប្រើ', 10, 100, 10, 10, 90, 1, '2025-07-10 13:48:45', '2025-07-23 14:31:27', 7);

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(2) NOT NULL,
  `sort_order` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`id`, `name`, `status`, `sort_order`, `product_id`, `created_at`, `updated_at`) VALUES
(2, 'uploads/1752759693301-487206117.jpeg', 1, 0, 15, '2025-07-17 13:41:33', '2025-07-17 13:41:33'),
(3, 'uploads/1752759693302-973442871.webp', 1, 1, 15, '2025-07-17 13:41:33', '2025-07-17 13:41:33'),
(4, 'uploads/1753108473391-876198581.webp', 1, 0, 13, '2025-07-21 14:34:33', '2025-07-21 14:34:33'),
(5, 'uploads/1753281330297-19472321.jpg', 1, 0, 11, '2025-07-23 14:35:30', '2025-07-23 14:35:30'),
(6, 'uploads/1753366549943-682550076.jpg', 1, 0, 9, '2025-07-24 14:15:49', '2025-07-24 14:15:49'),
(7, 'uploads/1753366617291-48138013.jpg', 1, 0, 7, '2025-07-24 14:16:57', '2025-07-24 14:16:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_images_product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `fk_product_images_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
