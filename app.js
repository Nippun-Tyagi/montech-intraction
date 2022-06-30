
const connectDatabase = require("./db/Database")
connectDatabase()

const express = require("express")
const errorMiddleWare = require("./middleware/Error")
const app = express();

// Swagger setup
require('./swagger/swagger.js')(app);

app.use(express.json())

// router 
const user = require("./router/userRouter")
const article = require("./router/articleRouter")

app.use ("/api/v1",user)
app.use ("/api/v1",article)

app.use(errorMiddleWare)

module.exports = app