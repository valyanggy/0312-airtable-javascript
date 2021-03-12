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