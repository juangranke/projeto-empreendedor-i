SELECT 
	id_avaliacao,
    DATE_FORMAT(data_avaliacao, '%Y-%m-%d') AS data_avaliacao,
    id_usuario,
    peso,
    altura,
    porcentagem_gordura,
    metabolismo_basal
FROM 
	avaliacao_fisica
WHERE
	id_usuario = ?
ORDER BY
	data_avaliacao DESC;