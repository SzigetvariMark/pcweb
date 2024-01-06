CREATE TABLE `customers` (
  `CustomerID` int(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `UserName` varchar(250) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PasswordHash` binary(64) NOT NULL,
  `PhoneNum` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `orders` (
    `OrderID` int(20) NOT NULL,
    `OrderCustomerID` int(20) DEFAULT NULL,
    `OrderProductID` int(20) DEFAULT NULL,
    `Quantity` int(2) DEFAULT NULL,
    `OrderDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `TotalCost` varchar(250) NOT NULL,
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `payments` (
  `PaymentID` int(11) NOT NULL,
  `OrderIDFk` int(20) DEFAULT NULL,
  `PaymentMethod` varchar(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `products` (
  `ProductID` int(20) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
)