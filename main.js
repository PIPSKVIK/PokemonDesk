import generateLog from './modules/generateLog.js';
import Pokemon from './modules/pokemon.js';
import random from './modules/randon.js';
import renderLogs from './modules/renderLogs.js';
import clickListener from './modules/clickListener.js';
import renderButtonСountdown from './modules/renderButtonCountdown.js';
import { pokemons } from './modules/pokemons.js';

const $control = document.querySelector('.control');


//********** Герои **********
let randomNamePlayer1 = random(5);
const randomPlayer1 = pokemons.find(item => item.name === pokemons[randomNamePlayer1].name);

let randomNamePlayer2 = random(5);
const randomPlayer2 = pokemons.find(item => item.name === pokemons[randomNamePlayer2].name)

let player1 = new Pokemon ({
  ...randomPlayer1,
  selectors: 'player1'
});

let player2 = new Pokemon ({
  ...randomPlayer2,
  selectors: 'player2'
});

// *********** События ***********
const $elImgPlayer1 = document.querySelector('#img-player1');
const $elImgPlayer2 = document.querySelector('#img-player2');
const $elNamePlayer1 = document.querySelector('#name-player1');
const $elNamePlayer2 = document.querySelector('#name-player2')

$elImgPlayer1.src = player1.img;
$elImgPlayer2.src = player2.img;

$elNamePlayer1.innerText = player1.name;
$elNamePlayer2.innerText = player2.name;

const finalGame = function (player1, player2) {
  if (player1 === 0 || player2 === 0) {
    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach($item => $item.remove());
  }
}

player1.attacks.forEach(item => {
  const $btn = document.createElement('button');
  const clickCount = clickListener(item.maxCount, $btn);
  const renderButtonCountdown = renderButtonСountdown(item.maxCount, $btn);

  $btn.classList.add('button');
  $btn.innerText = item.name;

  $btn.addEventListener('click', () => {
    let randomMinDemage = random(item.minDamage)
    setTimeout(() => {
      player1.changeHP(random(randomMinDemage),function (randomMinDemage){
        const log = generateLog(player1, player2, randomMinDemage, item.name);
        renderLogs(log);
        finalGame(player1.hp.current, player2.hp.current)
      })
    }, 500)
    setTimeout(() => {
      player2.changeHP(random(randomMinDemage),function (randomMinDemage){
        const log = generateLog(player2, player1, randomMinDemage, item.name);
        renderLogs(log);
        finalGame(player1.hp.current, player2.hp.current)
      })
    }, 1500)
    renderButtonCountdown();
    clickCount();;
  })
  $control.appendChild($btn);
});
