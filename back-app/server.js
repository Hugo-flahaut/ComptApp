// Create express app
var express = require("express")
var app = express()
var db = require("./database")

// Post request parameters
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints

// GET REQUEST
app.get("/api/invoices", (req, res, next) => {
    var sql = "select * from invoices"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// GET REQUEST for 1 object
app.get("/api/invoices/:id", (req, res, next) => {
    var sql = "select * from invoices where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

// POST REQUEST
app.post("/api/invoices/", (req, res, next) => {
    var errors=[]
    if (!req.body.name){
        errors.push("No name specified");
    }
    if (!req.body.type){
        errors.push("No type specified");
    }
    if (!req.body.amount){
        errors.push("No amount specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        number: req.body.number,
        date: req.body.date,
        name: req.body.name,
        type: req.body.type,
        amount: req.body.amount,
        createdAt: req.body.createdAt,
        // password : md5(req.body.password)
    }
    var sql ='INSERT INTO invoices (number, date, name, type, amount) VALUES (?,?,?,?,?)'
    var params =[data.number, data.date, data.name, data.type, data.amount]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});

// PATCH REQUEST
app.patch("/api/invoices/:id", (req, res, next) => {
    var data = {
        number: req.body.number,
        date: req.body.date,
        name: req.body.name,
        type: req.body.type,
        amount: req.body.amount,
        createdAt: req.body.createdAt
        // password : req.body.password ? md5(req.body.password) : null
    }
    // COALESCE include keep current value if there isn't new value
    db.run(
        `UPDATE invoices set 
           number = COALESCE(?,number), 
           date = COALESCE(?,date), 
           name = COALESCE(?,name), 
           type = COALESCE(?,type), 
           amount = COALESCE(?,amount), 
           createdAt = COALESCE(?,createdAt), 
           WHERE id = ?`,
           [data.number, data.date, data.name, data.type, data.amount, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

// // PUT REQUEST
// app.put('/invoices/:id', (req,res) => {
//     const id = parseInt(req.params.id)
//     let invoice = invoices.find(invoice => invoice.id === id)
//     invoice.number = req.body.number,
//     invoice.date = req.body.date,
//     invoice.name = req.body.name,
//     invoice.type = req.body.type,
//     invoice.amount = req.body.amount,
//     invoice.createdAt = req.body.createdAt
//     res.status(200).json(invoice)
// });

// DELETE REQUEST
app.delete("/api/invoices/:id", (req, res, next) => {
    db.run(
        'DELETE FROM invoices WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
