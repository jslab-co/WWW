//Importing the express and body-parser
const express =require('express');
const config=require('./config');

//Initialize the express app
const app=express();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });
//Server listen on port config.port
app.listen(config.port,()=>{
    console.log('Server started and running on the port number '+config.port)
});