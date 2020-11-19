const $btn = document.querySelector('#btn-kick');
const $btnVolt = document.querySelector('#btn-volt');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  demageHP: 100,
  elHP: document.querySelector('#health-character'),
  elProgressBar: document.querySelector('#progressbar-character')
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  demageHP: 100,
  elHP: document.querySelector('#health-enemy'),
  elProgressBar: document.querySelector('#progressbar-enemy')
}

$btn.addEventListener('click', function () {
  console.log('click');
  changeHP(random(20), character);
  changeHP(random(20), enemy);
});

// *********** Новая кнопка ***********
$btnVolt.addEventListener('click', function () {
  console.log('krit');
  finalBlow(39, character);
  finalBlow(39, enemy);
});

//*********** init app ***********
function init () {
  console.log('Start Game!');

  renderHPLife(character);
  renderProgressBar(character);
  
  renderHPLife(enemy);
  renderProgressBar(enemy);
}

function renderHP (person) {
  renderHPLife(person);
  renderProgressBar(person);
}

function renderHPLife (person) {
  person.elHP.innerText = person.demageHP + ' / ' + person.defaultHP;
}

function renderProgressBar (person) {
  person.elProgressBar.style.width = person.demageHP + '%';
}

function changeHP (count, person) {
  if (person.demageHP < count) {
    person.defaultHP = 0;
    alert('Бедный ' + person.name + ' проиграл бой!');
    $btn.disabled = true;
  } else {
    person.demageHP -= count;
  }

  renderHP(person);
}

// ********** Функция критического удара **********
function finalBlow (count ,person) {
  if (person.demageHP < count) {
    person.demageHP = 0;
    $btnVolt.disabled = true;
    $btn.disabled = true;
    $btnVolt.style.background = '#ff0000';
    $btnVolt.style.color = '#ffffff';
  }

  renderHP(person);
}

function random (num) {
  return Math.ceil(Math.random() * num);
}


init();
