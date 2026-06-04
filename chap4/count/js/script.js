const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
    // console.log('キーアップ！');
    // テキストエリア(text)のvalue属性値(入力した文字)を取得し、さらにその文字数(length)を取得
    // それをspan(count)の内容として反映
    count.textContent = text.value.length;
});