//express
const express = require('express');
const router = express.Router();

//controller
const controller = require('./Controllers/index.js');

//クイズインスタンスを返すAPI
router.get('/api/quiz', controller.fetchQuizData);

//ホーム画面表示
router.get('/', controller.indexRender);

//クイズ画面表示
router.get('/quiz', controller.quizRender);

module.exports = router;