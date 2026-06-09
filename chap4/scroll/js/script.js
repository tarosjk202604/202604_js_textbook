/*
TODO:
✅ 1 プログレスバーを作成する
✅ 2 スクロール量を取得する
✅ 3 ページのサイズを取得する
✅ 4 スクロールされた割合を計算する
5 プログレスバーの幅に設定する
*/

const bar = document.querySelector('#bar');

// 2 スクロール量を取得する
const getScrollPercent = () => {
    // スクロール量
    const scrolled = window.scrollY;
    console.log(`${scrolled} スクロールされました`);

    // offsetHeight, ✅ scrollHeight
    // ページ全体の高さ(document.documentElementはHTML要素)
    const pageHeight = document.documentElement.scrollHeight;

    // 表示領域の高さ
    const viewHeight = document.documentElement.clientHeight;

    console.log(pageHeight, viewHeight);

    // スクロール量 ÷ (ページの高さ - 表示領域の高さ) x 100
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    console.log(percentage);

    bar.style.width = `${percentage}%`;
};

window.addEventListener('scroll', getScrollPercent);