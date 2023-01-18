//  kabisa yilini hissoblovchi dasturini tuzish


let year = Number(prompt("kerakli yilni kiritng"));

let xisob = year % 4;
xisob == 0 && console.log(year, ' yil kabisa yili');
xisob !== 0 && console.log(year, ' yil kabisa yili emas');