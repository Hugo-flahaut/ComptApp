var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "./db/main.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE invoices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number int,
            date text,
            name text, 
            type text, 
            amount float,
            createdAt date,
            CONSTRAINT number_unique UNIQUE (number)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO invoices (number, name, type, amount) VALUES (?,?,?,?)'
                db.run(insert, [1, "Exemple1", "credit", 25])
                // db.run(insert, ["user","user@example.com",md5("mdpmdp")])
            }
        });  
    }
});

module.exports = db