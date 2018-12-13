//express
const express = require('express');
const app = express();

//ejs
const ejs = require('ejs');
app.set('views', 'src/views');
app.set('view engine', 'ejs');

//bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//route
const router = require('./router.js');
app.use('/', router);

//3000番ポートを使用してサーバ起動
const server = app.listen(3000,() => {
    console.log('Node.js is listening to PORT:' + server.address().port);
})
