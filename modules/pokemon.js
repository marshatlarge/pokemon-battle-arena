class Pokemon {

    /*
    Has moves, type, level,
    possibly an item, gender, base stats, a name.
    Just going to keep stats basic rather than having sp. attk and sp. def.
    
    Pokemon should be able to take damage, do damage, have status effects and heal 
    (Note - must account for moves that heal).

    have to have a typing system to determine if an attack is supereffective
    */

    constructor(health, attack, defense, speed, type, weaknesses, immunities, resistances) {
        this.health = health
        this.attack = attack
        this.defense = defense
        this.speed = speed
        this.type = type
        this.status = 'Neutral'

        this.weakness_list = weaknesses
        this.immunities_list = immunities
        this.resistance_list = resistances
        
        this.moveSet = []
        //this.gender = ASSIGN RANDOM GENDER
    }

    takeDamage(damage) {
    }

    dealDamage(move) {
        //calculate damage for move based on attack value

    }

    getMove(string) { //gets a move based on the string--pass move selection into this and it returns a move
        for (let move of this.moveSet) {
            if (move.name == string) {
                return move
            }
        }
    }

    setStatus(status) {
        this.status = status
    }

}

class Move {


    /*
    Each move should have a type, damage, whether is is a status or damage move,
    chance to affect status, chance to crit (might just be built into battle)
    */
    constructor(type, name) {
        self.type = type
        self.name = name
        
        isSuperEffective = false

    }

}