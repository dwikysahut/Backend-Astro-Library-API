const express = require('express')
const Route = express.Router()
const { authorization } = require('../middleware/auth')
const { authentication } = require('../middleware/authen')

const roleController = require('../controllers/role')
Route


    .get('/role', roleController.getRole)
    .post('/role', authorization, authentication, roleController.postRole)
    .put('/role/:id', authorization, authentication, roleController.putRole)
    .delete('/role/:id', authorization, authentication, roleController.deleteRole)


module.exports = Route