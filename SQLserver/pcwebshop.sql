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
    )