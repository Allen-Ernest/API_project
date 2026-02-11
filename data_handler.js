import connection from "./connection.js";
import express from "express"
var handler = express()

handler.use(express.json())

handler.post('/data', (req, res) => {
    console.log(req.body)
    let data = req.body
    const product_name = data.product_name
    const price = data.price
    const quantity = data.quantity

    connection.query('INSERT INTO products (product_name, price, quantity) VALUES (?, ?, ?)', [product_name, price, quantity], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error inserting data into database')
        } else {
            res.status(200).send('Data inserted successfully')
        }
})})

handler.get('/data', (req, res) => {
    console.log("Received request to retrieve data")
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error retrieving data from database')
        } else {
            res.status(200).json(results)
        }
    })
})

//update data
handler.put('/data/:id', (req, res) => {
    const id = req.params.id
    const { product_name, price, quantity } = req.body
    console.log("Received request to update data with id:", id)
    connection.query('UPDATE products SET product_name = ?, price = ?, quantity = ? WHERE id = ?', [product_name, price, quantity, id], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error updating data in database')
        } else {
            res.status(200).send('Data updated successfully')
        }
    })
})

//delete data
handler.delete('/data/:id', (req, res) => {
    const id = req.params.id
    console.log("Received request to delete data with id:", id)
    connection.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error deleting data from database')
        } else {
            res.status(200).send('Data deleted successfully')
        }
    })
})

export default handler
