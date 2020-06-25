const dataModels = require('../models/data')
const bookModels = require('../models/books')
const helper = require('../helpers')
const express = require('express')

module.exports = {
    getGenre: async function(request, response) {
        try {
            const result = await dataModels.getData('genre')
            return helper.response(response, 200, result)

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },
    getGenreById: async function(request, response) {


        try {



            const id = request.params.id
           
            const result = await dataModels.getDataById('genre',id)

            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    postGenre: async function(request, response) {
        try {
            const addData = request.body

            const result = await dataModels.postData('genre', addData)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    putGenre: async function(request, response) {

        try {
            const setData = request.body
            const id = request.params.id
            const result = await dataModels.putData('genre', setData, id)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    deleteGenre: async function(request, response) {
        try {
            const id = request.params.id
          
            const check= await bookModels.getBookByGenre(id)
            if(check===undefined){
               
                const result = await dataModels.deleteData('genre', id)
            return helper.response(response, 200, result)
            }
         
           
           else{
            return helper.response(response, 500, {message:" Delete failed, data have relations with Books"})}

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },



}