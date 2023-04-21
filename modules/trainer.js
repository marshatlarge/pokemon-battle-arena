import BattleUtils from "./battle_utils.js"
import BattleAnnouncer from "./battle_announcer.js"

export default class Trainer { //could also name this class "Trainer"

    constructor(pokemon) {

        this.pokemon = pokemon
        this.numPotions = 3
    }

    useMove(target, move) {
        
        BattleAnnouncer.announceMove(this.pokemon, move)

        //Check for missed
        //this isn't an error and stuff keeps flowing forward.
        //It isn't like somebody tried to call useMove() and it didn't work. It did work. It just missed.
        //that is why this isn't an error
        if(BattleUtils.determineIfMisses(move)) { 
            BattleAnnouncer.announceMiss()
            return
        }
        
        //calculate base damage and apply damage mods
        let damage = this.pokemon.calculateDamage(move)
        damage = BattleUtils.applyDamageModifiers(damage, target, move)
        //deal damage to target (based on their defense)-need to re-work damage algorithms/calculation but over logic works
        target.takeDamage(damage)
    }


    pickMove(string) {
        //could format the move from the text content of the page for this
        return this.pokemon.getMove(string)
    }

    usePotion(){
        if (this.hasPotions()) {
            this.pokemon.consumePotion()
            BattleAnnouncer.announcePotionUse(this.pokemon)
            this.numPotions += -1  
        } else {
            throw new Error('No potions left')
        }
    }

    runAway() {
        BattleAnnouncer.announceRunAway()

    }

    throwPokeball() { //throws an error every time because it isn't possible
        throw new Error(`Cannot catch another trainer's Pokemon`)
    }

    hasPotions() {
        if (this.numPotions > 0) {
            return true
        }
        return false
    }
}