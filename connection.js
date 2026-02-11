import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'allen_api'
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err)
        return
    }
})

export default connection