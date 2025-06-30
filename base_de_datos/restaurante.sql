CREATE DATABASE restaurante;

USE restaurante;

CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    fecha DATE,
    hora TIME,
    personas INT
);

Select * from reservas