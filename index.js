const express = require('express');
const path = require('path');
const connect = require('./connection')
const student = require('./routes/student ')
const app = express();
connect();
app.use(student);


app.set('view engine','ejs');
app.set('views', path.resolve('./views'));

app.listen(3000,(error)=>{
    if(error){
        console.log("error occured..");
    }
    else{
        console.log("Server is running on port 3000...");
    }
})