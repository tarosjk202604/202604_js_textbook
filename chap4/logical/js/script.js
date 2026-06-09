const hour = 7;

if (hour >= 9 && hour < 12) {
    console.log('モーニング会員');
}

if (hour === 8 || hour === 23) {
    console.log('早朝＆夜間会員');
}