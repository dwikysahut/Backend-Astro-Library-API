const express = require('express')
const Route = express.Router()

const { authorization } = require('../middleware/auth')
const { authentication } = require('../middleware/authen')
const booksController = require('../controllers/books')

const path = require('path');
const uploadImage = require('../helpers/imageUpload')


Route
//authorization book dihilangkan dlu
    .get('/',  booksController.getBooks) // main route for get data books
    .get('/detail/:id',authorization, booksController.getBookById)
    .get('/detail/item/:id',authorization, booksController.getDetailBook)
   
    .post('/', authorization, authentication, uploadImage, booksController.postBook)
    //AUNTHENTICATION DI PUT DIHILANGKAN UNTUK BORROW
    .put('/edit/:id', authorization, uploadImage, booksController.putBook)
    .delete('/:id', authorization, authentication, booksController.deleteBook)
    // //search
    .get('/search/title', authorization, booksController.getSearchBook)
    //sort
    .get('/sort', authorization, booksController.getSortBook)
    .get('/pagination', authorization, booksController.getBooksPagination)


module.exports = Route