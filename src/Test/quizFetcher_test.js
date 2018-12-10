const assert = require('power-assert');
const QuizFetcher = require('../Models/quizfetcher.js');

describe('QuizFetcherのテスト', () => {
  it('QuizFetcherが所望のクイズ問題を返しているかの確認', () => {
    QuizFetcher.getQuizData()
      .then((quizDataObj) => {
        assert.equal(Array.isArray(quizDataObj.results), true);
        assert.equal(quizDataObj.results.length, 10, true);
      });
  });  
});
     
    
  
