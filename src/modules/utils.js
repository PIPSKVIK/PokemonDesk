export function random (num) {
  return Math.ceil(Math.random() * num);
};

export function renderLogs (log) {
  const $logs = document.querySelector('#logs');

  for (let i = 0; i < 1; i++) {
    const $p = document.createElement('p');
    $p.classList.add('logs__text')
    $p.innerHTML = `${log}`;
    $logs.insertBefore($p, $logs.children[0]);
  }
}

export function renderButtonСountdown (number, element, btn) {
  let count = number;
  return function () {
    count -= 1;
    element.innerText = `[${count}]`;
    
    if (count === 0) {
      btn.disabled = true;
    }
  }
}

export function clickListener () {
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
