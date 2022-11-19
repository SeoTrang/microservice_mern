const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/user_service');
        console.log('mongodb connected!');
    } catch (error) {
        console.log('mongodb not connected!!');
        console.log(error);
    }
}


module.exports = {connect};