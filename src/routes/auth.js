const express = require('express')
const Route = express.Router()

const { authorization } = require('../middleware/auth')

const { authorizationRefreshtoken } = require('../middleware/auth')
const { authentication } = require('../middleware/authen')
const authController = require('../controllers/auth')

Route

// .put('/admin', authController.postAdmin)
    .post('/register', authController.postUser)
    .post('/token', authorizationRefreshtoken,authController.getToken)
    .post('/login', authController.postLogin)
    .get('/user', authorization, authentication, authController.getUser)
    .get('/user/all', authorization, authentication, authController.getUserByRole)
  
    .put('/user/:id', authorization, authController.putUser)
    .delete('/logout', authController.deleteToken)
    .delete('/user/delete/:id',authorization,authentication, authController.deleteUser)


module.exports = Route