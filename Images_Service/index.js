const express = require('express')
const app = express();
const path = require('path')

const bodyParser = require('body-parser')


// static file
app.use("/",express.static(path.join(__dirname, 'uploads')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const route = require('./routes')

route(app)


app.listen(7003,()=>{
    console.log('app listen port 7003');
})