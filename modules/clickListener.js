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

export default clickListener;