INSERT INTO
    USUARIOS
(
    nome_completo, 
    data_nascimento, 
    email, 
    password, 
    permissao, 
    criado_em, 
    atualizado_em
) VALUES
(
    ?,
    ?,
    ?,
    ?,
    ?,
    SYSDATE(),
    SYSDATE()
);