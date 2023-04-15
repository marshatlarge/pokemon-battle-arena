class Pokemon {

    /*
    Has moves, type, level,
    possibly an item, gender, base stats, a name.
    Just going to keep stats basic rather than having sp. attk and sp. def.
    
    Pokemon should be able to take damage, do damage, have status effects and heal 
    (Note - must account for moves that heal).
    */

    constructor(health, attack, defense) {
        this.health = health
        this.attack = attack
        this.defense = defense
        //this.gender = ASSIGN RANDOM GENDER

    }

}

class Move {


    /*
    Each move should have a type, damage, 
    chance to affect status, chance to crit (might just be built into battle)
    */

    constructor() {

    }

}