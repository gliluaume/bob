'use strict'

class Player {
  constructor() {
    this.mustAttack = false
   }

  playTurn(warrior) {

    if ((warrior.health() < 16)) {
      if (!warrior.feel().isEmpty()) {
        warrior.walk('backward')
      } else {
        warrior.rest();
      }
    } else {
      if (warrior.feel().isEmpty()) {
        warrior.walk()
      } else {
        warrior.attack()
      }
    }
  }
}