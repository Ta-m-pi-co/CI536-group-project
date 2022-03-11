CREATE TABLE [dbo].[ProductSpecs]
(
	[SpecsId] INT NOT NULL PRIMARY KEY, 
    [Processor] varchar(100) NULL, 
    [GHz] varchar(20) NULL, 
    [RAM] varchar(20) NULL, 
    [Storage] varchar(100) NULL, 
    [HDD] varchar(100) NULL, 
    [SDD] varchar(100) NULL, 
    [GraphicsCard] varchar(100) NULL, 
    [MotherBoard] varchar(100) NULL,
	[ScreenSize] VARCHAR(30) NULL,
	[ProductId] INT NOT NULL,
	FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
)
