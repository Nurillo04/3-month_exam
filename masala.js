//  kabisa yilini hissoblovchi dasturini tuzish
//




// let year = Number(prompt("kerakli yilni kiritng"));

// let xisob = year % 4;
// xisob == 0 && console.log(year, ' yil kabisa yili');
// xisob !== 0 && console.log(year, ' yil kabisa yili emas');




//  kabisa yilini hissoblovchi dasturini tuzish

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year}- Kabisa yili`
    } else {
        return `${year}- Kabisa yili emas`
    }

}
[2000, 2004, 4, 2400, 2404, 1300, 900, 1300, 1200, 2000, 1800, 1900, 2100, 1, 4000, 5000].forEach((year) =>
    console.log(isLeapYear(year))
);











//
//palindrome songa tekshiruvchi funksiya
//

// function palindrome(str) {
//     let reg = /[\W_]/g;

//     let smallStr = str.toLowerCase().replace(reg, '');

//     let reversed = smallStr.split('').reverse().join('');
//     if (reversed === smallStr) return true;

//     return false;
// }

// palindrome("racecar");
// palindrome("12321");


//


//