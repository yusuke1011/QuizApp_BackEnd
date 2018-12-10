let quizDataObj = {};

const getQuizData = () => {
    const fetch = require('node-fetch');

    fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => {
            console.log('Response Dataを取得しました：', response);
            return response.json();
        })
        .then((_quizDataObj) => {
            console.log('Promise Valueを取得しました：', _quizDataObj);
            //取得したクイズデータをモジュール内のメンバ変数？に格納する
            quizDataObj = _quizDataObj;
            //モジュールとしてexport
            exports.quizDataObj = quizDataObj;
        })
        .catch((error) => {
            console.log('クイズデータの取得に失敗しました：', error);
            alert('エラーが発生しました');
        });
}
//モジュールとしてexport
exports.getQuizData = getQuizData;


