const borrowModels = require('../models/borrow')
const helper = require('../helpers')
const express = require('express')
const jwt = require('jsonwebtoken')
const bookModels = require('../models/books')

module.exports = {
    getBorrow: async function(request, response) {
        try {
            const result = await borrowModels.getBorrow()
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    getUserBorrow: async function(request, response) {
        try {
            var user_id = 0
            if(request.token.result.id===undefined){
                user_id = request.token.result.result.id
              
         }
         else {
            user_id = request.token.result.id
    
         }
         
            console.log(user_id)
            const result = await borrowModels.getUserBorrow(user_id)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    addBorrow: async function(request, response) {
        var user_id = 0
         
         
        try {
            if(request.token.result.id===undefined){
                user_id = request.token.result.result.id
              
         }
         else {
            user_id = request.token.result.id
    
         }
         console.log("asdass"+request.token.result)
          
            const book_id = request.params.id
              const check=await bookModels.getBookById(book_id)
            if(check.status==="Unavailable"){
                return helper.response(response, 500, { message: "Book is Unavailable" })

 
            }
            console.log("asdass"+request.token.result.id)
            const result = await borrowModels.addBorrow(user_id, book_id)
            const data = await borrowModels.getDataBorrowById(result.id)

            await borrowModels.borrowedBook(book_id)
            return helper.response(response, 200, { message: "Book succesfully added to borrow list succesfull", data })


                //sebelum dirubah untuk redux react native
                // const result = await borrowModels.addBorrow(user_id, book_id)               

            // await borrowModels.borrowedBook(book_id)
            // return helper.response(response, 200, { message: "Book succesfully added to borrow list succesfull", result })





        } catch (error) {
            console.log("error kenapa sih")
            console.log(error)
            return helper.response(response, 500, { message: "Book Failed to added to borrow list succesfull" })

        }

    },
    putBorrow: async function(request, response) {

        try {
            const setData = request.body
            const id = request.params.id
            const result = await borrowModels.putBorrow(setData, id)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    returnBook: async function(request, response) {
        try {
            const borrow = request.params.id
            const setData=request.body.status
            const status={status:'Returned'}
            const bookReturn=await borrowModels.getbBorrowById(borrow)
             id_book = bookReturn.id_book
  
            if(id_book===undefined){
                return helper.response(response, 500, {message: "data not found"})
            }
            console.log(bookReturn.id_book)
            const result = await borrowModels.putBorrow(status,borrow)
            await borrowModels.returnBook(bookReturn.id_book)
         const data=   await borrowModels.getDataBorrowById(result.id)
            return helper.response(response, 200,data)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },



}