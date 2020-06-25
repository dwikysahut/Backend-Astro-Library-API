const express = require('express')
const Route = express.Router()
const { authorization } = require('../middleware/auth')
const { authentication } = require('../middleware/authen')

const authorController = require('../controllers/author')
Route


.get('/author/detail/:id', authorization, authentication, authorController.getAuthorById)
//authentication di get ku hilangin sementara untuk redux
    .get('/author', authorization, authorController.getAuthor)
    .post('/author', authorization, authentication, authorController.postAuthor)
    .put('/author/:id', authorization, authentication, authorController.putAuthor)
    .delete('/author/:id', authorization, authentication, authorController.deleteAuthor)


module.exports = Route