const express = require('express')
const Route = express.Router()
const { authorization } = require('../middleware/auth')
const { authentication } = require('../middleware/authen')
const midd = require('../middleware/Caching')


const borrowController = require('../controllers/borrow')
Route


    .get('/user', authorization,midd.getUserBorrow, borrowController.getUserBorrow)
    .get('/list', authorization, authentication,midd.getAllBorrow,borrowController.getBorrow)
  
    .post('/user/:id', authorization, borrowController.addBorrow)
    // .put('/:id', authorization, authentication, genreController.putGenre)
    .put('/:id', authorization, borrowController.returnBook)


module.exports = Route