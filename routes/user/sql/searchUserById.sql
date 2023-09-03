SELECT
    id,
    nome_completo,
    data_nascimento,
    email,
    permissao,
    esconder
FROM
    usuarios
WHERE
    id = ?
;