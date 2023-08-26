CREATE DATABASE sisc;
USE sisc;

CREATE TABLE PERMISSIONS (
	id INT AUTO_INCREMENT PRIMARY KEY,
    permission VARCHAR(20) NOT NULL
);
INSERT INTO PERMISSIONS (permission) VALUES ('admin');
INSERT INTO PERMISSIONS (permission) VALUES ('medico');
INSERT INTO PERMISSIONS (permission) VALUES ('paciente');

CREATE TABLE USERS (
	id INT AUTO_INCREMENT PRIMARY KEY,
	full_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    permission INT NOT NULL,
    hide CHAR(1) NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (permission) REFERENCES PERMISSIONS(id)
);
INSERT INTO USERS (full_name, birth_date, email, password, permission, created_at, updated_at) VALUES
('Usuario Teste', STR_TO_DATE('08/20/1998', '%m/%d/%Y'), 'usuarioteste@gmail.com', '$2b$10$/Sb2Yr4mD3qOuQvDTIVBrOygTUJHuB2pheqZ/5gc03br00DbgPxGG', 3, SYSDATE(), SYSDATE());
-- Senha: 12345