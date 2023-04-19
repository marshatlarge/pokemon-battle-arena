export default class Pokemon {

    //luck and accuracy isn't built into the pokemon itself
    //potions are the only way to heal. there are no healing moves
    constructor(moveSet, health, attack, defense, speed, weaknesses, immunities, resistances, name) {
        
        //basics (build out battle systems using these first)
        this.moveSet = moveSet
        this.health = health
        this.maxHealth = health
        this.attack = attack
        this.defense = defense
        this.weakness_list = weaknesses
        this.immunities_list = immunities
        this.resistance_list = resistances
        this.name = name
        this.gender = Math.random() < 0.5 ? 'Male' : 'Female'; //reset this for ditto and most ghost pokemon

        //build out battle systems using these last
        this.speed = speed

        
        //this.status = 'Neutral' if I wanted to include status effect
        //this.item = '' if I wanted to include items
        //Note, attack and defense calculations are fairly basic. There aren't any EVs or IVs or Sp. Attk or Sp. Defense
    }

    //base this on the pokemon's defensive stat
    takeDamage(damage) { //I can redo the formulas for taking and dealing damage later. Just want to make the system work first.
        this.health += -damage + Math.round(this.defense / 100 * damage)
        return
    }

    dealDamage(move) { //damage is based on the moves power and the attack-can redo formula later
        return this.attack + Math.round((move.power * this.attack / 100))
    }

    getMove(string) { //gets a move based on the string--pass move selection into this and it returns a move
        for (let move of this.moveSet) {
            if (move.name === string) {
                return move
            }
        }
        //could return something else here in case the move doesn't exist (someone messed with text content)
    }

    hasFainted() {
        if (this.health <= 0) {
            return true
        }
    }

    consumePotion() { //going to need to flesh this out
        if (this.isAtFullHealth()) { //This is a double safety measure
            return //it's already at full health. cancel it or don't allow it-should probably check for this when trying to use a potion anyway
        }

        if (this.health <= this.maxHealth - 50) {
            this.health += 50
        }
        else {
            this.health = this.maxHealth
        }
    }

    isAtFullHealth() {
        if (this.health >= this.maxHealth) {
            return true
        }
        return false
    }

}

export class Move {


    /*
    Accuracy should not be more than 100. Whatever the value of accuracy out of 100 is the odds it connects
    */
    constructor(type, name, power, accuracy) {
        this.type = type
        this.name = name
        this.power = power
        this.accuracy = accuracy
    }

}