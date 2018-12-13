//--------------------------------
// ページを更新する関数
// [引数]クイズインスタンスを格納した配列
//--------------------------------
const screenUpdate = (_quizInstances) => {
    //10問目まで出題されていない場合
    if(window.count < _quizInstances.length){

        const quizInstance = _quizInstances[window.count];
        console.log(`${window.count + 1}問目のクイズデータをセットしました`);

        //文章の更新
        window.title.innerHTML = `問題${window.count + 1}`;
        window.subTitle.innerText = '[ジャンル] ' + quizInstance.category + '\n'; 
        window.subTitle.innerText += '[難易度] ' + quizInstance.difficulty;
        questionMessage.innerHTML = quizInstance.question;

        //Answerボタンの作成
        createAnswerButton(_quizInstances);
    }
    //10問目の出題が終わった場合
    else{
        //文章の更新
        window.title.innerHTML = 'あなたの正答数は' + window.correctCount + 'です！！';
        questionMessage.innerHTML = '再度チャレンジしたい場合は以下をクリック！！';
        window.subTitle.innerText = null;
        
        //returnボタンの生成
        let returnButton = document.createElement('button');
        returnButton.textContent = 'ホームに戻る';
        returnButton.addEventListener('click', () => {
            location.href = "/";
        });
        const bottom = document.getElementById('bottom');
        bottom.appendChild(returnButton);
    }
}

//--------------------------------
// 回答の選択肢ボタンを生成する関数
// [引数]クイズインスタンスを格納した配列
//--------------------------------
const createAnswerButton = (_quizInstances) =>{
    const quizInstance = _quizInstances[window.count];
    const answerElements = document.getElementsByTagName('td');

    console.log(quizInstance.answers)
    quizInstance.answers.forEach((element, index) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = element;
        answerElements[index].appendChild(buttonElement);
        buttonElement.addEventListener('click', (event) => {
            //クリックされた回数をインクリメント
            window.count++;
            //Answerボタンを削除
            deleteAnswerButton(); 
            //ページを更新
            screenUpdate(_quizInstances); 
            //正答か否かを判定
            selectedAnswer = event.target.textContent;
            judgeCorrectAnswer(quizInstance, selectedAnswer); 
        });
    });
};

//--------------------------------
// 回答の選択肢ボタンを削除する関数
// [引数]なし
//--------------------------------
const deleteAnswerButton = () => {
    const tabaleElement = document.getElementsByTagName('td');
    
    //getElementsByTagName('td')で取得した配列に対してforEachが使用できなかったのでfor分を使用しました。
    for(let i = 0; i < tabaleElement.length; i++){
        while(tabaleElement[i].firstChild){
            tabaleElement[i].removeChild(tabaleElement[i].firstChild);
        }
    }
};

//--------------------------------
// 何問正答したかを算出する関数
// [引数]選択した回答の文字列
//      クイズインスタンス
//--------------------------------
const judgeCorrectAnswer = (_quizInstance, _selectedAnswer) => {
    if(_selectedAnswer === _quizInstance.correctAnswer){
        window.correctCount++;
    }
};