console.log(document.querySelector('#colorPicker').value);
// console.dir(document.querySelector('#colorPicker'));

console.dir(document.querySelector('#colorText').textContent);
// document.querySelector('#colorText').textContent = 'カラーコード:';
// document.querySelector('#colorText').textContent = 'カラーコード:' + document.querySelector('#colorPicker').value;
// document.querySelector('#colorText').textContent = `カラーコード:${document.querySelector('#colorPicker').value}`;

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// text.textContent = `カラーコード:${color.value}`;

const colorBg = () => {
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード:${color.value} (white)`;
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード:${color.value} (black)`;
    } else {
        text.textContent = `カラーコード:${color.value}`;
    }
};

// カラーピッカー(主語)で色が選択されたら(イベント)、カラーコードを表示する(やりたいこと)
// カラーピッカー.addEventListener('色が選択された', やりたいこと)
color.addEventListener('input', colorBg);
/*
color.addEventListener('input', () => {
    text.textContent = `カラーコード:${color.value}`;
});
*/

/**
 * 挨拶メッセージと天気を表示する関数
 * @param {string} name 
 * @param {string} weather 
 */
const message = (name, weather = 'まだわかりません') => {
    // console.log(`${name}さん、こんにちは! 今日の天気は${weather}です。`);
    console.log('あいうえお');
    return `${name}さん、こんにちは! 今日の天気は${weather}です。`;

    // return以降に書く処理は無効
    console.log('かきくけこ');
};

const returnedMsg = message('山田太郎', '晴れ');
message('ポチ', '雨');
message('次郎');

// alert(returnedMsg);

console.dir(text);