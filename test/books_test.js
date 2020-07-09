const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
chai.should();
describe('Books.js',()=>{
    describe('/book/',()=>{
        it('should return success get all books',()=>{
            chai.request(app)
            .get('/book/')
            .end((err,res) =>{
                chai.assert.equal(res.status,200);
                chai.assert.lengthOf(res.body.data,3);
            
            })
        })

        it('should return limit must more than 0',()=>{
            chai.request(app)
            .get('/book?limit=0')
            .end((err,res) =>{
                chai.assert.equal(res.status,500);
                 res.body.data.message.should.equal('limit or page must more than 0');
                 res.body.data.message.should.be.a('string');
            
            })
        })
        it('should return error not found book',()=>{
            chai.request(app)
            .get('/book/detail/3')
            .end((err,res) =>{
                chai.assert.equal(res.status,404);
                res.body.message.should.equal('no book found')
            })
        })
    })
    describe('/book/detail/:id',()=>{
        it('should return success get book by id',()=>{
            chai.request(app)
            .get('/book/detail/11')
            .end((err,res) =>{
                chai.assert.equal(res.status,200);
                res.body.message.should.equal('success get book by id')
                res.body.data.id.should.equal(11)
            
            })
        })
        it('should return error not found book',()=>{
            chai.request(app)
            .get('/book/detail/3')
            .end((err,res) =>{
                chai.assert.equal(res.status,404);
                res.body.message.should.equal('no book found')
            })
        })
    })
})
