// ローディング
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
    loadingAreaGrey.animate({
        opacity: [1, 0],
        visibility: 'hidden',
    }, {
        duration: 2000,
        delay: 1200,
        easing: 'ease',
        fill: 'forwards',
    });

    loadingAreaGreen.animate({
        translate: ['0 100vh', '0 -100vh'],
    }, {
        duration: 2000,
        delay: 800,
        easing: 'ease',
        fill: 'forwards',
    });

    loadingText.animate(
        [
            // キーフレーム1つ分
            {
                opacity: 1,
                offset: .8, //キーフレームの位置 80%
            },
            {
                opacity: 0,
                offset: 1, //キーフレームの位置 100%
            }
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        });
});

// 画像ギャラリー
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
console.log(mainImage, thumbImages);

// for (let i = 0; i < thumbImages.length; i++) {
//     thumbImages[i].addEventListener('mouseover', (event) => {
//         // console.log(thumbImages[i]);
//         console.log(event.target.src);
//         mainImage.src = event.target.src;
//         mainImage.animate({
//             opacity: [0, 1],
//         }, 500);
//     });
// }

thumbImages.forEach((thumbImage) => {
    console.log(thumbImage);
    thumbImage.addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({
            opacity: [0, 1],
        }, 500);
    });
});


// メニュー
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};
const navDuration = 2400;

menuOpen.addEventListener('click', () => {
    menuPanel.animate({
        translate: ['100vw', 0],
    }, menuOptions);


    menuItems.forEach((menuItem, index) => {
        console.log(index);
        menuItem.animate({
            opacity: [0, 1],
            translate: ['2rem', 0],
        }, {
            duration: navDuration,
            easing: 'ease',
            fill: 'forwards',
            delay: 300 * index + navDuration,
        });

    });
});

menuClose.addEventListener('click', () => {
    menuPanel.animate({
        translate: [0, '100vw'],
    }, menuOptions);

    // メニューアイテムを元の状態に戻す
    menuItems.forEach((menuItem) => {
        menuItem.animate({
            opacity: [1, 0],
        }, menuOptions);
    });
});