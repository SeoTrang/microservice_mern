const UserModel = require('../model/users')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const authController = {


    generateAccesstoken:(user)=>{
        return jwt.sign(
            {_id:user._id,admin:user.admin},
            'accesstoken_key',
            {expiresIn:30*5});

    },

    generateRefreshtoken:(user)=>{
        return jwt.sign(
            {_id:user._id,admin:user.admin},
            'refreshtoken_key',
            {expiresIn:60*5});

    },

    refreshtoken_create_new_accesstoken:(refreshtoken)=>{
        return jwt.sign(
            {_id:refreshtoken._id,admin:refreshtoken.admin},
            'accesstoken_key',
            {expiresIn:30});
    }
    ,

    // [POST]/register
    register:async(req,res,next)=>{
        // console.log(req.body.data);

        // res.send('hello from user service')
        try {

            // console.log('den day');
            const salt = await bcrypt.genSalt(10);
            const password_hash = await bcrypt.hash(req.body.data.psw,salt);

            // create a new user
            const user_save = await new UserModel({
                name:req.body.data.name,
                email:req.body.data.email,
                password:password_hash,
                mobilephone:req.body.data.mobilephone
            });
    
            
            user_save.save();
            // console.log(user_save);
            res.json('ok')

        } catch (error) {
            res.json(error);
            console.log(error);
        }
    },

    login:async(req,res,next)=>{
        try {
            
         
            const user = await UserModel.findOne({email:req.body.data.email});

            // if(user){
            //     console.log(user);
            // }
            if(!user){
                return res.json('failed')
            }

        
            const validPassword = await bcrypt.compare(req.body.data.psw,user.password);


           
            if(!validPassword){
                return res.json('failed')
            }

            if(user && validPassword){
                const access_token = await authController.generateAccesstoken(user)
                const refresh_token = await authController.generateRefreshtoken(user)

                user.refreshtoken = refresh_token

                await user.save()

                if(access_token){
                    res.json({
                        accesstoken:access_token,
                        refreshtoken:refresh_token
                    })
                }else {
                    res.json('failed')
                }
            }


            


        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = authController