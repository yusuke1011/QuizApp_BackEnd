//express
const express = require('express');
const app = express();

//ejs
const ejs = require('ejs');
app.set('view engine', 'ejs');

//bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Controller
const controller = require('./Controllers/index.js');

//static
app.use(express.static('public'));

//クイズインスタンスを返すAPI
app.get('/api/quiz', (req, res) => {
    controller.quizRender(res);
});

//ホーム画面表示
app.get('/', (req, res) => {
    controller.indexRender(res);
});

//クイズ画面表示
app.get('/quiz', (req, res) => {
    res.render('quiz.ejs');
});

//3000番ポートを使用してサーバ起動
const server = app.listen(3000,() => {
    console.log('Node.js is listening to PORT:' + server.address().port);
})
