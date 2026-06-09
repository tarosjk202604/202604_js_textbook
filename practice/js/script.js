// ステップ1 掛け算を行う関数を作成しよう
// 結果は返り値にして、コンソールに出す
// 関数名は multiply、引数は2つ設定し、a, b とする
const multiply = (a, b) => {
    // const result = a * b;
    // return result;
    return a * b;
};

console.log(multiply(3, 4.12));

// ステップ2. 掛け算しつつ、小数点以下の数値を切り捨てる関数を作成しよう
// 関数名 multiplyAndFloor、引数はa, bとする
// 結果は返り値にして、コンソールに出す
// 切り捨てには Mathオブジェクトのfloorメソッドを使用する
const multiplyAndFloor = (a, b) => {
    return Math.floor(a * b);
};
console.log(multiplyAndFloor(34, 12.08));


// ステップ3. 入力欄の入力値を「数値」に変換しよう
// ボタンをクリックして入力された数字を数値型に変換し、コンソール出力してください
// 数値(整数)に変換する関数 parseInt

const inputNum = document.querySelector('#inputNum');
const convertBtn = document.querySelector('#convertBtn');

convertBtn.addEventListener('click', () => {
    console.log(typeof inputNum.value);
    console.log(parseInt(inputNum.value));
    console.log(typeof parseInt(inputNum.value));
});