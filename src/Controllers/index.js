const QuizFetcher = require('../Models/QuizFetcher');

//ホーム画面表示
const indexRender = (_req) => {
    //ホーム画面用ejsファイルをレンダリング
    _req.render('index.ejs',
    {title : 'ようこそ！！',
    content : '以下のボタンで開始します'});
};

//クイズインスタンス配列を返すAPI
const quizRender = (_req) => {
    QuizFetcher.getQuizData()
        .then(quizInstances => {
            _req.json(quizInstances);
        })
        .catch((error) => {
            console.log('クイズデータの取得に失敗しました：', error);
        });
};

//モジュールとしてexport
exports.indexRender = indexRender;
exports.quizRender = quizRender;