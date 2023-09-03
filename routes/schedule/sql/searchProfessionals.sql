SELECT DISTINCT
	med.nome_medico,
    med.id_medico,
    med.id_especialidade,
    med.crm,
	DATE_FORMAT(age.data, '%Y-%m-%d') AS data,
    DATE_FORMAT(age.horario, '%H:%i') AS horario
FROM
    agenda age,
    medicos med
WHERE
	age.data > DATE_FORMAT(NOW(), '%Y-%m-%d')
    AND age.id_medico IS NOT NULL
    AND age.status_agenda = 4
    
    AND age.id_medico = med.id_medico
    
    AND age.tipo_agenda = ?
    AND med.id_especialidade = ?
ORDER BY
	nome_medico ASC,
	data ASC,
    horario ASC
LIMIT 1;