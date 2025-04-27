const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay')


// btn.onclick = function(){
//     alert('Click');
// }
// btn.onclick = function(){
//     alert('second Click');
// };


// let i = 0;
const deletElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deletElement);
    // }
    // e.target.remove();
}
// btn.addEventListener('click', deletElement);
// overlay.addEventListener('click', deletElement);
btns.forEach(btn => {
    btn.addEventListener('click', deletElement, { once: true });
})

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});
