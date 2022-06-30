const express = require("express")
const errorMiddleWare = require("./middleware/Error")
const app = express();
app.use(express.json())
const connectDatabase = require("./config/Database")
connectDatabase()

// router 
const user = require("./router/userRouter")
const article = require("./router/articleRouter")

app.use ("/api/v1",user)
app.use ("/api/v1",article)

app.use(errorMiddleWare)

module.exports = app