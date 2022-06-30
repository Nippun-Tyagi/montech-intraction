const request = require('supertest');
const app = require('../app');
const User = require("../modles/Users");

const User1 = {
    "_id": "62bdb5225ad013f45ec49361",
    "name": "Nippun 1",
    "email": "nippun.tyagi+2@oodles.io",
    "type": "Author"
}
const User2 = {
    "_id": "62bdb5225ad013f45ec49360",
    "name": "Nippun 2",
    "email": "nippun.tyagi+3@oodles.io",
    "type": "Editor"
}

beforeEach(async() => {
    await User.deleteMany({});
    await User(User1).save();
    await User(User2).save();
})
test('Add New User', async ()=>{
    await request(app).post('/api/v1/User')
    .send({
        "name": "Nippun",
        "email": "nippun.tyagi+1@oodles.io",
        "type": "Author"
      }).expect(200)
})

test('Get User', async ()=>{
    await request(app).get('/api/v1/User').expect(200)
})

test('Get User By Id', async ()=>{
    await request(app).get('/api/v1/User/62bdb5225ad013f45ec49360').expect(200)
})