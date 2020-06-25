const connection = require('../config/mysql')
const fs = require('fs')
module.exports = {
    getBorrow: function() {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT id_user,borrow.id ,user.email as user_email,id_book,books.title as title,books.image as imageBook, borrow.created_at as borrow_at ,books.date_updated as return_at,borrow.status as status from borrow inner JOIN books on books.id=borrow.id_book INNER JOIN  user ON user.id=borrow.id_user ORDER BY status ASC,updated_at DESC', function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getUserBorrow: function(id_user) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT id_user,borrow.id ,user.email as user_email,id_book,books.title as title,books.image as imageBook, borrow.created_at as borrow_at ,borrow.updated_at as return_at,borrow.status as status from borrow inner JOIN books on books.id=borrow.id_book INNER JOIN  user ON user.id=borrow.id_user WHERE id_user=? ORDER BY status ASC,updated_at DESC', id_user, function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

//result bisa digunakan di react untuk array.map, karena ini array object. jadi kita simpan dalam data[], sedangkan reseult[0], hanya dapat 1 data dan kita hanya bisa mengambil 
// tanpa bisa menampilkannya dengan array.map karena berbentuk object
    getbBorrowById: function(id) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT * FROM borrow WHERE id =?', id, function(error, result) {
                if (!error) {
                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getDataBorrowById: function(id) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT id_user,borrow.id ,user.email as user_email,id_book,books.title as title,books.image as imageBook, borrow.created_at as borrow_at ,borrow.updated_at as return_at,borrow.status as status from borrow inner JOIN books on books.id=borrow.id_book INNER JOIN  user ON user.id=borrow.id_user WHERE borrow.id=? ORDER BY status ASC,updated_at DESC ', id, function(error, result) {
                if (!error) {
                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    addBorrow: function(user_id, book_id) {
        return new Promise(function(resolve, reject) {
            connection.query('INSERT INTO borrow SET id_user=? ,id_book=? , status=?', [user_id, book_id,"Borrowed"], function(error, result) {
                if (!error) {
                    const newData = {
                        id: result.insertId,
                        id_user: user_id,
                        id_book: book_id,
                        //array spread
                    }

                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })

        })
    },
    putBorrow: function(setData, id) {
        return new Promise(function(resolve, reject) {
            connection.query('UPDATE borrow SET ? WHERE id = ?', [setData, id], function(error, result) {
                if (!error) {
                    const newData = {
                      
                        id: id,
                       ...setData//array spread
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteBorrow: function(id) {
        return new Promise(function(resolve, reject) {
            connection.query('DELETE from borrow WHERE id = ?', id, function(error, result) {
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
    borrowedBook: function(id) {
        return new Promise(function(resolve, reject) {
            connection.query('UPDATE books SET status= "Unavailable" WHERE id = ?', [id], function(error, result) {
                if (!error) {
                    const newData = {
                        id: id,
                        ...result //array spread
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    returnBook: function(id) {
        return new Promise(function(resolve, reject) {
            connection.query('UPDATE books SET status="Available" WHERE id = ?', [id], function(error, result) {
                if (!error) {
                    const newData = {
                        id: id,
                        ...result //array spread
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteBorrowByBookId: function(id) {
        return new Promise(function(resolve, reject) {
            connection.query('DELETE from borrow WHERE id_book = ?', id, function(error, result) {
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
    getSearchborrow: function(name) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * from borrow WHERE title LIKE ?"%"', name, function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getSortborrow: function(title, limit, startIndex, column, sort) {
        return new Promise(function(resolve, reject) {
            if (sort == "asc") {
                connection.query('SELECT borrow.id,borrow.title,borrow.description,borrow.image,genre.id as genre_id,genre.name as genre,author.id as author_id,author.name as author,borrow.status,borrow.date_added,borrow.date_updated FROM borrow LEFT JOIN author ON author.id=borrow.author_id INNER JOIN genre ON genre.id=borrow.genre_id  WHERE title LIKE ?"%" ORDER BY ?? asc  LIMIT ? OFFSET ?', [title, column, limit, startIndex], function(error, result) {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
            } else {
                connection.query('SELECT borrow.id,borrow.title,borrow.description,borrow.image,genre.id as genre_id,genre.name as genre,author.id as author_id,author.name as author,borrow.status,borrow.date_added,borrow.date_updated FROM borrow LEFT JOIN author ON author.id=borrow.author_id INNER JOIN genre ON genre.id=borrow.genre_id ORDER BY ?? asc  LIMIT ? OFFSET ?', [column, limit, startIndex], function(error, result) {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
            }
        })

    },
 
    getCount: function() {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT COUNT(*) as count from borrow', function(error, result) {
                if (!error) {
                    resolve(result[0].count)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    getbBorrowByUser: function(id) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT * FROM borrow WHERE id_user = ?', id, function(error, result) {
                if (!error) {
                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
}