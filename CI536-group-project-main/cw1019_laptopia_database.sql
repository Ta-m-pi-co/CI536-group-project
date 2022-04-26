-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 26, 2022 at 04:01 PM
-- Server version: 5.7.37
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cw1019_laptopia_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `OrderContents`
--

CREATE TABLE `OrderContents` (
  `OrderId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `OrderId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `FullName` varchar(32) DEFAULT NULL,
  `Refund` bit(1) DEFAULT NULL,
  `DateOfOrder` date NOT NULL,
  `DateOfReturn` date DEFAULT NULL,
  `OrderPrice` decimal(15,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `ProductId` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Price` decimal(20,2) NOT NULL,
  `OS` varchar(200) DEFAULT NULL,
  `CPU` varchar(200) DEFAULT NULL,
  `RAM` varchar(200) DEFAULT NULL,
  `GraphicsCard` varchar(200) DEFAULT NULL,
  `Storage` varchar(200) DEFAULT NULL,
  `Dimensions` varchar(200) DEFAULT NULL,
  `Image` varchar(300) DEFAULT NULL,
  `Rating` int(3) DEFAULT NULL,
  `Stock` int(10) DEFAULT NULL,
  `Details` varchar(2000) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`ProductId`, `Name`, `Price`, `OS`, `CPU`, `RAM`, `GraphicsCard`, `Storage`, `Dimensions`, `Image`, `Rating`, `Stock`, `Details`) VALUES
(1, 'HP Pavilion 14-dv0626sa 14 Laptop - Intel Core i3, 256 GB SSD, Silver', '479.00', 'Windows 11 Home', 'Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads)', '8 GB DDR4-3200 MHz RAM (1 x 8 GB)', 'CPU Integrated', '256 GB PCIe NVMe M.2 SSD', '35.6 cm (14\") diagonal, FHD (1920 x 1080), touch, IPS, micro-edge, anti-glare, 250 nits, 45% NTSC', 'https://noteb.com/res/img/models/3881_1.jpg', 74, 6, 'Take on daily tasks\r\nWhether you\'re working on a project, binge-watching a boxset or browsing social media, the HP Pavilion 14-dv0626sa 14\" Laptop lets you do it all. Featuring an 11th gen Intel Core i3 processor, it can easily handle your day-to-day tasks.\r\nWith an elevated keyboard and a smooth metal finish, it\'s designed to keep you comfortable. The IPS display delivers vivid colours, sharp contrasts and wide viewing angles. And because the frame around the display is super thin, you\'ll be able to view your media without distraction. '),
(2, 'Lenovo Legion Pro 16 ACH', '1345.98', 'Windows 11 Home', 'AMD Ryzen 7 5800H', '16GB DDR4', 'NVIDIA GeForce RTX 3060', '512GB SSD', '16 inch display', 'https://noteb.com/res/img/models/3415_1.jpg', 66, 2, 'The Lenovo Legion 5 Pro is a stylish and well-built laptop computer with great gaming performance. A robust cooling system, beautiful screen, good keyboard, and rugged build quality all contribute to its ability to stand out amongst the competition.'),
(3, 'Lenovo Legion 5 15ITH', '950.00', 'Windows 11 Home', 'Intel i5-11400H', '8GB DDR4', 'NVIDIA GeForce GTX 1650', '512GB SSD', '15.6 inch display', '	https://noteb.com/res/img/models/3414_1.jpg', 78, 3, 'The intersection of minimalism and raw power\r\nOwn the room and the leaderboard with the Legion 5 gaming laptop. Designed with high-performance in mind, while keeping a low profile with clean, minimalist looks that complement your lifestyle.'),
(4, 'Lenovo ThinkBook 13s G2 ITL', '806.00', 'Windows 10 Pro', 'Intel i5-1135G7', '16GB DDR4', 'Intel Iris Xe G7', '512GB SSD', '13.3 inch display', '	https://noteb.com/res/img/models/2996_1.jpg', 54, 2, 'Work gets done faster than ever with the Lenovo Thinkbook 13s 2nd generation (Intel) laptop, no matter how difficult the task is. It is equipped with Intel an Core i5 11th generation CPU. A generation that makes the most demanding software run smoothly. In addition, with its large memory and storage capacity, you can forget about the long loading times of complex files. '),
(5, 'Acer Predator Helios 300 15 PH315-53', '1435.00', 'Windows 10 Home', 'Intel i7-10750H', '16GB DDR4', 'NVIDIA GeForce RTX 2060', '512GB SSD', '15.6 inch display', 'https://noteb.com/res/img/models/2837_1.jpg', 61, 5, 'The Helios 300 drops you right into the game with everything you need to obliterate the opposition on a blisteringly fast 240Hz 1ms display.'),
(10, 'Tongfang GM5TG8W', '2474.98', 'Windows 10 Home', 'Intel i7-11800H', '16GB DDR4', 'NVIDIA GeForce RTX 3080', '512GB SSD', '15.6 inch display', 'https://noteb.com/res/img/models/3653_1.jpg', 74, 5, 'one of the first laptops in the manufacturer\'s lineup that is also equipped with a Tiger Lake H processor in addition to the 16 GB RTX-3080. Unlike models from larger manufacturers, there are numerous pro features on this 15-inch laptop, such as CPU undervolting and manual configuration of power limits and the working memory.'),
(9, 'Dell XPS 15 9510', '1799.99', 'Windows 11 Home', 'Intel i7-11800H', '16GB DDR4', 'NVIDIA GeForce RTX 3050 Ti', '512GB SSD', '15.6 inch display', 'https://noteb.com/res/img/models/3591_1.jpg', 64, 5, 'For smooth performance, you need a processor that can easily handle your high demands. The Dell XPS 15 9510 15.6\" Laptop combines a 11th gen Intel Core i7 processor with 16 GB RAM to effortlessly run your most challenging software, without any delay or lag.\r\n\r\nWhether you\'re rendering a video project to share online or competing against friends in a battle royale, the NVIDIA RTX 3050 Ti graphics card makes work and play even easier. You\'ll be able to take on your favourite games in the Steam charts, and you\'ll be able to work faster and more precisely in Photoshop or CAD.\r\n\r\nUnleash the full potential of the USB Type-C port. Each Thunderbolt 4 delivers support for dual 4K displays, or a single 8K one. Or you can charge your devices with up to 100W of power delivery, enough for another laptop or tablet. And you can use it for lightning-fast data transfer too.'),
(11, 'Acer Chromebook Spin 511 R753TN', '364.99', 'Chrome OS', 'Intel Celeron N4500', '4GB DDR4', 'Intel UHD Graphics', '32GB EMMC', '11.6 inch display', 'https://noteb.com/res/img/models/3446_1.jpg', 33, 8, 'Start thinking outside the box with the convertible Acer Chromebook Spin 511. With its 4 usage modes, world-facing camera, state of the art processor, military durability, and long battery life, this Chromebook allows students to stay engaged and ready to achieve more in the classroom.\r\nWhether you\'re rendering a video project to share online or competing against friends in a battle royale, the NVIDIA RTX 3050 Ti graphics card makes work and play even easier. You\'ll be able to take on your favourite games in the Steam charts, and you\'ll be able to work faster and more precisely in Photoshop or CAD.\r\n\r\nUnleash the full potential of the USB Type-C port. Each Thunderbolt 4 delivers support for dual 4K displays, or a single 8K one. Or you can charge your devices with up to 100W of power delivery, enough for another laptop or tablet. And you can use it for lightning-fast data transfer too.'),
(12, 'Dell Alienware Area-51m R2 ', '2317.00', 'Windows 10 Home', 'Intel i7-10700K', '16GB DDR4', 'NVIDIA GeForce RTX 2070 SUPER', '1024GB SSD', '17.3 inch display', 'https://noteb.com/res/img/models/3050_1.jpg', 74, 2, 'For smooth performance, you need a processor that can easily handle your high demands. This Alienware Gaming Laptop combines a 11th gen Intel Core i7 processor with 16 GB RAM to effortlessly run the latest gaming titles, without any delay or lag.'),
(13, 'Apple MacBook Air (2020)', '999.99', 'macOS 12', 'Intel i3-1000NG4', '8GB DDR4', 'Intel Iris Plus Graphics G4', '256GB SSD', '13.3 inch display', 'https://noteb.com/res/img/models/2102_1.jpg', 48, 4, 'Incredibly light and boasting a speedy performance, get your work done anywhere with the MacBook Air (2020).\r\n\r\n From video-editing to gaming, the Apple M1 chip lets you take on the biggest tasks without draining your battery. It\'s 3.5x faster than the previous generation, with eight-cores of power providing an incredible performance. And for whisper-quiet operation, the improved thermal efficiency means it doesn\'t even need a fan.\r\n\r\n With the Retina Display screen, everything from blockbuster movies to everyday browsing is a visual joy. True Tone technology automatically adjust the display to your environment - so web pages and emails look as natural as if they were printed.'),
(14, 'Apple MacBook Pro 13 M1 2020', '1010.00', 'macOS 12', 'ARM-based Apple M1', '8GB DDR4', 'APPLE M1', '256GB SSD', '13.3 inch display', 'https://noteb.com/res/img/models/3120_1.jpg', 54, 6, 'From video-editing to gaming, the Apple M1 chip lets you take on the biggest tasks and creative projects without draining your battery. It\'s 2.8x faster than the previous generation, with eight-cores of power providing an incredible performance. \r\nDon\'t waste time waiting for things to load. The MacBook Pro is super responsive and wakes instantly. Plus, with speedy SSD storage, you\'ll be able to save files, load programs and access huge video and image files in a moment.');

-- --------------------------------------------------------

--
-- Table structure for table `Reviews`
--

CREATE TABLE `Reviews` (
  `Username` varchar(30) NOT NULL,
  `Date` date NOT NULL,
  `Comment` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserId` int(11) NOT NULL,
  `Username` varchar(32) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `Email` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserId`, `Username`, `Password`, `Email`) VALUES
(1, 'freddie1', 'password123', 'fred54@gmail.com'),
(2, 'jstw14', 'coolpassword', 'sickdude13@hotmail.com'),
(3, 'Tampi', 'test1', 'tampi@tampster.org'),
(4, 'lauren84', 'bootstrapSUX', 'lauren84@uni.brighton.ac.uk'),
(5, 'SolidJake', 'metalgear?!', 'narutoGuy21@gmail.com'),
(6, 'greenTom', 'greenman', 'greendude@green.gov'),
(7, 'carlCox', 'coxCarl', 'carlcox@carl.cox'),
(8, 'name1', 'password4', 'testuser@gmail.com'),
(12, 'dudebro1', 'sickpassword', 'coolguy420@sick.gov'),
(13, 'ImCazzLol', 'bigChungus', 'callumSUX@hotmales.com'),
(14, 'helloworld', 'Helloworld!1', 'helloworld@gmail.com'),
(15, 'testuser44', 'Hello@123', 'testuser1@gm.co'),
(16, 'filthyfrankTV', 'Ch!nCh1n', 'filthyfrank@gmail.com'),
(17, 'Fongi', 'IhateC0mpSc!', 'freddie@test.com'),
(18, 'hell0', 'hellll0@@', 'hellodude@gmail.com'),
(19, 'poopoo', 'money1!2', 'happymonke@gmail.com'),
(20, 'fgjfgjfgj', 'dhfgdhfgff7@', 'ghfgjfj@d.fgh'),
(21, 'fhgjryfjd', 'dhdht@66', 'fgjfjfg@g.gh'),
(22, 'tw466', 'Cooldude13!', 'thomasw2701@gmail.com'),
(23, 'poopoo1', 'money34%', 'cfdfg@sdf.dsf'),
(24, 'poopoo2', 'moaximof$3', 'gogo1@df.com'),
(25, 'dfhdthf', 'fgjf555@', 'fgjfjfgjfgjhfgjg@g.gg'),
(26, 'dfhdhhthf', 'fgjf555%', 'fgjfjfhhgjfgjhfgjg@g.gg'),
(27, 'lknlknlk', 'ghhgdfh5%', 'kjj@hh.gjd'),
(28, 'gogo4', 'maximof12`', 'gogo@gmo.com'),
(29, 'moneyman', 'noxian12`', 'gogo5@gmail.com'),
(30, 'moser', 'manymoo1Â£1', 'gogo@gmail.com'),
(31, 'monneyw', 'moneyt5$', 'gogo7@gmail.com'),
(32, 'Moneyman3', 'Maximof1*', 'gogo74@gmail.com'),
(33, 'jhbkjnkjn', 'kjbkjbkj7=', 'kjhiugew@dfg.eg'),
(34, 'kjbxkcjvbdskj', 'jhbkjbib9:~', 'kjjbk@hgn.fh'),
(35, 'kjbxkcjvbdskjg', '\"hello999\'', 'cfhdfh@gf.hh'),
(36, 'jhbkjbkjb', 'hello==0', 'jhbjds@s.fg'),
(37, 'jhvjhv', 'gkhkjhkjhkjh0}', 'iugiuggu@h.hh'),
(38, 'kjnkjnkjn', 'gjfhjfgfh0@', 'dsfgdf@f.f'),
(39, 'ironman', 'i am ir0n man', 'kjsdkjvsd@ffgd.ff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `OrderContents`
--
ALTER TABLE `OrderContents`
  ADD KEY `OrderId` (`OrderId`),
  ADD KEY `ProductId` (`ProductId`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`ProductId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `ProductId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
