class QuizFetcher {
    static getQuizData(){
        const fetch = require('node-fetch');

        return fetch('https://opentdb.com/api.php?amount=10')
            .then(response => response.json())
            .catch((error) => {
                console.log('クイズデータの取得に失敗しました：', error);
            });
    }
}

//モジュールとしてexport
module.exports = QuizFetcher;


