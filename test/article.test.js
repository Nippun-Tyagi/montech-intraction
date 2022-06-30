const request = require('supertest');
const app = require('../app');
const User = require("../modles/Users");
const Articles = require("../modles/Articles");

const User1 = {
    "_id": "62bdb5225ad013f45ec49347",
    "name": "Nippun 1",
    "email": "nippun.tyagi+4@oodles.io",
    "type": "Author"
}
const User2 = {
    "_id": "62bdb5225ad013f45ec49348",
    "name": "Nippun 2",
    "email": "nippun.tyagi+5@oodles.io",
    "type": "Editor"
}
const Article1 = {
    "_id": "62bdb5225ad013f45ec49350",
    "title": "Test Article 1",
    "body": "Test Article 12",
    "keywords": "Article",
    "status": "Submitted",
    "createdBy": "62bdb5225ad013f45ec49345"
  }

beforeEach(async() => {
    await Articles.deleteMany({});
    await User.deleteMany({});
    await User(User1).save();
    await User(User2).save();
    await Articles(Article1).save();
})
test('Add New Article', async ()=>{
    await request(app).post('/api/v1/createArtical')
    .send({
        "title": "New Test Article 1",
        "body": "New Test Article 12",
        "keywords": "Article",
        "status": "Submitted",
        "createdBy": "62bdb5225ad013f45ec49347"
      }).expect(200)
})

test('Get All Articles', async ()=>{
    await request(app).get('/api/v1/Articals').expect(200)
})

test('Approve Article', async ()=>{
    await request(app).get('/api/v1/Articals')
    .send({
        "articalId": "62bdb5225ad013f45ec49350",
        "status": "Approved",
        "approvedBy": "62bdb5225ad013f45ec49348"
    }).expect(200)
})

test('update Article by id', async ()=>{
    await request(app).get('/api/v1/Artical/62bdb5225ad013f45ec49350').send({
        "title": "Update Article",
        "body": "Update Body",
        "keywords": "string",
        "status": "Submitted",
        "updatedBy": "62bdb5225ad013f45ec49348"
    }).expect(200)
})

test('Get Article by id', async ()=>{
    await request(app).get('/api/v1/Artical/62bdb5225ad013f45ec49350').expect(200)
})
