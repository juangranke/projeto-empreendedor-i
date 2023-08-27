SELECT
    id,
    full_name,
    birth_date,
    email,
    permission,
    hide
FROM
    USERS
WHERE
    ID = ?
;