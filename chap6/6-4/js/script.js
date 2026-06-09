const heading = document.querySelector('#heading');

const keyframes = {
    // opacity: [0, 1],
    // // translate: ['0 50px', 0],
    // rotate: ['x 360deg', 0],
    // backgroundColor: ['red', 'green'],
    // color: ['#f66', '#fc2', '#0c6', '#0bd'],
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
};
const options = {
    // duration: 2000,
    // duration: 8000,
    duration: 1000,
    easing: 'ease',
    // direction: 'alternate', // タイムラインを → ← (折り返す)動き
    // iterations: Infinity,

    //アニメーション開始前と終了後のスタイルの扱い
    // backwards: 開始前をキープ / forwards: 終了後をキープ / both: 両方キープ / none: なし
    fill: 'both',
    // delay: 2000,
};


heading.animate(keyframes, options);


// #blobアニメーション
const blob = document.querySelector('#blob');

const blobFrames = {
    borderRadius: [
        '20% 50% 50% 70% / 50% 50% 70% 50%',
        '50% 20% 50% 50% / 40% 40% 60% 60%',
        '50% 40% 20% 40% / 40% 50% 50% 60%',
        '50% 50% 50% 20% / 40% 40% 60% 60%',
    ]
};
const blobOptions = {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
};

blob.animate(blobFrames, blobOptions);