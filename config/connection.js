const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_DATABASE_PASSWORD', // update with your database password, or leave empty
    database: 'YOUR_DATABASE_NAME' // update this to reflect your database
});

connection.connect(function(err) {
    if (err) throw err;
    //console.log('MySQL Connected!');
});

module.exports = connection;
