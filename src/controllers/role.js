const dataModels = require('../models/data')
const helper = require('../helpers')
const express = require('express')

module.exports = {
    getRole: async function(request, response) {
        try {
            const result = await dataModels.getData('role')
            return helper.response(response, 200, result)

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },
    postRole: async function(request, response) {
        try {
            const addData = request.body

            const result = await dataModels.postData('role', addData)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    putRole: async function(request, response) {

        try {
            const setData = request.body
            const id = request.params.id
            const result = await dataModels.putData('role', setData, id)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    deleteRole: async function(request, response) {
        try {
            const id = request.params.id
            const result = await dataModels.deleteData('role', id)
            return helper.response(response, 200, result)

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },



}