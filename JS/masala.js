//                     3-  MASALA              //
//  kabisa yilini hissoblovchi dasturini tuzish

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return `${year}- Kabisa yili`
//     } else {
//         return `${year}- Kabisa yili emas`
//     }

// }
// [2000, 2004, 4, 2400, 2404, 1300, 900, 1300, 1200, 2000, 1800, 1900, 2100, 1, 4000, 5000].forEach((year) =>
//     console.log(isLeapYear(year))
// );







//                      2     MASALA              //
//              palindrome songa tekshiruvchi funksiya
//

// let num1 = 123454321;
// let num2 = 345645;
// let num3 = 987789;
// let num4 = 555555;
// let num5 = 852258;
// let num6 = 15951;

// function palindromNum(number) {
//     let newArray = [];
//     newArray = String(number).split('').reverse();
//     let b = Number(newArray.join(''));
//     console.log(number);
//     if (number == b) {
//         return 'Palindrom son';
//     } else {
//         return 'Palindrom son emas';
//     }

// }
// console.log('bu', palindromNum(121));













//
//                    4-masala      
//                   .                     // 




// let array = [2, 4, -5, 7, -12, 1, 0, 10, -6, -9];
// for (i = 0; i < array.length; i++) {
//     let newArray = [];
//     if (array[i] < 0) {
//         newArray.push(array[i]);
//         console.log(newArray);
//     }
// }