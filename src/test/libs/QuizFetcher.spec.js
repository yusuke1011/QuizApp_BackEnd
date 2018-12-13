const assert = require('power-assert');
const QuizFetcher = require('../../Models/QuizFetcher.js');
const Quiz = require('../../Models/Quiz.js');

describe('QuizFetcherのテスト', () => {
  it('QuizFetcherが所望のクイズ問題を返しているかの確認', () => {
    return QuizFetcher.getQuizData()
      .then((quizInstances) => {
        assert.equal(Array.isArray(quizInstances), true);
        quizInstances.forEach((quiz) => {
          assert.equal(quiz instanceof Quiz, true);
          assert.equal(!!quiz.category, true);
          assert.equal(!!quiz.type, true);
          assert.equal(!!quiz.difficulty, true);
          assert.equal(!!quiz.question, true);
          assert.equal(!!quiz.correctAnswer, true);
          assert.equal(Array.isArray(quiz.incorrectAnswers), true);
          assert.equal(Array.isArray(quiz.answers), true);
        });
      });
  });  
});
     
    
  
