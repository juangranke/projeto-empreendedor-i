SELECT
    6 AS id_especialidade,
    id,
    cod_procedimento,
    desc_procedimento
FROM
    procedimentos
ORDER BY
    desc_procedimento ASC;