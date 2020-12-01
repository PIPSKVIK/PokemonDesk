class Selectors {
  constructor (name) {
    this.elHP = document.querySelector(`#health-${name}`);
    this.elProgressBar = document.querySelector(`#progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, type, selectors, attacks, img }) {
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp
    },
    this.type = type;
    this.attacks = attacks;
    this.img = img;

    this.renderHP();
  }

  changeHP = (count, cd) => {
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
    if (procent <= 50) {
      elProgressBar.classList.add('low');
    }
  
    if (procent <= 29) {
      elProgressBar.classList.add('critical');
    }
  }
}

export default Pokemon;
