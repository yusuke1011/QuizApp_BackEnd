//express
var express = require('express');
var router = express.Router();

//controller
const controller = require('./Controllers/index.js');

//static
router.use(express.static('./src/public'));

//クイズインスタンスを返すAPI
router.get('/api/quiz', (req, res) => {
    controller.setQuizData(res);
});

//ホーム画面表示
router.get('/', (req, res) => {
    controller.indexRender(res);
});

//クイズ画面表示
router.get('/quiz', (req, res) => {
    controller.quizRender(res);
});

module.exports = router;