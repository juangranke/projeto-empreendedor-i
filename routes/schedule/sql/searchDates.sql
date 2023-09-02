SELECT
	id_agenda,
    DATE_FORMAT(data, '%Y-%m-%d') AS data,
    DATE_FORMAT(horario, '%H:%i') AS horario
FROM
	agenda
WHERE
	status_agenda = 4
    AND id_medico IS NOT NULL
    AND id_medico = ?
ORDER BY
	data ASC,
    horario ASC;