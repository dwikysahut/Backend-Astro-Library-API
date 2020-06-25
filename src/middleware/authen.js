const jwt = require('jsonwebtoken')
const helper = require('../helpers')
require('dotenv').config()

module.exports = {
    authentication: function(request, response, next) {
        const token = request.headers.authorization
        jwt.verify(token, process.env.SECRET_KEY, function(error, result) {
            var  role =0;
            if(request.token.result.role===undefined){
                   role = request.token.result.result.role
                 console.log(request.token.result.result.role)
            }
            else {
                 role = request.token.result.role
       
            }
            
            if (role == 1) {
                console.log("ini authen")

                
                //admin
                next()
            } else if (role == 2) {
                return helper.response(response, 401, { message: "You're Not Admin.." })


            }
            else{
                return helper.response(response, 500, error)

            }
        
        })



    }
}