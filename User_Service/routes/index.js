
const cors = require('cors')

const user =require('./user')

// const user = require('')

const route = (app)=>{
    app.use('/',cors(),user)
}

module.exports = route
