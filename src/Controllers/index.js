//予め必要なモジュールを読み込んでおく
const quizFetcherModel = require('../Models/Quizfetcher');

let quizInstances = [];
let selectedAnswers = [];
let count = 0;
console.log('quizInstancesとcountが初期化されました');

//予めクイズデータを取得処理を実行しておく
quizFetcherModel.getQuizData();

//ホーム画面表示
const indexRender = (_req) => {
    //クイズデータを取得
    const quizDataObj = quizFetcherModel.quizDataObj;
    //クイズインスタンス配列を生成
    quizInstances = quizDataObj.results.map((element) => {
        //QuizClassをインスタンス化
        const quiz = new quizModel.Quiz(element);
        return quiz;
    });

    //ホーム画面用ejsファイルをレンダリング
    _req.render('index.ejs',
    {title : 'ようこそ！！',
    content : '以下のボタンで開始します'});
};

//クイズ画面表示
const quizRender = (_req) => {
    //ejsファイルへ受け渡し用にクイズインスタンスにcountを追加
    quizInstances[count].count = count + 1;

    //クイズ画面用ejsファイルをレンダリング
    _req.render('quiz.ejs', quizInstances[count]);

    count++;
};

//リザルト画面表示
const resultRender = (_req) => {
    let answerCount = 0;
    console.log(selectedAnswers);
    for(i = 0; i<10; i++){
        quizInstances[i].correctAnswer;
    }
    console.log(quizInstances)
    selectedAnswers.forEach((element, index) => {
        if (element === quizInstances[index].correctAnswer){
            answerCount++;
        }
    });

    //クイズ画面用ejsファイルをレンダリング
    _req.render('result.ejs', 
    {title : 'あなたの正答数は・・・',
    content : answerCount + '問です'
    });
    
    //初期化
    quizInstances = [];
    count = 0;
    quizFetcherModel.getQuizData();
    console.log('quizInstancesとcountが初期化されました');
};

const answerCounter = (selectedAnswer) => {
    selectedAnswers.push(selectedAnswer);
}

//モジュールとしてexport
exports.indexRender = indexRender;
exports.quizRender = quizRender;
exports.resultRender = resultRender;
exports.answerCounter = answerCounter;