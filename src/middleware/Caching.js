const redis = require("../config/redisConn").clinet
const helper = require('../helpers')

class Caching {
    getBooks (request,res,next){
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
        let page
        if (request.query.page) {
            page = parseInt(request.query.page)
        }
        else {
            page = 1
        }
        if (page <= 0 || limit <= 0) {
            helper.response(res, 500, { message: "limit or page must more than 0" })
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

   
        
        const key=`page=${page.toString()}+limit=${limit.toString()}+sort=${sort}+column=${column}+title=${title}`;
         redis.get(key,(error,result)=>{
             if(error){
                console.log(error)
                 throw error
                 
             }
             if(result!==null){
                 console.log("get from redis");
                 const data = JSON.parse(result);
        return helper.response(res, 200,data.result,data.pagination)
                
             }
             else{
                //  console.log('next')
                 next()
             }
         })
          
    

    }
    getAllBorrow(req,res,next){
        const email =req.token.result.email;
        redis.get(email,(error,result)=>{
            if(error){
                throw error
            }
            if(result!== null){
                console.log("get all borrow from redis")
                const data= JSON.parse(result)
                return helper.response(res, 200,data)

            }
            else{
                next()
            }
        })
    }
    getUserBorrow(req,res,next){
        const email =req.token.result.email;
        redis.get(email,(error,result)=>{
            if(error){
                throw error
            }
            if(result!== null){
                console.log("get user borrow from redis")
                const data= JSON.parse(result)
                return helper.response(res, 200,data)

            }
            else{
                next()
            }
        })
    }

    }
    module.exports = new Caching()
