//palindrome songa tekshiruvchi funksiya

function palindrome(str) {
    let reg = /[\W_]/g;

    let smallStr = str.toLowerCase().replace(reg, '');

    let reversed = smallStr.split('').reverse().join('');
    if (reversed === smallStr) return true;

    return false;
}

palindrome("racecar");