-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 11, 2025 at 04:53 PM
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
  `slug` varchar(255) NOT NULL,
  `status` int(2) NOT NULL,
  `parent_id` int(10) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
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

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `image`, `gender`, `dob`, `email`, `password`, `created_at`, `updated_at`) VALUES
(2, 'Makara', 'Chhum', 'https://media.istockphoto.com/id/184147789/photo/man-looking-away-on-white-background.jpg?s=612x612&w=0&k=20&c=s9KItW2lyjLm__W-c0UKu27iGtWqNCNVHTiHx5o8BNo=', 'Male', '2000-01-01 00:00:00', 'makara@gmail.com', '1234', '2025-06-02 14:07:55', '2025-06-02 14:07:55'),
(3, 'van', 'net', 'https://media.istockphoto.com/id/1316604492/photo/profile-portrait-of-middle-aged-man-over-grey-background.jpg?s=612x612&w=0&k=20&c=m_9Xg7mIqE8E4Zx2bVd_n1DMu2b2OvD97GhNQsJmQeE=', 'Male', '2000-01-01 00:00:00', 'van@gmail.com', '1234', '2025-06-02 14:07:55', '2025-06-02 14:07:55'),
(6, 'Choun', 'Dina 04', 'https://media.istockphoto.com/id/1316604492/photo/profile-portrait-of-middle-aged-man-over-grey-background.jpg?s=612x612&w=0&k=20&c=m_9Xg7mIqE8E4Zx2bVd_n1DMu2b2OvD97GhNQsJmQeE=', 'male', '2000-01-01 00:00:00', 'dina@gmail.com', '$2b$10$uuiOEe17bzUTJaFarTL8N.RKCYE601SNZrFl1OPYJQlGgnh1LtU5W', '2025-06-05 13:41:14', '2025-06-05 13:41:14'),
(7, 'mey', 'heng', 'https://media.istockphoto.com/id/1316604492/photo/profile-portrait-of-middle-aged-man-over-grey-background.jpg?s=612x612&w=0&k=20&c=m_9Xg7mIqE8E4Zx2bVd_n1DMu2b2OvD97GhNQsJmQeE=', 'male', '2000-01-01 00:00:00', 'heng@gmail.com', '1234', '2025-06-05 14:05:43', '2025-06-05 14:05:43');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
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
(5, 'Macbook ', 'High-quality noise-canceling over-ear headphones', 3, 2000, 0, 0, 1000, 0, '2025-06-10 14:27:42', '2025-06-10 14:36:02', 3),
(7, 'Mac book 220', 'color red', 3, 1000, 10, 100, 900, 1, '2025-06-11 14:17:12', '2025-06-11 14:17:12', 1);

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
