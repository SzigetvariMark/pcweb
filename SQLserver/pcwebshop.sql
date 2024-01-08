CREATE TABLE `customers` (
  `ID` int(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `UserName` varchar(250) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PasswordHash` binary(64) NOT NULL,
  `PhoneNum` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `orders` (
    `ID` int(20) NOT NULL,
    `CustomerID` int(20) DEFAULT NULL,
    `ProductID` int(20) DEFAULT NULL,
    `Quantity` int(2) DEFAULT NULL,
    `OrderDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `TotalCost` varchar(250) NOT NULL,
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `payments` (
  `ID` int(11) NOT NULL,
  `OrderID` int(20) DEFAULT NULL,
  `PaymentMethod` varchar(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `products` (
  `ID` int(20) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Price` varchar(10) DEFAULT NULL,
  `Quantity in stock` int(3) NOT NULL,
  `Manufacturer` varchar(40) NOT NULL,
  `Specifications` varchar(250) NOT NULL COMMENT 'CPU, GPU etc..',
  `Images` blob NOT NULL
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
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `Orders_customers_CustomerID_fk` (`OrderCustomerID`),
  ADD KEY `orders_products_ProductID_fk` (`OrderProductID`);

ALTER TABLE `payments`
  ADD PRIMARY KEY (`PaymentID`),
  ADD KEY `Payments_orders_OrderID_fk` (`OrderIDFk`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD UNIQUE KEY `Products_pk2` (`ProductName`);

ALTER TABLE `reviews`
  ADD PRIMARY KEY (`ReviewID`),
  ADD KEY `Reviews_customers_CustomerID_fk` (`ReviewCustomerID`),
  ADD KEY `Reviews_products_ProductID_fk` (`ReviewProductID`);

ALTER TABLE `shoppingcart`
  ADD KEY `ShoppingCart_customers_CustomerID_fk` (`CartCustomerID`),
  ADD KEY `shoppingcart_products_ProductID_fk` (`CartProductID`);

ALTER TABLE `customers`
  MODIFY `CustomerID` int(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `orders`
  MODIFY `OrderID` int(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE `payments`
  MODIFY `PaymentID` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `products`
  MODIFY `ProductID` int(20) NOT NULL AUTO_INCREMENT;  

ALTER TABLE `orders`
  ADD CONSTRAINT `Orders_customers_CustomerID_fk` FOREIGN KEY (`OrderCustomerID`) REFERENCES `customers` (`CustomerID`),
  ADD CONSTRAINT `orders_products_ProductID_fk` FOREIGN KEY (`OrderProductID`) REFERENCES `products` (`ProductID`);

ALTER TABLE `payments`
  ADD CONSTRAINT `Payments_orders_OrderID_fk` FOREIGN KEY (`OrderIDFk`) REFERENCES `orders` (`OrderID`);

ALTER TABLE `reviews`
  ADD CONSTRAINT `Reviews_customers_CustomerID_fk` FOREIGN KEY (`ReviewCustomerID`) REFERENCES `customers` (`CustomerID`),
  ADD CONSTRAINT `Reviews_products_ProductID_fk` FOREIGN KEY (`ReviewProductID`) REFERENCES `products` (`ProductID`);

ALTER TABLE `shoppingcart`
  ADD CONSTRAINT `ShoppingCart_customers_CustomerID_fk` FOREIGN KEY (`CartCustomerID`) REFERENCES `customers` (`CustomerID`),
  ADD CONSTRAINT `shoppingcart_products_ProductID_fk` FOREIGN KEY (`CartProductID`) REFERENCES `products` (`ProductID`);
COMMIT;