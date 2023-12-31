CREATE TABLE `customers` (
  `ID` int(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PasswordHash` binary(64) NOT NULL
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
  `ID` int(11) NOT NULL,
  `OrderID` int(20) DEFAULT NULL,
  `PaymentMethod` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `products` (
  `ID` int(20) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Price` varchar(10) DEFAULT NULL,
  `Quantity in stock` int(3) NOT NULL,
  `Specifications` varchar(250) NOT NULL COMMENT 'CPU, GPU etc..',
  `Images` char(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `reviews` (
 `ID` int(11) NOT NULL,
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
  ADD UNIQUE KEY `Products_pk2` (`ProductName`);

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
COMMIT;