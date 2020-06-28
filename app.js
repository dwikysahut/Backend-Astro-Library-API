const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')

const routeNavigator = require('./src/index')
const server = app.listen(8080, "0.0.0.0", function() {
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