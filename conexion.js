const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root" ,
    password : "",
    database : "apirest"
});

mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
    }else {
        console.log('Conectado a BD');
    }
});

module.exports = mysqlConnection;