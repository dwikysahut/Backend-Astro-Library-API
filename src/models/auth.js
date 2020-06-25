const connection = require('../config/mysql')
module.exports = {
    getUser: function() {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT id,email,role from user', function(error, result) {
                if (!error) {

                    resolve(result)

                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    getUserbyEmail: function(setData) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT * from user WHERE email=?', setData.email, function(error, result) {
                if (!error) {
                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getUserByRole: function(role) {
        return new Promise(function(resolve, reject) {

            connection.query('SELECT * from user WHERE role=?', role, function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postUser: function(setData) {
        return new Promise(function(resolve, reject) {
            connection.query('INSERT INTO user SET ?', setData, function(error, result) {
                if (!error) {
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    delete newResult.password
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postLogin: function(getData) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * FROM  user WHERE email = ? AND password = ?', [getData.email, getData.password], function(error, result) {
                if (!error) {

                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putAdmin: function(setData, email) {
        return new Promise(function(resolve, reject) {
            connection.query('UPDATE user SET password=? WHERE email = ?', [setData, email], function(error, result) {
                if (!error) {
                    const newData = {
                      
                        ...setData //array spread
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putUser: function(setData, id) {
        return new Promise(function(resolve, reject) {
            connection.query('UPDATE user SET ? WHERE id = ?', [setData, id], function(error, result) {
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
    deleteUser: function(id) {
        return new Promise(function(resolve, reject) {
            connection.query('DELETE from user WHERE id = ?', id, function(error, result) {
                if (!error) {
                    const newData = {
                        id: id,
                        ...result
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
}