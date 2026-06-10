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

// ステップ4. 2つの入力欄から数値を取得し、数値に変換
// 掛け算と切り捨てを実行 (multiplyAndFloorを呼び出す)
// 結果をコンソールに出力
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const multiplyBtn = document.querySelector('#multiplyBtn');

multiplyBtn.addEventListener('click', () => {
    const input1Parsed = parseInt(input1.value);
    const input2Parsed = parseInt(input2.value);
    console.log(multiplyAndFloor(input1Parsed, input2Parsed));
});

// Numberオブジェクトに文字列の数字を渡すと数値変換される
// Number('12.34') -> 12.34