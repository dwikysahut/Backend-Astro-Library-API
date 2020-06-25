const connection = require('../config/mysql')


module.exports = {

    getData: function(name) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * from ??', name, function(error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getDataById: function(name,id) {
        return new Promise(function(resolve, reject) {
            connection.query('SELECT * from ?? WHERE id=?', [name,id], function(error, result) {
                if (!error) {
                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postData: function(name, addData) {
        return new Promise(function(resolve, reject) {
            connection.query('INSERT INTO ?? SET ?', [name, addData], function(error, result) {
                if (!error) {
                    const newData = {
                        id: result.insertId,
                        ...addData

                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putData: function(name, setData, id) {
        return new Promise(function(resolve, reject) {
            connection.query('UPDATE ?? SET ? WHERE id = ?', [name, setData, id], function(error, result) {
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
    deleteData: function(name, id) {
        return new Promise(function(resolve, reject) {
            connection.query('DELETE from ?? WHERE id = ?', [name, id], function(error, result) {
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