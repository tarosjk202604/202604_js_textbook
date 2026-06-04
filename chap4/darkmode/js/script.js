const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // もし(ボタンのテキストが「ダークモードにする」になっている) {
    if (btn.textContent === 'ダークモードにする') {
        // ボタンテキスト = 「ライトモードにする」に変更;
        btn.textContent = 'ライトモードにする';
        // ボタンの背景色も変えるのであれば
        btn.style.backgroundColor = 'orange';

        // } そうでないなら(「ライトモードにする」になっている) {
    } else {
        // ボタンテキスト = 「ダークモードにする」に変更;
        btn.textContent = 'ダークモードにする';
        btn.style.backgroundColor = '';
    }

    // btn.textContent = btn.textContent === 'ダークモードにする' ? 'ライトモードにする' : 'ダークモードにする';
});