function $querySelector (value) {
  return document.querySelector(value)
}
const $btn = $querySelector('#btn-kick');
const $btnVolt = $querySelector('#btn-volt');
const $logs = $querySelector('#logs');
const $btnRenderSkillJolt = $querySelector('.button__count-skill');
const $btnRenderSkillHit = $querySelector('.button__volt-count')
const $btnRessetGame = $querySelector('#btn-resset');

const randomNumber = 12;
const critHitNumber = 30;
const defaultHP = 100;
const demageHP = 100;

const thunderJoltMaxClick = 12;
const criticalHitMexClick = 3;


//********** Герои **********
const character = {
  name: 'Pikachu',
  defaultHP,
  demageHP,
  elHP: $querySelector('#health-character'),
  elProgressBar: $querySelector('#progressbar-character'),
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
  elHP: $querySelector('#health-enemy'),
  elProgressBar: $querySelector('#progressbar-enemy'),
  renderHPLife,
  changeHP,
  finalBlow,
  renderProgressBar,
  kritPanchButtonActiv
}

// *********** HomeWork-4 ***********

function clickListener () {
  let counter = 0;

  return (kickLimit = 100, btn) => {
    counter++;
    console.log(`click: ${counter}`);

    if (counter >= kickLimit) {
      console.log('STOP');
      btn.disabled = true;
    }
  }
}

function renderButtonСountdown (number, element) {
  let count = number;
  return function () {
    count -= 1;
    element.innerText = `${count}`;
  }
}

const renderButtonСountdownJolt = renderButtonСountdown(thunderJoltMaxClick, $btnRenderSkillJolt);
const renderButtonCountdownHit = renderButtonСountdown(criticalHitMexClick, $btnRenderSkillHit);

const countListenerJolt = clickListener();
const countListenerHit = clickListener();

// *********** События ***********
$btn.addEventListener('click', function () {
  character.changeHP(random(randomNumber));
  enemy.changeHP(random(randomNumber));

  character.kritPanchButtonActiv(critHitNumber);
  enemy.kritPanchButtonActiv(critHitNumber);

  countListenerJolt(thunderJoltMaxClick, $btn);
  renderButtonСountdownJolt();
});

$btnVolt.addEventListener('click', function () {
  character.finalBlow(critHitNumber);
  enemy.finalBlow(critHitNumber);

  countListenerHit(criticalHitMexClick, $btnVolt);
  renderButtonCountdownHit();
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

// правда в этом блоке пришлось вызвать несколько раз функцию, но зато на this.
function renderHP () {
  character.renderHPLife();
  enemy.renderHPLife();

  character.renderProgressBar();
  enemy.renderProgressBar();
}

function renderHPLife () {
  this.elHP.innerText = this.demageHP + ' / ' + this.defaultHP;
  if (this.demageHP <= 80) {
    this.elHP.style.color = '#ffcc00';
  }

  if (this.demageHP <= 29) {
    this.elHP.style.color = '#d20000';
  }
}

function renderProgressBar () {
  this.elProgressBar.style.width = this.demageHP + '%';
  if (this.demageHP <= 80) {
    this.elProgressBar.classList.add('low');
  }

  if (this.demageHP <= 29) {
    this.elProgressBar.classList.add('critical');
  }
}


function changeHP (count) {
  this.demageHP -= count;

  const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
  renderLogs(log);

  if (this.demageHP <= count) {
    this.defaultHP = 0;
    $btn.disabled = true;
  }

  renderHP();
}

// ********** Функция критического удара **********
function finalBlow (count) {
  const finalBlowText = this.name + ' Получил Критический удар!';

  if (this.demageHP <= count) {
    this.demageHP -= 10;
    renderLogs(finalBlowText);
  }
  if (this.demageHP <= 0) {
    this.demageHP = 0;
    $btnVolt.disabled = true;
  }

  renderHP();
}

// ********** Функция вешает стили на коку и активирует ее когда можно применить критический удар **********
function kritPanchButtonActiv (count) {
  const kritPanchLogMessage = 'Можно применить Сritical Hit => ' + this.name;

  if (this.demageHP <= count) {
    renderLogs(kritPanchLogMessage);
    $btnVolt.disabled = false;
    $btnVolt.style.background = '#ff0000';
    $btnVolt.style.color = '#ffffff';
  }
}

function random (num) {
  return Math.ceil(Math.random() * num);
}


function generateLog (firstPerson, secondPerson, demage) {
    const logs = [
    `[${firstPerson.name}] вспомнил что-то важное, но неожиданно
    [${secondPerson.name}], не помня себя от испуга, ударил в предплечье врага.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] поперхнулся, и за это
    [${secondPerson.name}] с испугу приложил прямой удар коленом в лоб врага.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] забылся, но в это время наглый
    [${secondPerson.name}], приняв волевое решение, неслышно подойдя сзади, ударил.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] пришел в себя, но неожиданно
    [${secondPerson.name}] случайно нанес мощнейший удар.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] поперхнулся, но в это время
    [${secondPerson.name}] нехотя раздробил кулаком \<вырезанно цензурой\> противника.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] удивился, а
    [${secondPerson.name}] пошатнувшись влепил подлый удар.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] высморкался, но неожиданно
    [${secondPerson.name}]провел дробящий удар.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] пошатнулся, и внезапно наглый
    [${secondPerson.name}] беспричинно ударил в ногу противника
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] расстроился, как вдруг, неожиданно
    [${secondPerson.name}] случайно влепил стопой в живот соперника.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`,

    `[${firstPerson.name}] пытался что-то сказать, но вдруг, неожиданно
    [${secondPerson.name}] со скуки, разбил бровь сопернику.
    [${firstPerson.name}] получил -[${demage}] HP
    [${firstPerson.demageHP} / ${firstPerson.defaultHP}]`
  ];

  return logs[random(logs.length) - 1];
}

// ************ render logs ************

const renderLogs = function (log) {
  for (let i = 0; i < 1; i++) {
    const $p = document.createElement('p');
    $p.classList.add('logs__text')
    $p.innerText = `${log}`;
    $logs.insertBefore($p, $logs.children[0]);
  }
}

init();
