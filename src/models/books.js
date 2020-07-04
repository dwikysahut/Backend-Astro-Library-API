const connection = require('../config/mysql')
const fs = require('fs')
module.exports = {
    getBooks: function() {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT books.id,books.title,books.description,books.image,genre.name as genre,author.name as author,books.status,books.date_added,books.date_updated FROM books LEFT JOIN author ON author.id=books.author_id LEFT JOIN genre ON genre.id=books.genre_id ', function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getDetailBook: function(id) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT books.id,books.title,books.description,books.image,genre.id as genre_id,genre.name as genre,author.id as author_id,author.name as author,books.status,books.date_added,books.date_updated FROM books LEFT JOIN author ON author.id=books.author_id INNER JOIN genre ON genre.id=books.genre_id  WHERE books.id= ?', id, function(error, result) {
                if (!error) {
                  
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getBookById: function(id) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT books.id,books.title,books.description,books.image,genre.id as genre_id,genre.name as genre,author.id as author_id,author.name as author,books.status,books.date_added,books.date_updated FROM books LEFT JOIN author ON author.id=books.author_id INNER JOIN genre ON genre.id=books.genre_id  WHERE books.id= ?', id, function(error, result) {
                if (!error) {
                    console.log(result)
                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getBookByIdDelete: function(id) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT * from books where id= ?', id, function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postBook: function(setData) {
        return new Promise(function(resolve, reject) {
            connection.query('INSERT INTO books SET ?', setData, function(error, result) {
                if (!error) {
                    const newData = {
                        id: result.insertId,
                        ...setData ,
                        result//array spread
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })

        })
    },
    putBook: function(setData, id) {
        return new Promise(function(resolve, reject) {
            connection.query('UPDATE books SET ? WHERE id = ?', [setData, id], function(error, result) {
                if (!error) {
                    const newData = {
                        id: id,
                        ...setData //array spread
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    deleteBook: function(id) {
        return new Promise(function(resolve, reject) {
            connection.query('DELETE from books WHERE id = ?', id, function(error, result) {
                if (!error) {
                    const newData = {
                        id: id,
                        //array spread
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },


    getSearchBook: function(name) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * from books WHERE title LIKE ?"%"', name, function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getSortBook: function(title, limit, startIndex, column, sort) {
        return new Promise(function(resolve, reject) {
            if (sort == "asc") {
                connection.query(`SELECT books.id,books.title,books.description,books.image,genre.id as genre_id,genre.name as genre,author.id as author_id,author.name as author,books.status,books.date_added,books.date_updated FROM books LEFT JOIN author ON author.id=books.author_id INNER JOIN genre ON genre.id=books.genre_id  WHERE title LIKE "%${title}%" OR  genre.name LIKE "%${title}%" ORDER BY ?? asc  LIMIT ? OFFSET ?`, [column, limit, startIndex], function(error, result) {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
            } else {
                connection.query(`SELECT books.id,books.title,books.description,books.image,genre.id as genre_id,genre.name as genre,author.id as author_id,author.name as author,books.status,books.date_added,books.date_updated FROM books LEFT JOIN author ON author.id=books.author_id INNER JOIN genre ON genre.id=books.genre_id  WHERE title LIKE "%${title}%" OR  genre.name LIKE "%${title}%" ORDER BY ?? desc  LIMIT ? OFFSET ?`, [column, limit, startIndex], function(error, result) {

                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
            }
        })

    },
    getBooksPagination: function(limit, startIndex) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT books.id,books.title,books.description,books.image,genre.name as genre,author.name as author,books.status,books.date_added,books.date_updated FROM books LEFT JOIN author ON author.id=books.author_id LEFT JOIN genre ON genre.id=books.genre_id  LIMIT ? OFFSET ?', [limit, startIndex], function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    getCount: function() {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT COUNT(*) as count from books', function(error, result) {
                if (!error) {
                    resolve(result[0].count)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    deleteImageBook: function(image) {
        return new Promise(function(resolve, reject) {
            fs.unlink('./public/image/' + image, function(err) {
                if (err) return reject(new Error(err))
                resolve(console.log('File delete succesfully'))
            })
        })
    },
    getCountSearch: function(title) {
        return new Promise(function(resolve, reject) {
            connection.query(`SELECT COUNT(*) as count from books INNER JOIN genre ON genre.id=books.genre_id  WHERE title LIKE "%${title}%" OR  genre.name LIKE "%${title}%"`, title, function(error, result) {
                if (!error) {
                    resolve(result[0].count)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getBookByAuthor: function(getData) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * FROM  books WHERE author_id = ? ', getData, function(error, result) {
                if (!error) {

                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getBookByGenre: function(getData) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * FROM  books WHERE genre_id = ? ', getData, function(error, result) {
                if (!error) {

                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
}