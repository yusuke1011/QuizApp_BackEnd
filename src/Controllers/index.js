const QuizFetcher = require('../Models/QuizFetcher');

//ホーム画面表示
const indexRender = (req, res) => {
    res.render('index.ejs',{
        title : 'ようこそ！！',
        content : '以下のボタンで開始します'
    });
};

//クイズ画面表示
const quizRender = (req, res) => {
    res.render('quiz.ejs');
};

//クイズインスタンス配列を返すAPI
const fetchQuizData = (req, res) => {
    QuizFetcher.getQuizData()
        .then(quizInstances => {
            res.json(quizInstances);
        })
        .catch((error) => {
            console.log('クイズデータの取得に失敗しました：', error);
        });
};

exports.indexRender = indexRender;
exports.quizRender = quizRender;
exports.fetchQuizData = fetchQuizData;