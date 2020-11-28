function renderButtonСountdown (number, element) {
  let count = number;
  return function () {
    count -= 1;
    element.innerText = `${count}`;
  }
}

export default renderButtonСountdown;