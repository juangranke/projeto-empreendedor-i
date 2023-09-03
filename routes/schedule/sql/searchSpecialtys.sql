SELECT DISTINCT
	esp.id,
    esp.desc_especialidade
FROM
	agenda age,
    medicos med,
    especialidades esp
WHERE
	age.data > DATE_FORMAT(NOW(), '%Y-%m-%d')
    AND age.id_medico IS NOT NULL
    AND age.status_agenda = 4
    AND age.tipo_agenda = ?
    
    AND age.id_medico = med.id_medico
    AND esp.id = med.id_especialidade
ORDER BY
	esp.desc_especialidade ASC;