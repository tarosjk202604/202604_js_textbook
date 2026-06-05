const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
    // console.log('キーアップ！');
    // テキストエリア(text)のvalue属性値(入力した文字)を取得し、さらにその文字数(length)を取得
    // それをspan(count)の内容として反映
    count.textContent = text.value.length;

    // もし(定数 text の文字数が100文字を超えるなら) {
    if (text.value.length > 100) {
        // 定数 count にクラス名 alert を追加する
        count.classList.add('alert');

        // } そうでないなら(100文字以下なら) {
    } else {
        // 定数 count からクラス名 alert を削除する
        count.classList.remove('alert');
    }
});