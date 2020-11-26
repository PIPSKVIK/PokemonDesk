class Pokemon {
  constructor ({ name, hp, type }) {
    this.name = name,
    this.hp = {
      current: hp,
      tottal: hp
    },
    this.type = type;
  }
}

export default Pokemon;
