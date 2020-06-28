# Astro Library App
Astro Library App is a Library Application for find books and borrow the books. This App was a RESTfull API for Astro Libray Web And Mobile built with Node.js using the Express.js Framework. Express.js is one of the popular web frameworks in the Node.js .  [Explore More Express.js](https://en.wikipedia.org/wiki/Express.js)

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
SECRET_KEY=passwordkuaneh
REFRESH_TOKEN_SECRET=anehpasswordku

DB_HOST= localhost
DB_USER= root
DB_PASSWORD=
DB_DATABASE= libraryapp-api
  
```
## End Point
**GET**
* `/book`
* `/book?page=1&limit=6&orderBy=asc&sortBy=id&title=`
* `/data/author`
* `/data/genre`
* `/book/borrow/user`
* `/book/borrow/list`(for all user)
* `/auth/user` 
* `/auth/user/all` 

**POST**
* `/book`
* `book/borrow/use/:idr`
* `/data/author`
* `/data/genre`
* `/auth/register`
* `/auth/login`
* `/book/borrow/user/:id`

**PUT**
* `/book/edit/:id`
* `/data/author/:id`
* `/data/genre/:id`
* `/auth/register`
* `/auth/login`
* `/book/borrow/:id`

**DELETE**
* `/book/:id`
* `/data/author/:id`
* `/data/genre/:id`
* `/auth/delete/logout` (logout and delete Token)
* `/user/delete/:id` (delete user by id)

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
# Packages
- express
- mysql
- body-parser
- morgan
- multer
- nodemon
- cors
- jsonwebtoken
- md5
- dotenv


## How to run the app ?
Clone this repository, then :
1. Open app's directory in CMD or Terminal
2. Type `npm install` or `yarn install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4.Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name libraryapp-api, and Import file [libraryapp-api.sql](librarapp-api.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:8080/book)
8. You can see all the end point [here](#end-point)

if use yarn , type this to start server


```
yarn start



```
this package use for upload image with multer


```
yarn add multer

```

## Authors

* Dwiky satria hutomo

http://github.com/dwikysahut

