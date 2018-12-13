((global) => {
    //DOM  
    const questionMessage = document.getElementById('questionMessage');
    const start = document.getElementById('start');
    global.title = document.getElementById('title'); 
    global.subTitle = document.getElementById('subTitle');

    //グローバル変数を宣言、初期化
    global.count = 0; //現在が何問目の出題かをカウント
    global.correctCount = 0; //正答した回数をカウント

    //文章の初期化
    questionMessage.innerHTML = '以下のボタンをクリック';
    title.innerHTML = 'ようこそ';

    //クイズを取得した後にページを更新する
    //取得完了前にページを更新してしまうとクイズインスタンスにクイズデータがセットされる前になので、ページが正常に表示されない
    fetch('http://localhost:3000/api/quiz')
        .then(res => res.json())
        .then(quizInstances => {
            screenUpdate(quizInstances);
        })
        .catch((error) => {
            console.log('クイズデータの取得に失敗しました：', error);
            alert('エラーが発生しました');
        });

    //クイズデータの取得中、その旨を表示する
    questionMessage.innerHTML = '少々お待ちください';
    title.innerHTML = '取得中';

})(window);