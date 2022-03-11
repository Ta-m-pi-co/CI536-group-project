CREATE TABLE [dbo].[Users]
(
	[UserId] INT NOT NULL PRIMARY KEY,
	[Username] varchar(32) NOT NULL,
	[Password] varchar(64) NOT NULL, 
    [FName] varchar(20) NOT NULL, 
    [LName] varchar(20) NOT NULL, 
    [Email] varchar(30) NOT NULL, 
    [DoB] DATE NOT NULL, 
    [Language] varchar(10) NULL
)