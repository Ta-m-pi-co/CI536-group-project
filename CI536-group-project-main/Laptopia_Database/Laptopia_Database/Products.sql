CREATE TABLE [dbo].[Products]
(
	[ProductId] INT NOT NULL PRIMARY KEY, 
    [Stock] INT NOT NULL, 
    [ProductName] varchar(30) NOT NULL, 
    [Description] varchar(100) NOT NULL, 
    [ImageSrc] varchar(200) NOT NULL, 
    [ProductPrice] DECIMAL(15, 2) NOT NULL
)
