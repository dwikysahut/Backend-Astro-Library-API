# Astro Library App
Astro Library App is a Library Application for find books and borrow the books. This App was built with Node.js using the Express.js Framework. Express.js is one of the popular web frameworks in the Node.js .  [Explore More Express.js](https://en.wikipedia.org/wiki/Express.js)

## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v12.16.2-green.svg?style=rounded-square)](https://nodejs.org/)


## Requirements
-> <a href="https://nodejs.org/en/download/">Node Js</a>
-> database (Mysql)
-> <a href="https://www.getpostman.com/">Postman</a>
-> Web Server (ex. localhost)

## Getting Started

The concept of this application is that there are 2 types of users, namely admin and user. where at login will be distinguished using authorization with JWT, authentication by differentiating roles in the database.
The user and admin have different access rights where only the user can view and select books, while the admin can access the database with CRUD access rights.

In this project I use the Morgan package which serves as recording every request to the server.

Here to Use Morgan
```
var express = require('express')
var morgan  = require('morgan')
 
var app = express()
app.use(morgan())
```
and then there is a nodemon package to automatically restart the app node when our code changes so there is no need to restart manually

```
npm install -g nodemon

```
If use yarn


```
yarn add -g nodemon

```

## Set up .env file
Open .env file on your code editor, and copy paste this code below :
```
SECRET_KEY= //secret key for JsonWebToken
REFRESH_TOKEN_SECRET= //Refresh Token Secret JsonWebToken

DB_HOST= localhost
DB_USER= root
DB_PASSWORD=
DB_DATABASE=  //database name
  
```

## End Point
**1. GET**
* `/notes`
* `/notes?search=lorem&sort=ASC&limit=5&page=1`
* `/note/:id` (Get note by id)
* `/categories`
* `/categories?search=Diary`
* `/category/:id` (Get category by id)
## Results on postman

GET 


```
"status": 200,
    "data": [
        {
            "id": 1,
            "title": "Harry Potter and the Sorcerer's Stone (Harry Potter and the Philosopher's Stone)",
            "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
            "image": "Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg",
            "genre": "Non Fiction",
            "author": "J.K Rowling",
            "status": "Available",
            "date_added": "2020-04-21T23:17:00.000Z",
            "date_updated": "2020-04-25T16:29:49.000Z"
        },

```

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type `npm install` or `yarn install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name note, and Import file [note.sql](note.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:8080/book)
8. You can see all the end point [here](#end-point)

ketika menggunakan yarn, maka untuk menjalankan app adalah dengan


```
yarn start

```
untuk mengupload image menggunakan multer


```
yarn add multer

```

## Authors

* Dwiky satria hutomo

http://github.com/dwikysahut

