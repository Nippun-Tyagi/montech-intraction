const app = require("./app")
const dotenv = require("dotenv").config({path:"config/config.env"})
const connectDatabase = require("./config/Database")

const port = process.env.PORT 

connectDatabase()
app.listen(port,()=>{
    console.log(`Server is running on http://localhost/${port}`);
})
