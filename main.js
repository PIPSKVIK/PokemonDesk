const $btn = document.querySelector('#btn-kick');
const $btnVolt = document.querySelector('#btn-volt');

const randomNumber = 20;
const critHitNumber = 39;
const defaultHP = 100;
const demageHP = 100;

const character = {
  name: 'Pikachu',
  defaultHP,
  demageHP,
  elHP: document.querySelector('#health-character'),
  elProgressBar: document.querySelector('#progressbar-character'),
  renderHPLife,
  changeHP,
  finalBlow,
  renderProgressBar,
  kritPanchButtonActiv
}

const enemy = {
  name: 'Charmander',
  defaultHP,
  demageHP,
  elHP: document.querySelector('#health-enemy'),
  elProgressBar: document.querySelector('#progressbar-enemy'),
  renderHPLife,
  changeHP,
  finalBlow,
  renderProgressBar,
  kritPanchButtonActiv
}

// *********** Кнопка основного удара ***********
$btn.addEventListener('click', function () {
  console.log('click');
  character.changeHP(random(randomNumber));
  enemy.changeHP(random(randomNumber));

  character.kritPanchButtonActiv(critHitNumber);
  enemy.kritPanchButtonActiv(critHitNumber);
});

// *********** Новая кнопка ***********
$btnVolt.addEventListener('click', function () {
  character.finalBlow(critHitNumber);
  enemy.finalBlow(critHitNumber);
});

//*********** init app ***********
function init () {
  console.log('Start Game!');
  $btnVolt.disabled = true; // Блокируем кнопку крит удара!

  character.renderHPLife();
  character.renderProgressBar();
  
  enemy.renderHPLife();
  enemy.renderProgressBar();
}

// правда в этом блоке пришлось вызвать несколько раз функцию, но
// за то на this.
function renderHP () {
  character.renderHPLife();
  enemy.renderHPLife();

  character.renderProgressBar();
  enemy.renderProgressBar();
}

function renderHPLife () {
  this.elHP.innerText = this.demageHP + ' / ' + this.defaultHP;
}

function renderProgressBar () {
  this.elProgressBar.style.width = this.demageHP + '%';
}

function changeHP (count) {
  if (this.demageHP < count) {
    this.defaultHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!');
    $btn.disabled = true;
  } else {
    this.demageHP -= count;
  }

  renderHP();
}

// ********** Функция критического удара **********
function finalBlow (count) {

  if (this.demageHP <= count) {
    this.demageHP = 0;
    $btn.disabled = true;
    $btnVolt.disabled = true;
    alert(this.name + ' Получил Критический удар!')
  }

  renderHP();
}

// ********** Функция вешает стили на коку и активирует ее когда можно применить критический удар **********
function kritPanchButtonActiv (count) {
  
  if (this.demageHP <= count) {

    alert('Можно применить Сritical Hit => ' + this.name)
    $btnVolt.disabled = false;
    $btnVolt.style.background = '#ff0000';
    $btnVolt.style.color = '#ffffff';
  }
}

function random (num) {
  return Math.ceil(Math.random() * num);
}

init();
