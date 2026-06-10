// ローディング
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
    // loadingAreaGrey.animate({
    //     opacity: [1, 0],
    //     visibility: 'hidden',
    // }, {
    //     duration: 2000,
    //     delay: 1200,
    //     easing: 'ease',
    //     fill: 'forwards',
    // });

    loadingAreaGreen.animate({
        translate: ['0 100vh', '0 -100vh'],
    }, {
        duration: 2000,
        delay: 800,
        easing: 'ease',
        fill: 'forwards',
    });
});