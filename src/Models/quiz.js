class Quiz {
    constructor(_quizData){ 

        this.category = _quizData.category;
        this.type = _quizData.type;
        this.difficulty = _quizData.difficulty;
        this.question = _quizData.question;
        this.incorrectAnswers = _quizData.incorrect_answers.slice();
        this.correctAnswer = _quizData.correct_answer;

        //正解と不正解を含めた回答群を生成
        this.answers = this.incorrectAnswers.slice();
        this.answers.push(this.correctAnswer);
        //シャッフル
        for (let i = this.answers.length - 1; i > 0; i--){
            const rand = Math.floor(Math.random() * (i + 1));
            [this.answers[i], this.answers[rand]] = [this.answers[rand], this.answers[i]];
        }
    }
}
//モジュールとしてexport
module.exports = Quiz;