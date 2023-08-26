INSERT INTO
    USERS
(
    full_name, 
    birth_date, 
    email, 
    password, 
    permission, 
    created_at, 
    updated_at
) VALUES
(
    ?,
    ?,
    ?,
    ?,
    ?,
    SYSDATE(),
    SYSDATE()
);