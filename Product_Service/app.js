const express = require('express');
const app = express()

const bodyParser = require('body-parser')


const route = require('./routes')

const db = require('./config/db')


const port = 7002

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

db.connect()

app.use('/',route)

// app.use('/',(req,res,next)=>{
//     res.json("hello from product service")
// })



app.listen(port,()=>{
    console.log("app listen port 7002")
})