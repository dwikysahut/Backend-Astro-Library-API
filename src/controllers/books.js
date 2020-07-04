const booksModels = require('../models/books')
const helper = require('../helpers')
const borrowModels = require('../models/borrow')

module.exports = {

    getBooks: async function (request, response) {


        try {

            if (request.query.page === undefined) {//untuk saat tidak dideklarasikan
                request.query.page = 1
            }

            if (request.query.limit === undefined) {
                request.query.limit = 3
            }
            if (request.query.orderBy === undefined) {
                request.query.orderBy = "asc"
            }

            if (request.query.sortBy === undefined) {
                request.query.sortBy = "id"
            }

            if (request.query.title === undefined) {
                request.query.title = ""
            }
            let title
            if (request.query.title) {
                title = request.query.title

            }
            else {
                title = ""
            }
            let resCount

            if (title === undefined) {
            resCount = await booksModels.getCount()

            }
            console.log(resCount)
            if (title !== undefined) {

                resCount = await booksModels.getCountSearch(title)
                console.log("rescont" + resCount)

            }
            let limit              // saat nilai di front end null atau ''
            if (request.query.limit) {
                limit = parseInt(request.query.limit)
            }
            else {
                limit = 3
            }
            var totalPages
            if (resCount === 0) {
                totalPages = 1
            }
            else {
                totalPages = Math.ceil(parseInt(resCount) / parseInt(limit)) // pembulatan keatas, floor pembulatan kebawah
            }
            // if (request.query.page <= 0 || limit <= 0) {
            //     helper.response(response, 500, { message: "limit or page must more than 0" })
            // }
            // if (request.query.page > totalPages) {
            //     request.query.page = totalPages
            // }
            let page
            if (request.query.page) {
                page = parseInt(request.query.page)
            }
            else {
                page = 1
            }
            if (page <= 0 || limit <= 0) {
                helper.response(response, 500, { message: "limit or page must more than 0" })
            }
            if (page > totalPages) {
                page = totalPages
            }

            
            let column
            if (request.query.sortBy) {
                column = request.query.sortBy
            }
            else {
                column = "id"
            }
            let sort
            if (request.query.orderBy) {
                sort = request.query.orderBy

            }
            else {
                sort = "asc"
            }

            const startIndex = (page - 1) * limit
            const itemFound = await booksModels.getCountSearch(title)
            const pagination = {
                totalItem: resCount,
                totalPage: totalPages,
                limit: limit,
                prev_page: page - 1,
                next_page: page + 1,
                page: page,
                itemFound: itemFound,
                sortBy:column,
                orderBy:sort

            }
          
            const result = await booksModels.getSortBook(title, limit, startIndex, column, sort)

            return helper.response(response, 200, result, pagination)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    getBookById: async function (request, response) {


        try {



            const id = request.params.id

            const result = await booksModels.getBookById(id)

            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },

    getDetailBook: async function (request, response) {


        try {



            const id = request.params.id

            const result = await booksModels.getDetailBook(id)

            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },


    postBook: async function (request, response) {

        try {
            const setData = request.body
            setData.image = request.file.filename
            const result = await booksModels.postBook(setData)
            const data = await booksModels.getBookById(result.id)
            return helper.response(response, 200, {result,data})

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, { message: error.name })

        }

    },
    putBook: async function (request, response) {


        try {
            const id = request.params.id

            const book = await booksModels.getBookByIdDelete(id)
            const setData = request.body
            if (request.file) {
                if (request.file.filename === "undefined") {
                    console.log("gambar undefined")
                }
                else {
                    setData.image = request.file.filename
                    try {
                        await booksModels.deleteImageBook(book[0].image)
                            
                        } catch (error) {
                            console.log('no image book file')
                        }
                }
            }
          

          
            const result = await booksModels.putBook(setData, id)
            const data = await booksModels.getBookById(id)
            return helper.response(response, 200, {result,data})

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },
    deleteBook: async function (request, response) {
        try {
            const id = request.params.id
            const book = await booksModels.getBookByIdDelete(id)
             console.log('dassas'+book[0].image)
            console.log(book.image)
            await borrowModels.deleteBorrowByBookId(id)
         
            if (book[0].image === undefined) {
                
              
                const result = await booksModels.deleteBook(id)
                return helper.response(response, 200, result)
            }
            else {
             
         
                helper.deleteFile(book[0])
                try {
                await booksModels.deleteImageBook(book[0].image)
                    
                } catch (error) {
                    console.log('no image book file')
                }

                const result = await booksModels.deleteBook(id)

                return helper.response(response, 200, result)
            }
        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },

    getSearchBook: async function (request, response) {
        try {
            const name = request.query.title

            const result = await booksModels.getSearchBook(name)
            return helper.response(response, 200, result)

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },
    getSortBook: async function (request, response) {



        try {

            const resCount = await booksModels.getCount()
            var totalPages = Math.ceil(resCount / request.query.limit) // pembulatan keatas, floor pembulatan kebawah
            const limit = parseInt(request.query.limit)
            if (request.query.page <= 0 || limit <= 0) {
                helper.response(response, 500, { message: "limit or page must more than 0" })
            }
            if (request.query.page > totalPages) {
                request.query.page = totalPages
            }
            const page = parseInt(request.query.page)
            const startIndex = (page - 1) * limit

            const sort = request.query.orderBy
            const column = request.query.sortBy
            const result = await booksModels.getSortBook(limit, startIndex, column, sort)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },

    getBooksPagination: async function (request, response, next) {
        try {
            const resCount = await booksModels.getCount()
            var totalPages = Math.ceil(resCount / request.query.limit)
            const limit = parseInt(request.query.limit)
            if (request.query.page <= 0 || request.query.limit <= 0) {
                helper.response(response, 500, { message: "limit or page must more than 0" })

            }
            if (request.query.page > totalPages) {
                request.query.page = totalPages
            }
            const page = parseInt(request.query.page)
            const pagination = {
                totalPage: totalPages,
                limit: limit,
                prev_page: page - 1,
                next_page: page + 1,
                page: page,

            }

            const startIndex = (page - 1) * limit

            // console.log(request.query.page)
            const result = await booksModels.getBooksPagination(limit, startIndex)

            return helper.response(response, 200, result, pagination)

        } catch (error) {
            return helper.response(response, 500, error)

        }
    }
}








// const pagination = {
//     totalPage: totalPages,
//     limit: limit,
//     prev page: page - 1,
//     next page: page + 1,
//     page: page,

// }