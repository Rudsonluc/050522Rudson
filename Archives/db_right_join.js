var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aluno01"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS users, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log(result);
    });
});