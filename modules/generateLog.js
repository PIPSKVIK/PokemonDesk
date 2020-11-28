import random from './randon.js';

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

export default generateLog;
