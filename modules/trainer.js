import BattleUtils from "./battle_utils.js"
import BattleAnnouncer from "./battle_announcer.js"

export default class Trainer { //could also name this class "Trainer"

    constructor(pokemon) {

        this.pokemon = pokemon
        
        //passed user's pokemon and opponent's pokemon
        
        //make sure to configure whether moves are super effective or not at the beginning of each value
    }

    useMove(target, move) {
        //get base damage from the attacker (based on their attack)
        BattleAnnouncer.announceMove(this.pokemon, move)

        //Check for missed
        if(BattleUtils.determineIfMisses(move)) {
            BattleAnnouncer.announceMiss()
            return
        }
        
        //calculate and apply damage
        let damage = this.pokemon.dealDamage(move)
        damage = BattleUtils.applyDamageModifiers(damage, target, move)
        //deal damage to target (based on their defense)-need to re-work damage algorithms/calculation but over logic works
        target.takeDamage(damage)
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