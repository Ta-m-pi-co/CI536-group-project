CREATE TABLE [dbo].[UserAddresses]
(
	[AddressId] INT NOT NULL PRIMARY KEY,
	[UserId] INT NOT NULL,
	[Address1] varchar(100) NOT NULL, 
	[Address2] varchar(100) NULL, 
	[City] varchar(100) NOT NULL, 
	[County] varchar(100) NULL, 
	[Country] varchar(100) NOT NULL, 
    [Postcode] varchar(15) NOT NULL, 
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
)
