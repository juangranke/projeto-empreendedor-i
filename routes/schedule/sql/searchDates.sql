SELECT
	age.id_agenda AS id_agenda,
    DATE_FORMAT(age.data, '%Y-%m-%d') AS data,
    DATE_FORMAT(age.horario, '%H:%i') AS horario
FROM
	agenda age,
    medicos med
WHERE
	age.status_agenda = 4
    AND age.tipo_agenda = ?
    AND age.id_medico IS NOT NULL
    AND age.id_medico = ?
    AND age.data > sysdate()
    
    AND age.id_medico = med.id_medico
    
    AND med.id_especialidade = ?
ORDER BY
	age.data ASC,
    age.horario ASC;