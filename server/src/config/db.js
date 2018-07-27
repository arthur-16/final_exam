import mysql from 'mysql';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'innovatebham',
    database: 'final_exam'
});

connection.connect()

export default connection;