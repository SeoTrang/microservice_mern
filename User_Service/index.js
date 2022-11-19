const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const route = require('./routes')
const dbconnect = require('./config/db')

dbconnect.connect();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



route(app)


app.listen(7001,()=>{
    console.log('app listen port 7001');
})