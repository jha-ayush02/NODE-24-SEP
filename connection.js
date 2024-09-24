const mongoose = require('mongoose');
async function connection(){
    try {
        let connect = await mongoose.connect(`mongodb://localhost:27017/batch1`);
        console.log("Connection with mongodb successfully created...");
    }catch(error){
        console.log(error);
    }
}

module.exports = connection;