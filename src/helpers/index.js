const fs = require('fs')

module.exports = {
    response: function(response, status, data, pagination) {
        const result = {}
        result.status = status || 200
        result.data = data
        result.pagination = pagination



        return response.status(result.status).json(result)
    },
    deleteFile: function(books) {
        if (books.length > 0) {
            books.forEach(function(bookImage) {
                fs.stat('./public/image/' + bookImage.image, function(err, stats) {
                    console.log(stats);

                    if (err) {
                        return console.error(err);
                    }

                    fs.unlink('./public/image/' + bookImage.image, function(err) {
                        if (err) return console.log(err);

                        console.log('file deleted successfully');
                    });
                });
            });
        }
    }
}