const Quiz = require('./Quiz.js');
const fetch = require('node-fetch');

class QuizFetcher {
    static getQuizData(){

        return fetch('https://opentdb.com/api.php?amount=10')
            .then(response => response.json())
            .then(quizDataObj => {
                //クイズインスタンス配列を生成
                const quizInstances = quizDataObj.results.map((element) => {
                    //QuizClassをインスタンス化
                    const quiz = new Quiz(element);
                    return quiz;
                });
                return quizInstances;
            })
            .catch((error) => {
                console.log('クイズデータの取得に失敗しました：', error);
            });
    }
}
//モジュールとしてexport
module.exports = QuizFetcher;


