import BattleUtils from "./battle_utils.js"

export default class Trainer { //could also name this class "Trainer"

    constructor(pokemon) {

        this.pokemon = pokemon
        
        //passed user's pokemon and opponent's pokemon
        
        //make sure to configure whether moves are super effective or not at the beginning of each value
    }

    useMove(target, move) {
        //get base damage from the attacker (based on their attack)

        //Check for missed
        if(BattleUtils.determineIfMisses(move)) {
            console.log('It missed!') //use something from the announcer class here
            return
        }
        

        let damage = this.pokemon.dealDamage(move)
        damage = BattleUtils.applyDamageModifiers(damage, target, move)
        
        //deal damage to target (based on their defense)
        target.takeDamage(damage)
        //apply status affect to target if target doesn't already have a status effect
        //note-also need to build a waiting system in for effects to wear off
    }


    pickMove(string) {
        //could format the move from the text content of the page for this
        return this.pokemon.getMove(string)
    }

    usePotion(user){ //going to need to redo this as well
        user.numPotions += -1
        this.pokemon.drinkPotion()
        //announce a potion was used
    }

    runAway() {

    }

    throwPokeball() { //also could come up 

    }
}