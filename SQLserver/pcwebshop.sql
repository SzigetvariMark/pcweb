CREATE TABLE `customers` (
  `ID` int(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `orders` (
  `ID` int(20) NOT NULL,
  `CustomerID` int(20) DEFAULT NULL,
  `ProductID` int(20) DEFAULT NULL,
  `Quantity` int(2) DEFAULT NULL,
  `OrderDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `TotalCost` varchar(250) NOT NULL,
  `PhoneNum` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `payments` (
  `ID` int(20) NOT NULL,
  `OrderID` int(20) DEFAULT NULL,
  `PaymentMethod` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `products` (
  `ID` int(20) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Price` varchar(10) DEFAULT NULL,
  `QuantityInStock` int(3) NOT NULL,
  `Specifications` varchar(250) NOT NULL COMMENT 'CPU, GPU etc..',
  `Images` char(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `reviews` (
 `ID` int(20) NOT NULL,
  `ProductID` int(20) NOT NULL,
  `CustomerID` int(20) NOT NULL,
  `Rating` double NOT NULL,
  `Comments` varchar(50) DEFAULT NULL,
  `Date` date NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `shoppingcart` (
  `CustomerID` int(20) NOT NULL,
  `ProductID` int(20) NOT NULL,
  `Quantity` int(2) DEFAULT NULL,
  `ID` int(20) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

ALTER TABLE `customers`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `customers_pk2` (`Email`);

ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Orders_customers_CustomerID_fk` (`CustomerID`),
  ADD KEY `orders_products_ProductID_fk` (`ProductID`);

ALTER TABLE `payments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Payments_orders_OrderID_fk` (`OrderID`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`),

ALTER TABLE `reviews`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Reviews_customers_CustomerID_fk` (`CustomerID`),
  ADD KEY `Reviews_products_ProductID_fk` (`ProductID`);

ALTER TABLE `shoppingcart`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ShoppingCart_customers_CustomerID_fk` (`CustomerID`),
  ADD KEY `shoppingcart_products_ProductID_fk` (`ProductID`);

ALTER TABLE `customers`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `orders`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `payments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `products`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `shoppingcart`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `orders`
  ADD CONSTRAINT `Orders_customers_CustomerID_fk` FOREIGN KEY (`CustomerID`) REFERENCES `customers` (`ID`),
  ADD CONSTRAINT `orders_products_ProductID_fk` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ID`);

ALTER TABLE `payments`
  ADD CONSTRAINT `Payments_orders_OrderID_fk` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`ID`);

ALTER TABLE `reviews`
  ADD CONSTRAINT `Reviews_customers_CustomerID_fk` FOREIGN KEY (`CustomerID`) REFERENCES `customers` (`ID`),
  ADD CONSTRAINT `Reviews_products_ProductID_fk` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ID`);

ALTER TABLE `shoppingcart`
  ADD CONSTRAINT `ShoppingCart_customers_CustomerID_fk` FOREIGN KEY (`CustomerID`) REFERENCES `customers` (`ID`),
  ADD CONSTRAINT `shoppingcart_products_ProductID_fk` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ID`);

--Auto_Increments nullázás:
-- ALTER TABLE tablename AUTO_INCREMENT = 0;
-- INSERT INTO:
INSERT INTO products (ProductName, Description, Price, Quantityinstock, Specifications, Images) VALUES 
( 'Geforce RTX 4070ti 12GB Videókártya', '12GB GDDR6X memóriával, 2 darab HDMI kimenettel, 3 darab DisplayPort kimenettel ellátva', '150.000', 3, 'GPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/4070ti.jpg?raw=true'),
( 'Geforce RTX 3060 8GB Videókártya', '8GB GDDR6 memóriával, 2 darab HDMI kimenettel, 2 darab DisplayPort kimenettel ellátva', '130.000', 2, 'GPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/3060.jpg?raw=true'),
( 'Gigabyte RX 7800 XT GAMING OC 16GB Videókártya', 'Gaming videókártya, 16GB GDDR6 memóriával, 2 darab HDMI kimenettel, 2 darab DisplayPort kimenettel ellátva', '280.000', 1, 'GPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/7800XT.jpg?raw=true'),
( 'ASUS TUF-RX7900XT-O20G-GAMING Radeon RX 7900 XT Videókártya', '20GB GDDR6 memóriával, 1 darab HDMI kimenettel, 3 darab DisplayPort kimenettel ellátva', '450.000', 2, 'GPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/7900XT.jpg?raw=true'),
('Intel I9 gen14 Processzor', '14. generációs 24 magos processzor, DDR4/DDR5 támogatással', '280.000', 4, 'CPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/i9gen14.jpg?raw=true'),
('Intel I7 gen14 Processzor', '14. generációs 12 magos processzor, DDR4/DDR5 támogatással', '200.000', 1, 'CPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/i7gen14.jpg?raw=true'),
('Intel I5 gen14 Processzor', '14. generációs 14 magos processzor, DDR4/DDR5 támogatással', '140.000', 3, 'CPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/i5gen14.jpg?raw=true'),
('Intel I3 gen10 Processzor', '10. generációs 4 magos processzor, DDR4 támogatással', '60.000', 5, 'CPU', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/i3.jpg?raw=true'),
('ASUS TUF GAMING B550-PLUS alaplap', 'AMD AM4 socket, PCI Express 4.0, 2× PCIe x16, 3× PCIe x1, 4×, DDR4, 4600MHz (OC), 6× SATA III, 2× M.2, USB 3.2 Gen 2, USB-C, RJ-45 (LAN) 2,5Gbps, HDMI,', '55.000', 4, 'MOBO', 'https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/B550.jpg?raw=true');
COMMIT;

