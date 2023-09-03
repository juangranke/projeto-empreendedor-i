UPDATE agenda
SET	status_agenda = 6, observacoes = null, id_usuario = null
WHERE
	id_agenda = ?
;