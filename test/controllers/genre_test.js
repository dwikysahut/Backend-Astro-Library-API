// const chai = require('chai');
// // const chaiHttp = require('chai-http');
// const book = require('../../src/controllers/genre');
// const bookModel = require('../../src/models/data');
// const sinon = require('sinon');

// const server = 'http://localhost:8080'
// // chai.use(chaiHttp);
// chai.should();
// describe('Genre Controllers',()=>{
//     describe('getAllGenre',()=>{
//         it('should return success get All Genre',async ()=>{
//             const  res={
//                 status:()=>{
//                     return {
//                         json:sinon.stub()
//                     }
//                 },
//             };
//           sinon.stub(bookModel, 'getData').resolves([{}]);
//            await book.getGenre({},res);
//           bookModel.getData.restore();
//         //   chai.expect(res).to.have.property('id');
//         })
//     })
//     describe('getGenreById',()=>{
//         it('should return success get genre by id',async ()=>{
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
//            await book.getGenreById(req,res);
//           bookModel.getDataById.restore();
//         //   chai.expect(res).to.have.property('id');
//         })
//     })
// })
