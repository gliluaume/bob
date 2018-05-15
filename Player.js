'use strict'

class Player {
  constructor() {
    this.mustAttack = false
   }

  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      warrior.walk()
    } else {
      warrior.attack()
    }
  }
}