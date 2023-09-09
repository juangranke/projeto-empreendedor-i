UPDATE agenda
SET	status_agenda = 4, observacoes = null, id_usuario = null
WHERE
	id_agenda = ?
;