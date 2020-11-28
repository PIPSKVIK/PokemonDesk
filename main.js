import generateLog from './modules/generateLog.js';
import Pokemon from './modules/pokemon.js';
import random from './modules/randon.js';
import renderLogs from './modules/renderLogs.js';
import clickListener from './modules/clickListener.js';
import renderButtonСountdown from './modules/renderButtonCountdown.js';

function $querySelector (value) {
  return document.querySelector(value)
}
const $btn = $querySelector('#btn-kick');
const $btnVolt = $querySelector('#btn-volt');
const $btnRenderSkillJolt = $querySelector('.button__count-skill');
const $btnRenderSkillHit = $querySelector('.button__volt-count');
$btnVolt.disabled = true;

const randomNumber = 12;
const critHitNumber = 30;
const thunderJoltMaxClick = 12;
const criticalHitMexClick = 3;

const renderButtonСountdownJolt = renderButtonСountdown(thunderJoltMaxClick, $btnRenderSkillJolt);
const renderButtonCountdownHit = renderButtonСountdown(criticalHitMexClick, $btnRenderSkillHit);

const countListenerJolt = clickListener();
const countListenerHit = clickListener();


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
