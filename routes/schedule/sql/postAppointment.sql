UPDATE
	agenda
SET status_agenda = 1, id_usuario = ?
WHERE
	id_agenda = ?
    AND tipo_agenda = ?;