function renderButtonСountdown (number, element) {
  let count = number;
  return function () {
    count -= 1;
    element.innerText = `[${count}]`;
    
    if (count === 0) {
      element.disabled = true;
    }
  }
}

export default renderButtonСountdown;