"use strict";

function makeSize(size) {
    return function () {
        document.body.style.fontSize = size + 'px';
    };
}

let setSize12 = makeSize(12);
let setSize14 = makeSize(14);
let setSize16 = makeSize(16);

document.getElementById('size-12').onclick = setSize12;
document.getElementById('size-14').onclick = setSize14;
document.getElementById('size-16').onclick = setSize16;

function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
    return function () {
        showHelp(help);
    };
}

function setupHelp() {
    var helpText = [{
            'id': 'email',
            'help': 'Ваш адрес e-mail'
        },
        {
            'id': 'name',
            'help': 'Ваше полное имя'
        },
        {
            'id': 'age',
            'help': 'Ваш возраст (Вам должно быть больше 16)'
        }
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
}

setupHelp();


function makeCounter() {
    let count = 0;

    function getCounter() {
        document.getElementById('count').innerHTML = count++;
    }
    return getCounter;
}
let counter = makeCounter();

document.getElementById('count').onclick = counter;


let age = prompt('How old are you?', 18);

let answer = (age < 18) ? () => alert('Hi!') : () => alert('Hello!');

answer();

let fun = text => document.write(text);
fun('abroad');


"use strict";



function factorial(x) {        //Объявление функции
    if (x <= 1) return 1;        //Проверка условия окончания расчета
    return factorial(x-1) + ' ' + x;   //Вызов этой же функции с уменьшенным на 1 аргументом
  }

  console.log(factorial(9));

   "use strict";
  let str = 'Factorial';
  for (let char of str) {
      console.log(char);
  }

  console.log(0.3.toFixed(20));
  console.log(0.2.toFixed(20));
  console.log((+0.2.toFixed(20) + +0.2.toFixed(20)).toFixed(20));
  console.log(9999999999999999999);
  console.log(+-0);

  console.log(isNaN(NaN));
  console.log(isNaN('str'));

"use strict";
  let num = +prompt("Enter a number", '');
  console.log(isFinite(num));


  function getNumber() {
      let num = prompt("Enter a number: ", 0);
      if(isFinite(num)) return alert("Number: ", num);
      return getNumber();
  }