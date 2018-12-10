//APIから取得したクイズオブジェクトとクイズ番号（0～9）をセットし、
//カテゴリーや問題文などを取得するクラス
class Quiz {
    constructor(_quizData){ 

        this.category = _quizData.category;
        this.type = _quizData.type;
        this.difficulty = _quizData.difficulty;
        this.question = _quizData.question;
        this.incorrectAnswers = _quizData.incorrect_answers.slice();
        this.correctAnswer = _quizData.correct_answer;

        //正解と不正解を含めた回答群を生成
        const answers = this.incorrectAnswers.slice();
        answers.push(this.correctAnswer);
        //シャッフル
        for (let i = answers.length - 1; i > 0; i--){
            const rand = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[rand]] = [answers[rand], answers[i]];
        }

        this.answer1 = answers[0];
        this.answer2 = answers[1];
        this.answer3 = answers[2];
        this.answer4 = answers[3];
    }
}
//モジュールとしてexport
module.exports = Quiz;