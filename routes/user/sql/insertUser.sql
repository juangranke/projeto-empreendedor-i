INSERT INTO
    USUARIOS
(
    nome_completo,
    data_nascimento,
    email,
    password,
    permissao,
    data_criacao,
    data_edicao
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