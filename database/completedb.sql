-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2023 at 06:57 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nextmysqlcrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `customer_phone` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `product_id`, `quantity`, `total_price`, `customer_name`, `customer_phone`, `created_at`) VALUES
(9, 58, 2, 1000.00, 'marlon', '67484976', '2023-11-02 22:05:01'),
(10, 51, 3, 900.00, 'daniela', '68474678', '2023-11-02 22:08:27');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `price`, `createdAt`) VALUES
(51, 'Gaara', ' Gaara es un ninja de la Aldea de la Arena, conocido por ser el anfitrión del demonio Shukaku. Al principio es temido y aislado, pero con el tiempo se convierte en un aliado valioso y líder de su alde', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698035305/ced82mwgeyfegyngq993.jpg', 300.00, '2023-10-23 04:28:25'),
(52, 'Hinata Hyuga', 'Hinata es una ninja de la Aldea de la Hoja y miembro del Clan Hyuga. Inicialmente es tímida y reservada, pero a lo largo de la serie, gana confianza y se convierte en una valiosa ninja con habilidades', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698035367/yglqhsbbolp0l4qzinv5.jpg', 350.00, '2023-10-23 04:29:27'),
(53, 'Kakashi Hatake', 'Kakashi es un ninja legendario de la Aldea de la Hoja y líder del Equipo 7. Es famoso por su Sharingan y su técnica de Copia de Mil Jutsus. Su actitud calmada y sabiduría son reconocidas en todo el mu', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698035960/ckpjgr7qkx3tqdssm1pn.png', 650.00, '2023-10-23 04:30:21'),
(54, 'Neji Hyuga', 'Neji, también miembro del Clan Hyuga, es conocido por sus habilidades en el Byakugan. Al principio tenía una visión rígida del destino, pero con el tiempo cambia su perspectiva y se convierte en un al', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698094673/y0v5etppinbbbfakjp9y.jpg', 499.00, '2023-10-23 04:31:09'),
(55, 'Orochimaru', 'Orochimaru es un poderoso y villano ninja renegado. Busca inmortalidad y poder, lo que lo lleva a realizar experimentos oscuros y buscar conocimiento prohibido.', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698035528/x4urtiji05cy7bwvhw28.jpg', 300.00, '2023-10-23 04:32:08'),
(56, 'Shikamaru Nara (Agotado)', 'Shikamaru es un ninja de la Aldea de la Hoja conocido por su inteligencia sobresaliente. A menudo es perezoso, pero demuestra ser un estratega brillante y un leal amigo.', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698035614/mzope6gasilr0k9h5kve.jpg', 500.00, '2023-10-23 04:33:34'),
(57, 'Tsunade', 'Tsunade es la Quinta Hokage de la Aldea de la Hoja y una de las ninjas más fuertes. También es una hábil médica ninja. Aunque al principio es reacia a asumir el cargo de Hokage.', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698035654/nhcwtglpzcs68oqwltzq.jpg', 799.00, '2023-10-23 04:34:14'),
(58, 'Naruto Uzumaki:', ' Naruto es el protagonista de la serie. Es un ninja optimista y perseverante que busca convertirse en el Hokage de la Aldea de la Hoja. Naruto es conocido por ser el anfitrión del Zorro de Nueve Colas', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698036511/drnsku5kg77spzybdsdt.png', 500.00, '2023-10-23 04:48:32'),
(59, 'Rock Lee', 'Rock Lee es un ninja de la Aldea de la Hoja y es conocido por su falta de habilidades en jutsus y genjutsus. Sin embargo, compensa esto con una dedicación increíble al taijutsu y una ética de trabajo ', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698036553/upock1ovnajub9xefjd4.png', 600.00, '2023-10-23 04:49:14'),
(60, 'Obito Uchiha', 'Obito, también conocido como Tobi, es un personaje icónico de la serie. Inicialmente, se creía que había muerto, pero reaparece bajo el alias de Tobi y más tarde como Obito.', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698036604/bmndrg2molhxeexc8zfq.png', 599.00, '2023-10-23 04:50:05'),
(61, 'Madara Uchiha', 'Madara es uno de los antagonistas principales en \"Naruto\". Es uno de los Uchiha más poderosos y fundador de la organización Akatsuki. Madara busca cumplir su visión de un mundo diferente.', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698036639/ei1yq2pgxnuwnwggctlg.png', 900.00, '2023-10-23 04:50:39'),
(62, 'Roronoa Zoro', '\r\nRoronoa Zoro, apodado \"El Cazador de Piratas\", es uno de los principales miembros de la tripulación de los Piratas del Sombrero de Paja, liderados por Monkey D. Luffy. Zoro es un espadachín experto ', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698037022/iu52pqwnyrqzqpi1kjr8.png', 1000.00, '2023-10-23 04:57:03'),
(63, 'Itachi Uchiha', 'Itachi Uchiha es un personaje complejo de \"Naruto\". Inicialmente, es presentado como un villano que ha cometido actos crueles, como el asesinato de su clan. Sin embargo, a medida que se desarrolla la ', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698037537/qqhlbc9d1zxs5naiftri.png', 10000.00, '2023-10-23 05:05:40'),
(64, 'Gon Freecss (Hunter x Hunter)', 'Gon Freecss es el protagonista de \"Hunter x Hunter\". Es un joven aventurero que busca convertirse en un \"Cazador\" como su padre, a quien apenas conoce. Gon es conocido por su naturaleza optimista, val', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698037594/czospscawobzthwyrf8i.png', 350.00, '2023-10-23 05:06:35'),
(65, 'Sailor Moon (New)', 'Sailor Moon, también conocida como Usagi Tsukino o Serena Tsukino en algunas versiones, es la protagonista de la serie de anime y manga \"Sailor Moon\" creada por Naoko Takeuchi. Usagi es una joven apar', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698038254/sndrqnz3ez7rdhrksvfg.png', 500.00, '2023-10-23 05:17:35'),
(66, 'Thor (Avenguers)', 'Thor es un personaje de cómic creado por Stan Lee, Larry Lieber y Jack Kirby para Marvel Comics. Es un dios del trueno de la mitología nórdica y uno de los superhéroes más icónicos de Marvel. Thor es ', 'https://res.cloudinary.com/dpqrv4wwe/image/upload/v1698038336/foc8ikiajwhcwrarrzrt.png', 360.00, '2023-10-23 05:18:24');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(10) UNSIGNED NOT NULL,
  `customer_id` int(10) UNSIGNED DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `purchase_datetime` timestamp NOT NULL DEFAULT current_timestamp(),
  `quantity` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`) VALUES
(1, 'marlon', 'huayra.marlon.654@gmail.com', '12345678', '2023-11-02 20:08:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
