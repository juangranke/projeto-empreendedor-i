CREATE DATABASE projetoempreendedor;
USE projetoempreendedor;

CREATE TABLE PERMISSOES (
	id INT AUTO_INCREMENT PRIMARY KEY,
    permissao VARCHAR(20) NOT NULL
);
INSERT INTO PERMISSOES (permissao) VALUES ('admin');
INSERT INTO PERMISSOES (permissao) VALUES ('medico');
INSERT INTO PERMISSOES (permissao) VALUES ('paciente');

CREATE TABLE USUARIOS (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome_completo VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    permissao INT NOT NULL,
    esconder CHAR(1) NOT NULL DEFAULT 0,
    criado_em DATETIME NOT NULL,
    atualizado_em DATETIME NOT NULL,
    FOREIGN KEY (permissao) REFERENCES PERMISSOES(id)
);
INSERT INTO USUARIOS (nome_completo, data_nascimento, email, password, permissao, criado_em, atualizado_em) VALUES
('Usuario Teste', STR_TO_DATE('08/20/1998', '%m/%d/%Y'), 'usuarioteste@gmail.com', '$2b$10$/Sb2Yr4mD3qOuQvDTIVBrOygTUJHuB2pheqZ/5gc03br00DbgPxGG', 3, SYSDATE(), SYSDATE());