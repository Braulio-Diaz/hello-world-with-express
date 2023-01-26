var express = require('express')

var app = express();

app.get('/', function(req, res){
    res.send('<h1><center><u> ¡Hello world from nodejs! </u></center></h1>')
});

app.listen(3000, function(req, res){
    console.log('Server listening on port 4000')
});