-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Dec 22. 12:22
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `pcweb`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `customers`
--

CREATE TABLE `customers` (
  `CustomerID` int(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `UserName` varchar(250) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PasswordHash` binary(64) NOT NULL,
  `PhoneNum` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders`
--

CREATE TABLE `orders` (
  `OrderID` int(20) NOT NULL,
  `OrderCustomerID` int(20) DEFAULT NULL,
  `OrderProductID` int(20) DEFAULT NULL,
  `Quantity` int(2) DEFAULT NULL COMMENT 'Talán not null attól függ hogy akarjuk majd',
  `OrderDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `OrderStatus` varchar(250) NOT NULL COMMENT 'processing, shipped, delivered',
  `TotalCost` varchar(250) NOT NULL COMMENT 'attól függ, hogy íratjuk ki . meg Ft'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `payments`
--

CREATE TABLE `payments` (
  `PaymentID` int(11) NOT NULL,
  `OrderIDFk` int(20) DEFAULT NULL,
  `PaymentMethod` varchar(50) NOT NULL COMMENT 'ez nembiztos, h kell bele// credit card, PayPal, etc.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `ProductID` int(20) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL COMMENT 'sima text vagy varchar',
  `Price` varchar(10) DEFAULT NULL COMMENT 'int vagy varchar a vessző meg ezek miatt',
  `Quantity in stock` int(3) NOT NULL,
  `Manufacturer` varchar(40) NOT NULL,
  `Specifications` varchar(250) NOT NULL COMMENT 'CPU, GPU etc..'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `reviews`
--

CREATE TABLE `reviews` (
  `ReviewID` int(11) NOT NULL,
  `ReviewProductID` int(20) NOT NULL,
  `ReviewCustomerID` int(20) NOT NULL,
  `Rating` double NOT NULL,
  `ReviewText` text DEFAULT NULL,
  `ReviewDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `CartCustomerID` int(20) NOT NULL,
  `CartProductID` int(20) NOT NULL,
  `Quantity` int(2) DEFAULT NULL COMMENT 'talán not null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`CustomerID`),
  ADD UNIQUE KEY `customers_pk2` (`Email`);

--
-- A tábla indexei `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `Orders_customers_CustomerID_fk` (`OrderCustomerID`),
  ADD KEY `orders_products_ProductID_fk` (`OrderProductID`);

--
-- A tábla indexei `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`PaymentID`),
  ADD KEY `Payments_orders_OrderID_fk` (`OrderIDFk`);

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD UNIQUE KEY `Products_pk2` (`ProductName`);

--
-- A tábla indexei `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`ReviewID`),
  ADD KEY `Reviews_customers_CustomerID_fk` (`ReviewCustomerID`),
  ADD KEY `Reviews_products_ProductID_fk` (`ReviewProductID`);

--
-- A tábla indexei `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD KEY `ShoppingCart_customers_CustomerID_fk` (`CartCustomerID`),
  ADD KEY `shoppingcart_products_ProductID_fk` (`CartProductID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `customers`
--
ALTER TABLE `customers`
  MODIFY `CustomerID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `payments`
--
ALTER TABLE `payments`
  MODIFY `PaymentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(20) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `Orders_customers_CustomerID_fk` FOREIGN KEY (`OrderCustomerID`) REFERENCES `customers` (`CustomerID`),
  ADD CONSTRAINT `orders_products_ProductID_fk` FOREIGN KEY (`OrderProductID`) REFERENCES `products` (`ProductID`);

--
-- Megkötések a táblához `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `Payments_orders_OrderID_fk` FOREIGN KEY (`OrderIDFk`) REFERENCES `orders` (`OrderID`);

--
-- Megkötések a táblához `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `Reviews_customers_CustomerID_fk` FOREIGN KEY (`ReviewCustomerID`) REFERENCES `customers` (`CustomerID`),
  ADD CONSTRAINT `Reviews_products_ProductID_fk` FOREIGN KEY (`ReviewProductID`) REFERENCES `products` (`ProductID`);

--
-- Megkötések a táblához `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD CONSTRAINT `ShoppingCart_customers_CustomerID_fk` FOREIGN KEY (`CartCustomerID`) REFERENCES `customers` (`CustomerID`),
  ADD CONSTRAINT `shoppingcart_products_ProductID_fk` FOREIGN KEY (`CartProductID`) REFERENCES `products` (`ProductID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
