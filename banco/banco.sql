CREATE DATABASE kognit;
GO

USE kognit;
GO

CREATE TABLE Kognit_User(
	id int IDENTITY(1,1) NOT NULL,
    name varchar(200) NOT NULL,
    birthdate datetime NOT NULL,
    cpf varchar(14) NOT NULL,
    Primary Key (id)
    );
GO

CREATE TABLE Kognit_Wallet(
    id int IDENTITY(1,1) primary key, 
    user_id int NOT NULL,
    balance decimal(5,2) NOT NULL, 
    bank varchar(200) NOT NULL, 
    updated datetime NULL,
    Foreign Key (user_id) REFERENCES Kognit_User(id)
    );
GO
