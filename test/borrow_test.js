const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
chai.should();
let token='';
describe('Borrow.js',()=>{
    describe('/auth/login',()=>{
        const userCredentials = {
            email: 'kita@gmail.com',
            password: 'kitakita'
        };
        it('should return login success',()=>{
            chai.request(app)
            .post('/auth/login')
            .send(userCredentials)
            .end((err,res) =>{
                chai.assert.equal(res.status,200);
                token= res.body.data.token;
            // done();
            })
        })
        describe('/book/borrow/user',()=>{
            it('should return success get borrow by user',()=>{
                chai.request(app)
                .get('/book/borrow/user/')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,200);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
    
        })
        describe('/book/borrow/:id',()=>{
            it('should return failed return book by user',()=>{
                chai.request(app)
                .put('/book/borrow/300')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,500);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
    
        })
        //borrow book
        describe('/book/borrow/user/:id',()=>{
            it('should return failed borrow book, unavailable status',()=>{
                chai.request(app)
                .post('/book/borrow/user/4')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,500);
                    res.body.data.message.should.equal('Book is Unavailable')
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
    
        })
    })
  
  
  })

//   describe('/data/book/detail/:id',()=>{
//     it('should return success get author by id',()=>{
//         chai.request(app)
//         .get('/data/author/detail/3')
//         .set({ "Authorization": token })
//         .end((err,res) =>{
//             chai.assert.equal(res.status,200);
//             chai.assert.equal(res.body.data.id,3);
//             // res.body.data.id.should.be.a('string');
//             // chai.assert.lengthOf(res.body.data,3);
        
//         })
//     })
//     it('should return error not found author',()=>{
//         chai.request(app)
//         .get('/data/author/detail/20')
//         .set({ "Authorization": token })
//         .end((err,res) =>{
//             chai.assert.equal(res.status,404);
//             // chai.assert.equal(res.body.data.id,20);
//             // res.body.data.id.should.be.a('string');
//             // chai.assert.lengthOf(res.body.data,3);
        
//         })
//     })

// })