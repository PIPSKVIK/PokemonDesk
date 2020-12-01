import generateLog from './modules/generateLog.js';
import Pokemon from './modules/pokemon.js';
import { renderLogs, renderButtonСountdown, clickListener } from './modules/utils.js';

const $control = document.querySelector('.control');
const $buttonStartGame = document.querySelector('.button-start');
const $pokemonPlayer1 = document.querySelector('.player1');
const $pokemonPlayer2 = document.querySelector('.player2');
const $elImgPlayer1 = document.querySelector('#img-player1');
const $elImgPlayer2 = document.querySelector('#img-player2');
const $elNamePlayer1 = document.querySelector('#name-player1');
const $elNamePlayer2 = document.querySelector('#name-player2');

$control.style.display = 'none';
$pokemonPlayer1.style.display = 'none';
$pokemonPlayer2.style.display = 'none';

$buttonStartGame.addEventListener('click', () => {
  $control.style.display = 'inherit';
  $pokemonPlayer1.style.display = 'inherit';
  $pokemonPlayer2.style.display = 'inherit';
  $buttonStartGame.style.display = 'none';

  renderLogs(`---Game Start---`);
})


class Game {
  getRandomPokemons = async () => {
    const respons = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
    const randomPokemons = await respons.json();
    return randomPokemons
  }

  start = async () => {
    const randomPokemonsPlayer1 = await this.getRandomPokemons();
    const randomPokemonsPlayer2 = await this.getRandomPokemons();

    let player1 = new Pokemon ({
      ...randomPokemonsPlayer1,
      selectors: 'player1'
    });

    let player2 = new Pokemon ({
      ...randomPokemonsPlayer2,
      selectors: 'player2'
    });

    player1.attacks.forEach(item => {
      const $btn = document.createElement('button');
      const $span = document.createElement('span');
      const clickCount = clickListener(item.maxCount, $btn);
      const renderButtonCountdown = renderButtonСountdown(item.maxCount, $span, $btn);
    
      $btn.classList.add('button');
      $btn.innerText = item.name;
    
      $btn.addEventListener('click', () => {
        let demagePlayer1 = item.minDamage
        let demagePlayer2 = item.maxDamage

        setTimeout(() => {
          player1.changeHP(demagePlayer1, function (demagePlayer1){
            const log = generateLog(player1, player2, demagePlayer1, item.name);
            renderLogs(log);
          });
        }, 500)

        setTimeout(() => {
          player2.changeHP(demagePlayer2,function (demagePlayer2){
            const log = generateLog(player2, player1, demagePlayer2, item.name);
            renderLogs(log);
            finalGame(player1, player2);
          });
        }, 1000)

        renderButtonCountdown();
        clickCount();
      })

      $control.appendChild($btn);
      $btn.appendChild($span);
      $span.innerText = '[' + item.maxCount + ']';
    });

    $elImgPlayer1.src = player1.img;
    $elImgPlayer2.src = player2.img;
    $elNamePlayer1.innerText = player1.name;
    $elNamePlayer2.innerText = player2.name;

    const finalGame = (player1, player2) => {
      const allButtons = document.querySelectorAll('.control .button');
      const $GameOver = document.createElement('div');
    
      if (player1.hp.current === 0 || player2.hp.current === 0) {
        allButtons.forEach($item => $item.remove());
        $GameOver.innerHTML = `
          <h2 class="render-log__first-demage">Game Over:</h2>
          <br>
          <h3 class="render-log__first-hp">${player1.name} / ${player1.hp.current}</h3>
          <br>
          <h3 class="render-log__second-person">${player2.name} / ${player2.hp.current}</h3>
          `;
        $control.appendChild($GameOver);
      }
    }
  }
}

const game = new Game();
game.start();

