class Selectors {
  constructor (name) {
    this.elHP = document.querySelector(`#health-${name}`);
    this.elProgressBar = document.querySelector(`#progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, type, selectors }) {
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp
    },
    this.type = type;

    this.renderHP();
  }

  changeHP = (count, cd, btn1, btn2) => {
    this.hp.current -= count;
  
    if (this.hp.current <= count) {
      this.hp.current = 0;
    }
  
    this.renderHP();
    cd && cd(count);
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressBar();
  }
  
  renderHPLife = () => {
    const { elHP, hp: { current, total } } = this;
  
    elHP.innerText = current + ' / ' + total;
    if (current <= 80) {
      elHP.style.color = '#ffcc00';
    }
  
    if (current <= 29) {
      elHP.style.color = '#d20000';
    }
  }
  
  renderProgressBar = () => {
    const { hp: { current, total }, elProgressBar } = this;
    const procent = current / (total / 100);
  
    elProgressBar.style.width = procent + '%';
    if (current <= 80) {
      elProgressBar.classList.add('low');
    }
  
    if (current <= 29) {
      elProgressBar.classList.add('critical');
    }
  }

  kritPanchButtonActiv = (count, btn) =>  {
    const { hp: { current } } = this;
  
    if (current <= count) {
      btn.disabled = false;
      btn.style.background = '#ff0000';
      btn.style.color = '#ffffff';
    }
  }

    finalBlow = (count, btn) => {
    // const finalBlowText = this.name + ' Получил Критический удар!';

    if (this.hp.current <= count) {
      this.hp.current -= 10;
      // renderLogs(finalBlowText);
    }
    if (this.hp.current <= 0) {
      this.hp.current = 0;
      btn.disabled = true;
    }

    this.renderHP();
  }
}

export default Pokemon;
