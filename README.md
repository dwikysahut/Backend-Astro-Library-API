# Library App
project ini adalah project Node.JS dengan framework Express.JS dimana tujuannya adalah membuat RESTfull API



## Getting Started
Konsep dari aplikasi ini adalah terdapat 2 jenis user, yaitu admin dan user. dimana saat login akan dibedakan menggunakan authorization dengan JWT, authentication  dengan  membedakan role pada database.
user dan admin memilik hak akses berbeda dimana user hanyak dapat melihat dan memilih buku, sedangkan admin bisa mengakses database dengan hak akses CRUD.

disini saya menggunakan package morgan yang berfungsi sebagai pencatatan setiap request ke server. 

```
var express = require('express')
var morgan  = require('morgan')
 
var app = express()
app.use(morgan())
```
lalu ada nodemon untuk restart otomatis node app ketika code kita ada perubahan jadi tidak perlu restart manual


```
npm install -g nodemon

```
untuk yarn


```
yarn add -g nodemon

```

## Hasil data pada postman

contoh hasil GET


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

