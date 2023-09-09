SELECT DISTINCT
	age.id_agenda AS id_agenda,
    DATE_FORMAT(age.data, '%Y-%m-%d') AS data,
    DATE_FORMAT(age.horario, '%H:%i') AS horario,
    tpage.desc_tipo_agenda,
    med.nome_medico,
    med.crm,
    esp.desc_especialidade
FROM
	agenda age,
    tipo_agenda tpage,
    medicos med,
    especialidades esp
WHERE
	age.id_usuario IS NOT NULL
    AND age.status_agenda = ?
    AND age.tipo_agenda = ?
    AND age.id_usuario = ?
    
    AND age.tipo_agenda = tpage.id_tipo_agenda
    AND age.id_medico = med.id_medico
    AND med.id_especialidade = esp.id
ORDER BY
    data ASC,
    horario ASC;