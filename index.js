import express from 'express'
import routes from './routes.js'
var app = express()

app.use('/', routes)

app.listen(3000, function() {
    console.log('API listening on port 3000!')
})