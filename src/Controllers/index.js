const QuizFetcher = require('../Models/QuizFetcher');

//ホーム画面表示
const indexRender = (_req) => {
    _req.render('index.ejs',
    {title : 'ようこそ！！',
    content : '以下のボタンで開始します'});
};

//クイズ画面表示
const quizRender = (_req) => {
    _req.render('quiz.ejs');
};

//クイズインスタンス配列を返すAPI
const setQuizData = (_req) => {
    QuizFetcher.getQuizData()
        .then(quizInstances => {
            _req.json(quizInstances);
        })
        .catch((error) => {
            console.log('クイズデータの取得に失敗しました：', error);
        });
};

exports.indexRender = indexRender;
exports.quizRender = quizRender;
exports.setQuizData = setQuizData;