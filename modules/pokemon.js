class Pokemon {

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
        this.gender = Math.random() < 0.5 ? 'Male' : 'Female' //reset this for ditto and most ghost pokemon

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

    calculateDamage(move) { //calculates damage for a given move given the pokemon's attack stat
        return this.attack + Math.round((move.power * this.attack / 100))
    }

    getMove(string) { //gets a move based on the string--pass move selection into this and it returns a move
        for (let move of this.moveSet) {
            if (move.name === string) {
                return move
            }
        }
        throw new Error(`${string} is not a part of this Pokemon's moveset`)
    }

    hasFainted() {
        if (this.health <= 0) {
            return true
        }
    }

    consumePotion() { //going to need to flesh this out
        if (this.isAtFullHealth()) { //This is a double safety measure
            throw new Error ('Health already full')
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

class Move {


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

let move1 = new Move('Fire','Flamethrower',100,100)
let move2 = new Move('Normal','Tackle',100,100)
let move3 = new Move('Water','Watergun',100,100)
let move4 = new Move('Flying','Air Slash',100,100)
let move5 = new Move('Fire','Fire Fang',100,100)


let moveList1 = [move1, move2, move4, move5]
let moveList2 = [move2, move3]

let resistanceList1 = ['Fire', 'Grass']
let weaknessList1 = ['Water']
let immunitiesList1 = ['']

let resistanceList2 = ['Water', 'Fire']
let weaknessList2 = ['Electric', 'Grass']
let immunitiesList2 = ['']

let charizard = new Pokemon(moveList1,500,100,50,100, weaknessList1, immunitiesList1,resistanceList1,'Charizard')
let blastoise = new Pokemon(moveList2,500,100,30,1000,weaknessList2,immunitiesList2, resistanceList2,'Blastoise')

export default {charizard, blastoise}