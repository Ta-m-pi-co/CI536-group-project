CREATE TABLE [dbo].[Orders]
(
	[OrderId] INT NOT NULL PRIMARY KEY,
	[UserId] INT NOT NULL,
	[Refund] BIT NULL, 
    [DateOfOrder] DATE NOT NULL, 
    [DateOfReturn] DATE NULL, 
    [OrderPrice] DECIMAL(15, 2) NOT NULL, 
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
)
