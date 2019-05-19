//Importing the express and body-parser
const express =require('express');
var path=require('path');
//Initialize the express app
const app=express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });
const port = process.env.port || 5000;
//Server listen on port config.port
app.listen(port,()=>{
    console.log('Server started and running on the port number '+ port)
});