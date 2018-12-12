const assert = require('power-assert');
const Quiz = require('../Models/Quiz.js');

const testObj = {
    category : 'category',
    type : 'type',
    difficulty : 'difficulty',
    question : 'question',
    correct_answer : 'correctAnswer',
    incorrect_answers : ['incorrectAnswer1', 'incorrectAnswer2', 'incorrectAnswer3']
};

describe('Quizのテスト', () => {
    it('Quizが所望のクイズ問題を返しているかの確認', () => {
        const quiz = new Quiz(testObj);
        assert.equal(quiz.category, 'category', true);
        assert.equal(quiz.type, 'type', true);
        assert.equal(quiz.category, 'category', true);
        assert.equal(quiz.difficulty, 'difficulty', true);
        assert.equal(quiz.question, 'question', true);
        assert.equal(quiz.correctAnswer, 'correctAnswer', true);
        assert.equal(Array.isArray(quiz.incorrectAnswers), true);
        assert.equal(Array.isArray(quiz.answers), true);
    });  
});