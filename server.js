const app = require("./app")
const dotenv = require("dotenv").config({path:"config/config.env"})
const connectDatabase = require("./config/Database")

const Port = process.env.PORT

connectDatabase()
app.listen(Port,()=>{
    console.log(`Server is running on http://localhost/${Port}`);
})
