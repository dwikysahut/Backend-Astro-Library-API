const express = require('express')
const Route = express.Router()


const bookRoutes = require('./routes/books')
Route.use('/book', bookRoutes)

const authorRoutes = require('./routes/author')
Route.use('/data', authorRoutes)
const genreRoutes = require('./routes/genre')
Route.use('/data', genreRoutes)

const authRoutes = require('./routes/auth')
Route.use('/auth', authRoutes)

const roleRoutes = require('./routes/role')
Route.use('/user', roleRoutes)


const borrowRoutes = require('./routes/borrow')
Route.use('/book/borrow', borrowRoutes)

module.exports = Route