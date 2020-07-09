const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
chai.should();
let token = '';
let refreshToken = '';
describe('Auth.js', () => {
    // before(async () => {
        describe('/auth/login', () => {
            const userCredentials = {
                email: 'dwikysahut@gmail.com',
                password: 'dwikysahut'
            };
            const userFalseCredentials = {
                email: 'dwikysahut@gmail.com',
                password: 'dwikysh'
            };
            it('should return login success', () => {
                chai.request(app)
                    .post('/auth/login')
                    .send(userCredentials)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 200);
                        token = res.body.data.token;
                        refreshToken = res.body.data.refreshToken;
                        // done();
                    })
            })
            it('should return login faled', () => {
                chai.request(app)
                    .post('/auth/login')
                    .send(userFalseCredentials)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 204);
                        // token= res.body.data.token;
                        // done();
                    })
            })
        // })
        // after(async () => {
            describe('/auth/user', () => {
                it('should return success get all user', () => {
                    chai.request(app)
                        .get('/auth/user')
                        .set({ "Authorization": token })
                        .end((err, res) => {
                            chai.assert.equal(res.status, 200);
                            // res.body.data.id.should.be.a('string');
                            // chai.assert.lengthOf(res.body.data,3);

                        })
                })

            })
            //refresh token
            describe('/auth/token', () => {
                it('should return success refresh token', () => {
                    chai.request(app)
                        .post('/auth/token')
                        .send({ token: refreshToken })
                        .end((err, res) => {
                            chai.assert.equal(res.status, 200);
                            // res.body.data.id.should.be.a('string');
                            // chai.assert.lengthOf(res.body.data,3);

                        })
                })
                it('should return failed refresh token', () => {
                    chai.request(app)
                        .post('/auth/token')
                        .send({ token: 'exampleFalseRefreshToken' })
                        .end((err, res) => {
                            chai.assert.equal(res.status, 401);
                            res.body.data.message.should.equal('JsonWebTokenError')


                        })
                })

            })
        })


    })
// })
