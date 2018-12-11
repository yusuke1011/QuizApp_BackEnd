const assert = require('power-assert');
const QuizFetcher = require('../Models/Quizfetcher.js');

describe('QuizFetcherのテスト', () => {
  it('QuizFetcherが所望のクイズ問題を返しているかの確認', () => {
    return QuizFetcher.getQuizData()
      .then((quizInstances) => {
        assert.equal(Array.isArray(quizInstances), true);
        quizInstances.forEach((element) => {
          assert.equal(!!element.category, true);
          assert.equal(!!element.type, true);
          assert.equal(!!element.difficulty, true);
          assert.equal(!!element.question, true);
          assert.equal(!!element.correctAnswer, true);
          assert.equal(Array.isArray(element.incorrectAnswers), true);
          assert.equal(Array.isArray(element.answers), true);
        });
      });
  });  
});
     
    
  
