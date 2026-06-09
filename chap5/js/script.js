const menu = document.querySelector('#menu');

const strawberry = {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
    // メソッドの作り方
    fn: function () {
        console.log('メソッドを呼び出しました');
    }
};
console.log(strawberry);
console.log(strawberry.name); // ドット記法
console.log(strawberry['name']); // ブラケット記法
strawberry.fn();

const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400,
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500,
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 400,
    },
    {
        name: 'イチヂク',
        img: 'fig.jpg',
        price: 500,
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400,
    },
];
console.log(lists);
console.log(lists.length); // 配列内のデータ数のプロパティ
console.log(lists[0]);
console.log(lists[0].img);

for (let i = 0; i < lists.length; i++) {
    // const name = lists[i].name;
    // const img = lists[i].img;
    // const price = lists[i].price;
    const { name, img, price } = lists[i];

    const content = `<div>
    <img src="images/${img}" alt="">
    <h2>${name}</h2>
    <p>${price}円</p>
    </div>`;

    // タグが全て文字として表示されてしまう
    // menu.textContent = content;
    menu.insertAdjacentHTML('beforeend', content);
}



// for文を使った繰り返し処理
for (let i = 1; i <= 10; i++) {
    console.log(`${i}回目のこんにちは`);
}

// 変数の定義
let j = 1;
j = j + 1;
console.log(j);

j += 1; // j = j + 1;と同じ
console.log(j);

j++; // j = j + 1; j += 1 と同じ
console.log(j);