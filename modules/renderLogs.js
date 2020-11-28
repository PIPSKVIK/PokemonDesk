function renderLogs (log) {
  const $logs = document.querySelector('#logs');

  for (let i = 0; i < 1; i++) {
    const $p = document.createElement('p');
    $p.classList.add('logs__text')
    $p.innerText = `${log}`;
    $logs.insertBefore($p, $logs.children[0]);
  }
}

export default renderLogs;