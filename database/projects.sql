-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 24, 2021 at 09:07 AM
-- Server version: 5.7.23-23
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inkblvo8_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `index` int(255) NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `cover_image` varchar(255) NOT NULL,
  `project_image` varchar(255) NOT NULL,
  `date-time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `index`, `project_name`, `category_name`, `cover_image`, `project_image`, `date-time`) VALUES
(63, 3, 'CyberSun Consulting', '(Logo)', 'Cyber-Sun-logo-project-Cover.jpg', 'Cyber-Sun.jpg', '0000-00-00 00:00:00'),
(62, 2, 'Mirah Belle Naturals', '(Packaging)', 'bamboo-cover.jpg', 'Mirah_Belle.jpg', '0000-00-00 00:00:00'),
(61, 1, 'Global Connectors', '(UX/UI, Web Design)', 'Global-Connectors-cover.png', 'Global-Connectors-01.jpg,Global-Connectors-02.jpg,Global-Connectors-03.jpg,Global-Connectors-04.jpg,Global-Connectors-05.jpg', '0000-00-00 00:00:00'),
(60, 0, 'iWheels', '(UX/UI, App Design)', 'mockup-01.jpg', 'mockup-01.jpg,mockup-02.jpg,mockup-03.jpg,mockup-04.jpg,mockup-05.jpg,mockup-06.jpg', '0000-00-00 00:00:00'),
(64, 4, 'Transform', '(Booklet)', 'transform-cover.jpg', 'transform-1.jpg,transform-2.jpg,transform-3.jpg,transform-4.jpg,transform-5.jpg', '0000-00-00 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
