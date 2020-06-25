const express = require('express')
const Route = express.Router()
const { authorization } = require('../middleware/auth')
const { authentication } = require('../middleware/authen')

const borrowController = require('../controllers/borrow')
Route


    .get('/user', authorization, borrowController.getUserBorrow)
    .get('/list', authorization, authentication,borrowController.getBorrow)
  
    .post('/user/:id', authorization, borrowController.addBorrow)
    // .put('/:id', authorization, authentication, genreController.putGenre)
    .put('/:id', authorization, borrowController.returnBook)


module.exports = Route