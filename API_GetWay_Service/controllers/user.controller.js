
const axios = require('axios')

const userCotroller = {

    //[POST]/register

    register:async(req,res)=>{
        // res.json('hello')
        let data = req.body.data
        let my_response ;
        await axios.post('http://localhost:7001/register', {
            data
          })
          .then(function (response) {
            // res.json(response)
            console.log( response);
      
            my_response = response.data
          })
          .catch(function (error) {
            console.log(error);
          });
        // console.log('hello');
        console.log(req.body);
        
        res.send(my_response)
    
        // res.status(200).json('hello')
        // res.send('hello')
    },

    //[POST]/login
    login:async(req,res,next)=>{
        let data = req.body.data
        console.log("data-client : ")
        console.log(data);
        let my_response ;
        await axios.post('http://localhost:7001/login', {
            data
          })
          .then(function (response) {
            // res.json(response)
            console.log("data-user-service : ");
            console.log(response);
      
            my_response = response.data

            
          })
          .catch(function (error) {
            console.log(error);
          });
        // console.log('hello');
        console.log(req.body);
        
        res.send(my_response)
    
    }


}

module.exports = userCotroller