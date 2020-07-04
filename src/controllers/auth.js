const authModel = require('../models/auth')
const borrowModel = require('../models/borrow')
const helper = require('../helpers')
const jwt = require('jsonwebtoken')
const md5 = require('md5');
require('dotenv').config()
const refreshTokens = []
module.exports = {

    getUser: async function(request, response) {
        try {
            const result = await authModel.getUser()

            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    getUserByRole: async function(request, response) {
        try {
            const role=2
            const result = await authModel.getUserByRole(role)

            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    postUser: async function(request, response) {
        try {


            const setData = request.body
            if(setData.role===undefined){
           
                return helper.response(response, 500, {message:"data cannot null"})

            }
            const emailExist = await authModel.getUserbyEmail(setData)
            console.log(emailExist)
            if (emailExist === undefined) {
              
                setData.password = md5(request.body.password)
                const result = await authModel.postUser(setData)
                return helper.response(response, 200, result)


            }
            return helper.response(response, 400, { meessage: "email has taken" })
        } catch (error) {
            console.log(errors)
            return helper.response(response, 500, error)

        }

    },
    postLogin: async function(request, response) {
        try {
            const getData = request.body
            getData.password = md5(request.body.password)
            const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
            //  const refreshTokens = [];

            console.log(getData.password)
        
            const result = await authModel.postLogin(getData)
            // console.log(result)
            if (result === undefined) {
                return helper.response(response, 204, { message: "Username or password is incorrect" })

            } else {
                //token structure: header,payload,verify signature
                const token = jwt.sign({ result }, process.env.SECRET_KEY, { expiresIn: '1d' })
                const refreshToken = jwt.sign({ result }, refreshTokenSecret,{ expiresIn: '20h'})
                const newData = {
                    ...result,
                    token,
                    refreshToken
                }
                delete newData.password
                refreshTokens.push(refreshToken);

                helper.response(response, 200, newData)
            }

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },

    getToken: async function(request, response) {


        try {
            const token = request.body.token
            console.log(refreshTokens)

            if (!token) {
                return helper.response(response, 401, { message: "Unauthorization" })
            }
            if (!refreshTokens.includes(token)) {
                return helper.response(response, 403, { message: "Token Null, Please Login" })
            }
            jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, function(error, result) {

                if (error && error.name === "TokenExpiredError" || error && error.name === "JsonWebTokenError") {
                    return helper.response(response, 403, { message: error.name })
                } else {

                    const token = jwt.sign({ result }, process.env.SECRET_KEY, { expiresIn: '2d' })

                    return helper.response(response, 200, { token })



                }
            })


        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    putUser: async function(request, response) {


        try {
            const setData = request.body
            setData.password = md5(request.body.password)

            const id = request.params.id
            const result = await authModel.putUser(setData, id)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    deleteUser: async function(request, response) {
        try {
            const id = request.params.id
            const check= await borrowModel.getbBorrowByUser(id)
            if(!check){
                const result = await authModel.deleteUser(id)

                return helper.response(response, 200, result)
            }
            else{
                return helper.response(response, 500, {message:" Delete failed,data have relations with Borrow list"})}
            
        

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },
    deleteToken: async function(request, response) {
        try {
             refreshTokens.filter(token =>token !== request.body)
          
           response.send("logout Successfully")

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    }
}






























// const user = await authModel.getUserbyEmail(getData.email)
// console.log(result)
// const passUser = user[0]
// } else {
//     if (getData.password !== passUser.password) {

//         helper.response(response, 401, { message: "Username or password is incorrect" })