const express = require("express")
const app = express();
app.use(express.json())

// router 

const user = require("./router/userRouter")
const article = require("./router/articleRouter")

app.use ("/api/v1",user)
app.use ("/api/v1",article)
module.exports = app