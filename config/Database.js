const mongoose = require("mongoose")

const databaseConnection = () => {
    mongoose.connect(process.env.DatabaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
        console.log(`Database connect SuccessFully for ${data.connection.host}`);
        console.log(data)
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = databaseConnection