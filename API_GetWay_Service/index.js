const express = require('express')
const app = express();


const bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const route = require('./routes')

route(app)


app.listen(7000,()=>{
    console.log('app listen port 7000');
})