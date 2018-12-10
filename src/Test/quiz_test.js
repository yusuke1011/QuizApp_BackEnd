const assert = require('power-assert');
const Quiz = require('../Models/quiz.js');

const testObj = {
  category : 'category',
  type : 'type',
  difficulty : 'difficulty',
  question : 'question',
  incorrect_answers : ['incorrectAnswer1', 'incorrectAnswer2', 'incorrectAnswer3'],
  correct_answer : 'correctanswer'
}

describe('Quizのテスト', () => {
  it('Quizが所望のクイズ問題を返しているかの確認', () => {
    const quiz = new Quiz(testObj);
    assert.equal(quiz.category, 'category', true);
    assert.equal(quiz.type, 'type', true);
    assert.equal(quiz.difficulty, 'difficulty', true);
    assert.equal(quiz.question, 'question', true);
    console.log(quiz.answer1, quiz.answer2, quiz.answer3, quiz.answer4);
  });
});
