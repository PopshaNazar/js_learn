'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
// console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;
btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('hi');

div.classList.add('black');
// document.body.append(div);
wrapper.append(div);

// wrapper.prepend(div);
// hearts[0].after(div);

// circles[0].remove();

hearts[0].replaceWith(circles[0]);
// circles[0].replaceWith(hearts[0]);

// div.innerHTML = "<h1>Hello World</h1>";
div.textContent = "Hello";

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>')