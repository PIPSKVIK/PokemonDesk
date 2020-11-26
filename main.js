import Pokemon from './modules/pokemon.js'
import random from './modules/randon.js'

function $querySelector (value) {
  return document.querySelector(value)
}
const $btn = $querySelector('#btn-kick');
const $btnVolt = $querySelector('#btn-volt');
const $logs = $querySelector('#logs');
const $btnRenderSkillJolt = $querySelector('.button__count-skill');
const $btnRenderSkillHit = $querySelector('.button__volt-count');
$btnVolt.disabled = true;

const randomNumber = 12;
const critHitNumber = 30;
const thunderJoltMaxClick = 12;
const criticalHitMexClick = 3;


//********** Герои **********

const player1 = new Pokemon ({
  name: 'Pikachu',
  type: 'electric',
  hp: 100,
  selectors: 'character'
})

const player2 = new Pokemon ({
  name: 'Charmander',
  type: 'fire',
  hp: 100,
  selectors: 'enemy'
})

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
  player1.changeHP(random(randomNumber),function (count){
      const log = generateLog(player2, player1, count);
      renderLogs(log);
    });
  player2.changeHP(random(randomNumber),function (count){
      const log = generateLog(player1, player2, count);
      renderLogs(log);
    });

  player1.kritPanchButtonActiv(critHitNumber, $btnVolt, function (count) {
    renderLogs(count);
  });
  player2.kritPanchButtonActiv(critHitNumber, $btnVolt, function (count) {
    renderLogs(count);
  });

  countListenerJolt(thunderJoltMaxClick, $btn);
  renderButtonСountdownJolt();
});

$btnVolt.addEventListener('click', function () {
  player1.changeHP(random(randomNumber),
    function (count){
      const log = generateLog(player2, player1, count);
      renderLogs(log);
    });
  player2.changeHP(random(randomNumber),
    function (count){
      const log = generateLog(player1, player2, count);
      renderLogs(log);
    });
    player1.finalBlow(critHitNumber, $btnVolt, function (count) {
      renderLogs(count);
    });
    player2.finalBlow(critHitNumber, $btnVolt, function (count) {
      renderLogs(count);
    });

  countListenerHit(criticalHitMexClick, $btnVolt);
  renderButtonCountdownHit();
});

function generateLog (firstPerson, secondPerson, demage) {
  const logs = [
  `[${firstPerson.name}] вспомнил что-то важное, но неожиданно
  [${secondPerson.name}], не помня себя от испуга, ударил в предплечье врага.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] поперхнулся, и за это
  [${secondPerson.name}] с испугу приложил прямой удар коленом в лоб врага.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] забылся, но в это время наглый
  [${secondPerson.name}], приняв волевое решение, неслышно подойдя сзади, ударил.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] пришел в себя, но неожиданно
  [${secondPerson.name}] случайно нанес мощнейший удар.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] поперхнулся, но в это время
  [${secondPerson.name}] нехотя раздробил кулаком \<вырезанно цензурой\> противника.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] удивился, а
  [${secondPerson.name}] пошатнувшись влепил подлый удар.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] высморкался, но неожиданно
  [${secondPerson.name}]провел дробящий удар.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] пошатнулся, и внезапно наглый
  [${secondPerson.name}] беспричинно ударил в ногу противника
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] расстроился, как вдруг, неожиданно
  [${secondPerson.name}] случайно влепил стопой в живот соперника.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`,

  `[${firstPerson.name}] пытался что-то сказать, но вдруг, неожиданно
  [${secondPerson.name}] со скуки, разбил бровь сопернику.
  [${firstPerson.name}] получил -[${demage}] HP
  [${firstPerson.hp.current} / ${firstPerson.hp.total}]`
];

  return logs[random(logs.length) - 1];
}


// function random (num) {
//   return Math.ceil(Math.random() * num);
// }

// ************ render logs ************

function renderLogs (log) {
  for (let i = 0; i < 1; i++) {
    const $p = document.createElement('p');
    $p.classList.add('logs__text')
    $p.innerText = `${log}`;
    $logs.insertBefore($p, $logs.children[0]);
  }
}
