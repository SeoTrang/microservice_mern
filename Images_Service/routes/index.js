const express = require('express')
const cors = require('cors')

const user =require('./user')
const admin = require('./admin')

// const user = require('')

const route = (app)=>{
    app.use('/',cors(),user);
    app.use('/admin',cors(),admin)
}

module.exports = route