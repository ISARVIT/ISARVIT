CREATE DATABASE `mydb` IF NOT EXISTS;

CREATE TABLE `users` IF NOT EXISTS(
    ID INT NOT NULL,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Username VARCHAR(255),
    Password VARCHAR(255),
    
    PRIMARY KEY(ID)
);

