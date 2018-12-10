//expressモジュールの読み込み
const express = require('express');
//インスタンス化
const app = express();
// ejsモジュールの読み込み
const ejs = require('ejs');
// テンプレートエンジンの指定
app.set('view engine', 'ejs');

//コントローラの読み込み
const controller = require('./Controllers/index.js');
console.log(controller);

var bodyParser = require('body-parser');
// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//ホーム画面表示
app.get('/', (req, res) => {
    controller.indexRender(res);
});

//クイズ画面表示
app.get('/quiz', (req, res) => {
    console.log('get', req.body);
    controller.quizRender(res);
});

//クイズ画面表示
app.post('/quiz', (req, res) => {
    controller.answerCounter(req.body.text);
    controller.quizRender(res);
});

//リザルト画面表示
app.post('/result', (req, res) => {
    controller.answerCounter(req.body.text);
    controller.resultRender(res);
});

//3000番ポートを使用してサーバ起動
const server = app.listen(3000,() => {
    console.log('Node.js is listening to PORT:' + server.address().port);
})
