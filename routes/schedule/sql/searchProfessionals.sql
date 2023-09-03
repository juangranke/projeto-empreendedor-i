SELECT DISTINCT
	med.nome_medico,
    med.id_medico,
    med.especialidade,
    med.crm,
	age.data,
    age.horario
FROM
    agenda age,
    medicos med
WHERE
	age.data > DATE_FORMAT(NOW(), '%Y-%m-%d')
    AND age.id_medico IS NOT NULL
    AND age.status_agenda = 4
    
    AND age.id_medico = med.id_medico
    
    AND age.tipo_agenda = ?
    AND UPPER(TRIM(med.especialidade)) = UPPER(TRIM(?))
ORDER BY
	nome_medico ASC,
	data ASC,
    horario ASC
LIMIT 1;