const express = require("express")
const errorMiddleWare = require("./middleware/Error")
const app = express();
app.use(express.json())


// Swagger setup
require('./swagger/swagger.js')(app);

//Response Handler
global.responseHandler = require('./config/responseHandler');

// router 
const user = require("./router/userRouter")
const article = require("./router/articleRouter")

app.use ("/api/v1",user)
app.use ("/api/v1",article)

app.use(errorMiddleWare)

module.exports = app