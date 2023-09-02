SELECT DISTINCT
	med.especialidade
FROM
	agenda age,
    medicos med
WHERE
	age.data > DATE_FORMAT(NOW(), '%Y-%m-%d')
    AND age.id_medico IS NOT NULL
    AND age.status_agenda = 4
    
    AND age.id_medico = med.id_medico
ORDER BY
	med.especialidade ASC;