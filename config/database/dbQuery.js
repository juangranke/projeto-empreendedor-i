const mysql = require('mysql2/promise')

module.exports = async (dbConfig, sql, params = []) => {
    try {
        console.log(5, dbConfig)
        let connection = await mysql.createConnection(dbConfig)
        const [rows, fields] = await connection.query(sql, params)
        await connection.end()
        return rows
    } catch(err) {
        return err
    }
}


