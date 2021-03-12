// This code in combination with .no-js .js in css enables a class on the document that will let you determine how the page looks with/without JavaScript enabled
document.documentElement.className = document.documentElement.className.replace
    ('no-js', 'js');

const nameEl = document.querySelector('#name');
const toppingEl = document.querySelector('#topping');
const answerEl = document.querySelector('#answer');
const askEl = document.querySelector('#ask');

// console.log(nameEl, toppingEl, answerEl, askEl);

// const name = prompt('Hello, baby');


// console.log(nameEl.innerHTML);
// console.log(name);

const askQuestions = function () {
    const name = prompt('What is your name?');
    const topping = prompt('What is your favorit pizza topping?');


    nameEl.innerHTML = name;
    toppingEl.innerHTML = topping;

    answerEl.classList.remove('hidden');
}

// console.log(nameEl);

askEl.addEventListener('click', askQuestions);


// let cursor = document.querySelector('#light');

// const onMouseMove = (e) =>{
//    cursor.style.left = e.pageX - (cursor.clientWidth / 2) + 'px';
//    cursor.style.top = e.pageY - (cursor.clientHeight / 2) + 'px';
// }
// document.addEventListener('mousemove', onMouseMove);

let point = document.querySelector('.point'),
    bg = document.querySelector('.bg');

bg.addEventListener('mousemove', movePoint);

function movePoint(e){
  let x = e.clientX;
  let y = e.clientY;
  point.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
 
//   if (y < window.innerHeight/2) {
//     point.style.background = 'rgb(200, 100, 200)';
//     point.style.boxShadow = '0 0 50px 80px rgb(200, 100, 200)';
//   } else {
//     point.style.background = 'rgb(10, 2, 3)';
//     point.style.boxShadow = '0 0 50px 80px rgb(10, 2, 3)'
  }
}