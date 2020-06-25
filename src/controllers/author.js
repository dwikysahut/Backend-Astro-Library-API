const dataModels = require('../models/data')
const bookModels = require('../models/books')
const helper = require('../helpers')
const express = require('express')

module.exports = {
    getAuthor: async function(request, response) {
        try {

            const result = await dataModels.getData('author')
            return helper.response(response, 200, result)

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },
    getAuthorById: async function(request, response) {


        try {



            const id = request.params.id
           
            const result = await dataModels.getDataById('author',id)

            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    postAuthor: async function(request, response) {
        try {
            const addData = request.body
            const result = await dataModels.postData('author', addData)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    putAuthor: async function(request, response) {

        try {
            const setData = request.body
            const id = request.params.id
            const result = await dataModels.putData('author', setData, id)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    deleteAuthor: async function(request, response) {
        try {
            const id = request.params.id
            const check= await bookModels.getBookByAuthor(id)
            if(check===undefined){
               
                const result = await dataModels.deleteData('author', id)
                return helper.response(response, 200, result)
            }
         

           else{
            return helper.response(response, 500, {message:"Delete failed, data have relations with Books"})}

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },



}