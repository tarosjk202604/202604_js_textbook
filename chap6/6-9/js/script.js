const items = document.querySelectorAll('.img-item');
console.log(items);

for (let i = 0; i < items.length; i++) {

    const keyframes = {
        opacity: [0, 1],
        // rotate: ['x 90deg', 0],
        filter: ['blur(20px)', 'blur(0)'],
    };

    const options = {
        duration: 600,
        fill: 'both',
        delay: i * 300,
    };

    items[i].animate(keyframes, options);
}
