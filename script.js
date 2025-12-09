console.log(document);

const div1 = document.getElementById('div1');
console.log(div1);

div1.style.border = '1px solid black';

div1.className = 'box';

div1.classList.add('box1')

console.log(div1);


const div1Query = document.querySelector('#div1');

const pDiv1 = document.querySelectorAll('#div1 > p');

console.log(pDiv1);


for (const i in pDiv1) {
    pDiv1[i].innerHTML = `
        <span>${+i + 1}. New text in paragraph</span>
    `    
}

const newP = document.createElement('p');
newP.textContent = 'New element from DOM';
div1.appendChild(newP);

// HomeWork

const t = setInterval(move, 20);
// clearInterval(t);

const box = document.getElementById('box');

let step = 0;
let flag = true;
// let dir = 1;

function move() {
    // 1. Базовый вариант: плавно переместить #box из левого верхнего угла в правый нижний

    // step++;

    // box.style.top = step + 'px';
    // box.style.left = step + 'px';

    // if (step === 150) {
    //     clearInterval(t);
    // }

    // 2. Сложный вариант: плавно переместить #box из левого верхнего угла в правый нижний
    //    и обратно без остановки (челночный бег)

    // step += dir;

    flag ? step++ : step--;

    if (step === 150 || step === 0) {
        flag = !flag;
    }

    box.style.top = step + 'px';
    box.style.left = step + 'px';

}