const express = require('express')
const Route = express.Router()
const { authorization } = require('../middleware/auth')
const { authentication } = require('../middleware/authen')

const genreController = require('../controllers/genre')
Route


.get('/genre/detail/:id', authorization, authentication, genreController.getGenreById)
//authentication di get ku hilangin sementara untuk redux
.get('/genre', genreController.getGenre)
    .post('/genre', authorization, authentication, genreController.postGenre)
    .put('/genre/:id', authorization, authentication, genreController.putGenre)
    .delete('/genre/:id', authorization, authentication, genreController.deleteGenre)


module.exports = Route