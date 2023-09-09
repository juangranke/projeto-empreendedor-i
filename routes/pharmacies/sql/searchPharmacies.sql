SELECT
	est.id_estoque,
    far.nome_farmacia,
    far.cnpj,
    far.endereco,
    est.id_medicamento,
    est.qtd_item_estoque,
    est.valor,
    est.data_validade,
    tpest.desc_tipo_estoque,
    med.nome_medicamento,
    med.fabricante,
    med.principio_ativo,
    med.quantidade_embalagem,
    uni.desc_unidade_medida
FROM
	estoque est,
    farmacia far,
    tipo_estoque tpest,
    medicamento med,
    unidade_medida uni
WHERE
	est.id_farmacia = far.id_farmacia
    AND tpest.id_tipo_estoque = est.id_tipo_estoque
    AND med.id_medicamento = est.id_medicamento
    AND uni.id_unidade_medida = est.id_unidade_medida
ORDER BY
	far.nome_farmacia ASC,
	med.nome_medicamento ASC;