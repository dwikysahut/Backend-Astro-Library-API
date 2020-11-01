const redis = require("redis");
// const { response } = require("express");

class dbConnect{
    constructor() {
        this.clinet = redis.createClient({
            host: process.env.REDISHOST,
            port: process.env.REDISPORT,
        })
    }

    redisCheck(){
        return new Promise((resolve,reject)=>{
            this.clinet.get("testKey",(error,response)=>{
                if(error){
                    reject(error)
                }
                if(response==="OK"||response===null){
                    resolve("Connection to Redis Succesfully")
                }
            })
        })
    }
}
module.exports = new dbConnect()