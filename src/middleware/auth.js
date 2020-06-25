const jwt = require('jsonwebtoken')
const helper = require('../helpers')
require('dotenv').config()

module.exports = {
    authorization: function(request, response, next) {

        const token = request.headers.authorization
        jwt.verify(token, process.env.SECRET_KEY, function(error, result) { 
            if (error && error.name === "TokenExpiredError" || error && error.name === "JsonWebTokenError") {
                return helper.response(response, 401, { message: error.name })
            } else {
                request.token = result
                console.log("ini author")


                next()
            }
        })
    } ,
    
    authorizationRefreshtoken: function(request, response, next) {
        const token = request.body.token
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, function (error, result) {
            if (error && error.name === "TokenExpiredError" || error && error.name === "JsonWebTokenError") {
                helper.response(response, 401, {message: error.name})
            } else {
                  request.token = result
                  console.log("ini refresh")

                next()
            }
        })
    }
}