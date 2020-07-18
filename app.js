const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();
const conn = require("./src/config/redisConn")

const routeNavigator = require('./src/index')
conn.redisCheck()
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
const server = app.listen(process.env.PORT, "0.0.0.0", function() {
    const host = server.address().address
    const port = server.address().port

    console.log("You're Connected at " + host + ":" + port)
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

app.use(morgan("dev"))
app.use(cors({
    origin: "*",
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: 'true',
    optionSuccessStatus: 200

}));
app.use('/', routeNavigator)



module.exports = app