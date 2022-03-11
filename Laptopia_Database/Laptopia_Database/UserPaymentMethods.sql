CREATE TABLE [dbo].[UserPaymentMethods]
(
	[PaymentMethodId] INT NOT NULL PRIMARY KEY,
	[UserId] INT NOT NULL,
	[CardNum] INT NOT NULL, 
    [ExpDate] DATE NOT NULL, 
    [CVV] INT NOT NULL, 
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
)
