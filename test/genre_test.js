const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
chai.should();
let token='';
describe('Genre.js',()=>{
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
        describe('/data/genre',()=>{
            it('should return success get all genre',()=>{
                chai.request(app)
                .get('/data/genre')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,200);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                    res.body.data.should.have.lengthOf(8);
                
                })
            })
        })
        describe('/data/genre/detail/:id',()=>{
            it('should return success get genre by id',()=>{
                chai.request(app)
                .get('/data/genre/detail/1')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,200);
                    chai.assert.equal(res.body.data.id,1);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
            it('should return error not found genre',()=>{
                chai.request(app)
                .get('/data/genre/detail/30')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,404);
                    // chai.assert.equal(res.body.data.id,20);
                    // res.body.data.id.should.be.a('string');
                    // chai.assert.lengthOf(res.body.data,3);
                
                })
            })
    
        })
        describe('/data/genre',()=>{
            it('should return failed post genre',()=>{
                chai.request(app)
                .post('/data/genre')
                .set({ "Authorization": token })
                .send({age:'aduh'})
                .end((err,res) =>{
                    chai.assert.equal(res.status,500);
                    // res.body.data.id.should.be.a('string');
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
            //         // res.body.data.id.should.be.a('string');
            //         // chai.assert.lengthOf(res.body.data,3);
                
            //     })
            // })
    
        })
        describe('/data/genre',()=>{
            it('should return failed delete genre',()=>{
                chai.request(app)
                .delete('/data/genre/36')
                .set({ "Authorization": token })
                .end((err,res) =>{
                    chai.assert.equal(res.status,404);
                    res.body.message.should.equal('failed to delete, genre not found')
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
  
})
