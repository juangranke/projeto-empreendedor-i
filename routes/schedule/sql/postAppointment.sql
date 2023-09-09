UPDATE
	agenda
SET status_agenda = 1, id_usuario = ?, observacoes = ?
WHERE
	id_agenda = ?
	AND status_agenda = 4;