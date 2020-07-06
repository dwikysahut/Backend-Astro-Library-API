# Astro Library App
Astro Library App is a Library Application for find books and borrow the books. This App was a RESTfull API for Astro Libray Web And Mobile built with Node.js using the Express.js Framework. Express.js is one of the popular web frameworks in the Node.js .  [Explore More Express.js](https://en.wikipedia.org/wiki/Express.js)

## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v12.16.2-green.svg?style=rounded-square)](https://nodejs.org/)


## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. database (Mysql)
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

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

Usage For Development

Clone this repository, then :
1. Open app's directory in CMD or Terminal
2. Type `npm install` or `yarn install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name libraryapp-api, and Import file [libraryapp-api.sql](libraryapp-api.sql) to **phpmyadmin**
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

GET Book response

```
 "status": 200,
    "data": [
        {
            "id": 1,
            "title": "Harry Potter and the Philosopher's Stone",
            "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. ",
            "image": "image-1593068233645.jpg",
            "genre_id": 1,
            "genre": "Fantasy/Adventure",
            "author_id": 1,
            "author": "J.K Rowling",
            "status": "Unavailable",
            "date_added": "2020-04-21T23:17:00.000Z",
            "date_updated": "2020-07-01T04:36:11.000Z"
        },
        {
            "id": 2,
            "title": "Harry Potter and the Chamber of Secret",
            "description": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the \"Chamber of Secrets\" has been opened",
            "image": "image-1591467680410.jpg",
            "genre_id": 1,
            "genre": "Fantasy/Adventure",
            "author_id": 1,
            "author": "J.K Rowling",
            "status": "Available",
            "date_added": "2020-04-21T23:39:31.000Z",
            "date_updated": "2020-07-01T04:36:19.000Z"
        },
```

* `/data/author`

```
  "status": 200,
    "data": [
        {
            "id": 1,
            "name": "J.K Rowling"
        },
        {
            "id": 2,
            "name": "Masashi Kishimoto"
        },
        {
            "id": 3,
            "name": "Andrea Hirata"
        },
```

* `/data/genre`
```
   "status": 200,
    "data": [
        {
            "id": 1,
            "name": "Fantasy/Adventure"
        },
        {
            "id": 2,
            "name": "Romance"
        },
```

* `/book/borrow/user`
```
 "status": 200,
    "data": [
        {
            "id_user": 4,
            "id": 206,
            "user_email": "kita@gmail.com",
            "id_book": 4,
            "title": "Naruto Vol. 10: A Great Ninja...!",
            "imageBook": "image-1588499675406.jpg",
            "borrow_at": "2020-06-25T12:42:46.000Z",
            "return_at": "2020-06-25T12:42:46.000Z",
            "status": "Borrowed"
        },
        {
            "id_user": 4,
            "id": 205,
            "user_email": "kita@gmail.com",
            "id_book": 1,
            "title": "Harry Potter and the Philosopher's Stone",
            "imageBook": "image-1593068233645.jpg",
            "borrow_at": "2020-06-15T07:02:25.000Z",
            "return_at": "2020-06-30T16:49:46.000Z",
            "status": "Returned"
        },
```

* `/book/borrow/list`(for all user)
```
   "status": 200,
    "data": [
        {
            "id_user": 4,
            "id": 145,
            "user_email": "kita@gmail.com",
            "id_book": 1,
            "title": "Harry Potter and the Philosopher's Stone",
            "imageBook": "image-1593068233645.jpg",
            "borrow_at": "2020-06-08T04:58:05.000Z",
            "return_at": "2020-07-01T04:36:11.000Z",
            "status": "Returned"
        },
        {
            "id_user": 177,
            "id": 142,
            "user_email": "aaa@gmail.com",
            "id_book": 1,
            "title": "Harry Potter and the Philosopher's Stone",
            "imageBook": "image-1593068233645.jpg",
            "borrow_at": "2020-06-08T04:28:11.000Z",
            "return_at": "2020-07-01T04:36:11.000Z",
            "status": "Returned"
        },
```


**POST**
* `/book`

```
  "status": 200,
    "data": {
        "result": {
            "id": 222,
            "title": "coba result",
            "description": "Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.",
            "genre_id": "5",
            "author_id": "3",
            "status": "Available",
            "image": "image-1593582404037.jpg",
            "result": {
                "fieldCount": 0,
                "affectedRows": 1,
                "insertId": 222,
                "serverStatus": 2,
                "warningCount": 0,
                "message": "",
                "protocol41": true,
                "changedRows": 0
            }
        },
```

        
* `book/borrow/user/:id`
```
"status": 200,
    "data": {
        "message": "Book succesfully added to borrow list succesfull",
        "data": {
            "id_user": 4,
            "id": 209,
            "user_email": "kita@gmail.com",
            "id_book": 119,
            "title": "5 CM",
            "imageBook": "image-1588499708663.jpg",
            "borrow_at": "2020-07-01T05:49:08.000Z",
            "return_at": "2020-07-01T05:49:08.000Z",
            "status": "Borrowed"
        }
    }
```

* `/data/author`
* `/data/genre`
* `/auth/register`
```
  "status": 200,
    "data": {
        "id": 184,
        "email": "ooooo@gmail.com",
        "role": "2"
    }
```

* `/auth/login`
```
  "status": 200,
    "data": {
        "id": 4,
        "email": "kita@gmail.com",
        "role": 2,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjQsImVtYWlsIjoia2l0YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImUzOTE5ZWMwMmM0ZjY3YTBmM2E4ZjFhNjMyMGEwZTBhIiwicm9sZSI6Mn0sImlhdCI6MTU5MzU4MjUzOCwiZXhwIjoxNTkzNjE4NTM4fQ.m3QdEnybJmMoXyy7T54jboBki9L8SLnM7vdXbuXe_qI",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjQsImVtYWlsIjoia2l0YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImUzOTE5ZWMwMmM0ZjY3YTBmM2E4ZjFhNjMyMGEwZTBhIiwicm9sZSI6Mn0sImlhdCI6MTU5MzU4MjUzOCwiZXhwIjoxNTkzNjI1NzM4fQ.0qvxtdUwX8Wnlf7mUy1ljL5pFRKwc5nHQZcNr9eU8yQ"
    }
```

**PUT**
* `/book/edit/:id`
```
 "status": 200,
    "data": {
        "result": {
            "id": "222",
            "title": "aaaaa"
        },
        "data": {
            "id": 222,
            "title": "aaaaa",
            "description": "Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.",
            "image": "image-1593582404037.jpg",
            "genre_id": 5,
            "genre": "Non Fiction",
            "author_id": 3,
            "author": "Andrea Hirata",
            "status": "Available",
            "date_added": "2020-07-01T05:46:44.000Z",
            "date_updated": "2020-07-01T08:25:56.000Z"
```


* `/data/author/:id`
```
{
    "status": 200,
    "data": {
        "id": "19",
        "name": "Tere Liye"
    }
}
```

* `/data/genre/:id`
```
{
    "status": 200,
    "data": {
        "id": "69",
        "name": "Encyclopedia"
    }
}
```

**DELETE**
* `/book/:id`
```
 "status": 200,
    "data": {
        "id": "221"
    }
```

* `/data/author/:id`
```
 "status": 200,
    "data": {
        "id": "15"
    }
```

* `/data/genre/:id`
```
 "status": 200,
    "data": {
        "id": "25"
    }
```
* `/auth/delete/logout` (logout and delete Token)
DELETE /auth/logout 200 0.826 ms - 19
```
logout Successfully
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

## Related Project (Mobile App)
* [`Astro-Library-Mobile`](https://github.com/dwikysahut/Astro-Library-Mobile)


* [`Astro-Library-Web`](https://github.com/dwikysahut/Astro-Library-Web-App)
## Authors

* Dwiky satria hutomo

http://github.com/dwikysahut

