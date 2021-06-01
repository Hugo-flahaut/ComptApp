const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

const dbpath = "./db/";
const dbname = "main.db";

let db = new sqlite3.Database(dbpath + dbname, sqlite3.OPEN_READWRITE, err =>{
    if (err)
        throw err 

    console.log('Database started on ' + dbname)
}); 

db.close(err => {
    if (err)
        throw err

    console.log('Database.closed')
});

// Middleware
app.use(express.json());

// GET REQUEST
app.get('/invoices', (req, res) => {
    res.status(200).json(invoices)
});

// GET REQUEST for 1 object
app.get('/invoices/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const invoice = invoices.find(invoice => invoice.id === id)
    res.status(200).json(invoice)
});

// POST REQUEST
app.post('/invoices', (req,res) => {
    invoices.push(req.body)
    res.status(200).json(invoices)
});

// PUT REQUEST
app.put('/invoices/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let invoice = invoices.find(invoice => invoice.id === id)
    invoice.name =req.body.name,
    invoice.city =req.body.city,
    invoice.type =req.body.type,
    res.status(200).json(invoice)
});

// DELETE REQUEST
app.delete('/invoices/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let invoice = invoices.find(invoice => invoice.id === id)
    invoices.splice(invoices.indexOf(invoice),1)
    res.status(200).json(invoices)
});

app.listen(8000, () => {
    console.log('Serveur à l\'écoute')
});