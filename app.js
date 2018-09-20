var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var static = require('serve-static');
var path = require('path');



var app = express();

var port = process.env.PORT || 3000;


app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/public',static(path.join(__dirname,'public')));


var router = express.Router();
var userRoute = require('./routes/user');
userRoute(router);

app.use('/',router);


http.createServer(app).listen(port,function(){
    console.log('3000번 포트로 서버가 시작 되었습니다.');
    });