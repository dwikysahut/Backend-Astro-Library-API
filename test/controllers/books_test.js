// const chai = require('chai');
// // const chaiHttp = require('chai-http');
// const book = require('../../src/controllers/books');
// const bookModel = require('../../src/models/books');
// const sinon = require('sinon');

// const server = 'http://localhost:8080'
// // chai.use(chaiHttp);
// chai.should();
// describe('Books Controllers',()=>{
//     describe('getBookById',()=>{
//         it('should return success get book by id',async ()=>{
//             const  res={
//                 status:()=>{
//                     return {
//                         json:sinon.stub()
//                     }
//                 },
//             };
//             const  req={
//                 params:{
//                     id:11
//                 }
//             };
//           sinon.stub(bookModel, 'getBookById').resolves([{id:11,title:'dasdasdsa'}]);
//            await book.getBookById(req,res);
//           bookModel.getBookById.restore();
//         //   chai.expect(res).to.have.property('id');
//         })
//         it('should return no book found',async ()=>{
//             const  res={
//                 status:()=>{
//                     return {
//                         json:sinon.stub()
//                     }
//                 },
//             };
//             const  req={
//                 params:{
//                     id:3
//                 }
//             };
//           sinon.stub(bookModel, 'getBookById').resolves([{id:3}]);
//            await book.getBookById(req,res);
//           bookModel.getBookById.restore();
//         //   chai.expect(res).to.have.property('id');
//         })


//     //     it('should return limit must more than 0',()=>{
//     //         chai.request(server)
//     //         .get('/book?limit=0')
//     //         .end((err,res) =>{
//     //             chai.assert.equal(res.status,500);
//     //              res.body.data.message.should.equal('limit or page must more than 0');
//     //              res.body.data.message.should.be.a('string');
            
//     //         })
//     //     })
//     //     it('should return error not found book',()=>{
//     //         chai.request(server)
//     //         .get('/book/detail/3')
//     //         .end((err,res) =>{
//     //             chai.assert.equal(res.status,404);
//     //             res.body.message.should.equal('no book found')
//     //         })
//     //     })
//     // })
//     // describe('/book/detail/:id',()=>{
//     //     it('should return success get book by id',()=>{
//     //         chai.request(server)
//     //         .get('/book/detail/11')
//     //         .end((err,res) =>{
//     //             chai.assert.equal(res.status,200);
//     //             res.body.message.should.equal('success get book by id')
//     //             res.body.data.id.should.equal(11)
            
//     //         })
//     //     })
//     //     it('should return error not found book',()=>{
//     //         chai.request(server)
//     //         .get('/book/detail/3')
//     //         .end((err,res) =>{
//     //             chai.assert.equal(res.status,404);
//     //             res.body.message.should.equal('no book found')
//     //         })
//     //     })
//     })
//     // describe('getAllBooks',()=>{
//     //     it('should return success get all books',async ()=>{
//     //         const  res={
//     //             status:()=>{
//     //                 return {
//     //                     json:sinon.stub()
//     //                 }
//     //             },
//     //         };
//     //         const  req={
//     //             query:{
//     //                 page:1
//     //             }
//     //         };
//     //       sinon.stub(bookModel, 'getSortBook').resolves([{}]);
//     //        await book.getBooks(req,res);
//     //       bookModel.getSortBook.restore();
//     //     //   chai.expect(res).to.have.property('id');
//     //     })
//     // })
// })
