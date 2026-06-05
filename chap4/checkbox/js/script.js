// 要素の取得
const isAgreed = document.querySelector('#check'); //チェックボックス
const btn = document.querySelector('#btn'); //ボタン
// const btn = document.querySelector('#check'); //ボタン


// ラジオボタン、チェックボックス、セレクトメニューで選択肢を変えると change イベントが発生する
isAgreed.addEventListener('change', () => {
    // console.log('チェックイベント発生');

    // もし(チェックボックスにチェックが入っているなら) {
    // if (isAgreed.checked === true) {
    /*
    if (isAgreed.checked) {
        // ボタンの無効化を無しにする(=ボタンがクリックできる)
        btn.disabled = false;

        // } そうじゃないなら(チェックが入っていないなら) {
    } else {
        // ボタンを無効化する(=ボタンがクリックできない)
        btn.disabled = true;
    }
    */
    // ↓コンパクトにすると...
    btn.disabled = !isAgreed.checked;
});