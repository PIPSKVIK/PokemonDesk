import { random } from './utils.js';

function generateLog (firstPerson, secondPerson, demage, skill) {
  const logs = [
    `<span class="render-log__first-person">[${firstPerson.name}]</span> вспомнил что-то важное, но неожиданно
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span>, не помня себя от испуга, ударил в предплечье врага.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]
    `,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> поперхнулся, и за это
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span>, с испугу приложил прямой удар коленом в лоб врага.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]
    `,


    `<span class="render-log__first-person">[${firstPerson.name}]</span> забылся, но в это время наглый
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span>, приняв волевое решение, неслышно подойдя сзади, ударил.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> пришел в себя, но неожиданно
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span> случайно нанес мощнейший удар.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> поперхнулся, но в это время
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span> нехотя раздробил кулаком \<вырезанно цензурой\> противника.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> удивился, а
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span> пошатнувшись влепил подлый удар.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> высморкался, но неожиданно
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span> провел дробящий удар.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> пошатнулся, и внезапно наглый
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span> беспричинно ударил в ногу противника
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> расстроился, как вдруг, неожиданно
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span> случайно влепил стопой в живот соперника.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`,

    `<span class="render-log__first-person">[${firstPerson.name}]</span> пытался что-то сказать, но вдруг, неожиданно
    <br>
    <span class="render-log__second-person">[${secondPerson.name}]</span> со скуки, разбил бровь сопернику.
    <br>
    <span class="render-log__first-person">[${firstPerson.name}]</span> получил -<span class="render-log__first-demage">[${demage}] HP </span>
    <br>
    <span class="render-log__first-hp">[${firstPerson.hp.current} / ${firstPerson.hp.total}] </span>
    <br>
    <span class="render-log__first-person">[${firstPerson.name}] </span> применил способность [${skill}]`
  ];

  return logs[random(logs.length) - 1];
}

export default generateLog;
