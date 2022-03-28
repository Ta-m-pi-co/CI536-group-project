CREATE TABLE [dbo].[OrderContents]
(
	[OrderId] INT NOT NULL,
	[ProductId] INT NOT NULL,
	[Amount] INT NOT NULL, 
    [Refund] BIT NULL, 
	[DateOfReturn] DATE NULL, 
    [TotalPrice] DECIMAL(15, 2) NOT NULL,
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
	FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
)
