// 1. 監視ロボットにやって欲しい内容(関数)
const showKirin = (entries) => {
    console.log(entries[0]);
    console.log(entries[0].target);

    const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0', 0],
    };
    const keyframesAlt = {
        opacity: [1, 0],
        translate: [0, '200px 0'],
    };

    const options = {
        fill: 'both',
        duration: 600,
    };

    if (entries[0].isIntersecting) {
        entries[0].target.animate(keyframes, options);
    } else {
        entries[0].target.animate(keyframesAlt, options);
    }


};

const options = {
    rootMargin: '-50px 0px',
    threshold: 0.5,
};

// 2. 監視ロボットの導入
// 3. 1で決めた動作内容を指示する。引数として1を渡す
const kirinObserver = new IntersectionObserver(showKirin, options);

// 4. 監視ロボットに監視対象を教えて1を実行してもらう
kirinObserver.observe(document.querySelector('#kirin'));


const sample = (fn) => {
    const sampleMessage = '今日は曇りです';
    // 関数内で別の関数を実行する
    fn(sampleMessage);
};

const innerSample = (message) => {
    console.log(message);
};

sample(innerSample);

// btn.addEventListener('click', (e) => {})