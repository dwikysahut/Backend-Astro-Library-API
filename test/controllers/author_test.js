// const chai = require('chai');
// // const chaiHttp = require('chai-http');
// const book = require('../../src/controllers/author');
// const bookModel = require('../../src/models/data');
// const sinon = require('sinon');

// const server = 'http://localhost:8080'
// // chai.use(chaiHttp);
// chai.should();
// describe('Author Controllers',()=>{
//     describe('getAllAuthor',()=>{
//         it('should return success get All Author',async ()=>{
//             const  res={
//                 status:()=>{
//                     return {
//                         json:sinon.stub()
//                     }
//                 },
//             };
//           sinon.stub(bookModel, 'getData').resolves([{}]);
//            await book.getAuthor({},res);
//           bookModel.getData.restore();
//         //   chai.expect(res).to.have.property('id');
//         })
//     })
//     describe('getAuthorById',()=>{
//         it('should return success get author by id',async ()=>{
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
//           sinon.stub(bookModel, 'getDataById').resolves([{}]);
//            await book.getAuthorById(req,res);
//           bookModel.getDataById.restore();
//         //   chai.expect(res).to.have.property('id');
//         })
//     })
// })
