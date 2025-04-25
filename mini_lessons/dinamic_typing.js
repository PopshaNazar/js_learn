"use strict"
//to string
console.log(typeof (String(null)))
console.log(typeof (String(4)))

console.log(typeof (5 + '')); //ok

const num = 5;
console.log("https://www.instagram.com/" + num);

const fontSize = 26 + 'px';

//to number
console.log(typeof (Number(null)))
console.log(typeof (+'5'));
console.log(typeof (parseInt("15px")))


let answ = +prompt("hello", ""); //ok

//to boolean

// 0, '', null, undefined, NaN;

let switcher = null;
if (switcher) {
    console.log('Working...')
}
switcher = 1
if (switcher) {
    console.log('Working...')
}

console.log(typeof (Boolean('4')));
console.log(typeof (!!('4')));