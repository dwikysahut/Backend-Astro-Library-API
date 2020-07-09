const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
chai.should();
let token='';
describe('Author.js',()=>{
    describe('/auth/login',()=>{
        const userCredentials = {
            email: 'dwikysahut@gmail.com',
            password: 'dwikysahut'
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
        describe('/data/author',()=>{
            it('should return success get all author',()=>{
                chai.request(app)
                .get('/data/author')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,200);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
    
        })
        describe('/data/author/detail/:id',()=>{
            it('should return success get author by id',()=>{
                chai.request(app)
                .get('/data/author/detail/3')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,200);
                    chai.assert.equal(res.body.data.id,3);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
            it('should return error not found author',()=>{
                chai.request(app)
                .get('/data/author/detail/20')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,404);
                    // chai.assert.equal(res.body.data.id,20);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
    
        })
    })
  
    describe('/data/author',()=>{
        it('should return failed post author',()=>{
            chai.request(app)
            .post('/data/author')
            .set({ "Authorization": token })
            .send({username:'jk rowling'})
            .end((err,res) =>{
                chai.assert.equal(res.status,500);
                // res.body.data.name.should.be.a('string');
                // chai.assert.lengthOf(res.body.data,3);
            
            })
        })
        //success post
        // it('should return error not found genre',()=>{
        //     chai.request(app)
        //     .get('/data/genre/detail/30')
        //     .set({ "Authorization": token })
        //     .end((err,res) =>{
        //         chai.assert.equal(res.status,404);
        //         // chai.assert.equal(res.body.data.id,20);
    // res.body.data.name.should.be.a('string');
        //         // res.body.data.id.should.be.a('string');
        //         // chai.assert.lengthOf(res.body.data,3);
            
        //     })
        // })

    })
    describe('/data/author',()=>{
        it('should return failed delete author',()=>{
            chai.request(app)
            .delete('/data/author/36')
            .set({ "Authorization": token })
            .end((err,res) =>{
                chai.assert.equal(res.status,404);
                res.body.message.should.equal('failed to delete, author not found')
                // res.body.data.name.should.be.a('string');
                // chai.assert.lengthOf(res.body.data,3);
            
            })
        })
        //success post
        // it('should return error not found genre',()=>{
        //     chai.request(app)
        //     .get('/data/genre/detail/30')
        //     .set({ "Authorization": token })
        //     .end((err,res) =>{
        //         chai.assert.equal(res.status,404);
        //         // chai.assert.equal(res.body.data.id,20);
    // res.body.data.name.should.be.a('string');
        //         // res.body.data.id.should.be.a('string');
        //         // chai.assert.lengthOf(res.body.data,3);
            
        //     })
        // })

    })
  })

