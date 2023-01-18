//  kabisa yilini hissoblovchi dasturini tuzish
//


let year = Number(prompt("kerakli yilni kiritng"));

let xisob = year % 4;
xisob == 0 && console.log(year, ' yil kabisa yili');
xisob !== 0 && console.log(year, ' yil kabisa yili emas');





//
//palindrome songa tekshiruvchi funksiya
//

function palindrome(str) {
    let reg = /[\W_]/g;

    let smallStr = str.toLowerCase().replace(reg, '');

    let reversed = smallStr.split('').reverse().join('');
    if (reversed === smallStr) return true;

    return false;
}

palindrome("racecar");


//


//