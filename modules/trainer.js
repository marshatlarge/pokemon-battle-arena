import BattleUtils from "./battle_utils.js"
import BattleAnnouncer from "./battle_announcer.js"

export default class Trainer {

    constructor(pokemon) {

        this.pokemon = pokemon
        this.numPotions = 3
    }

    useMove(target, move) {
        
        BattleAnnouncer.announceMove(this.pokemon, move)

        //Check for missed
        if(BattleUtils.determineIfMisses(move)) { 
            BattleAnnouncer.announceMiss()
            return
        }
        
        //calculate base damage (based on attack stat)
        let damage = this.pokemon.calculateDamage(move)

        //apply modifiers
        damage = BattleUtils.applyDamageModifiers(damage, target, move)

        //deal damage to target (based on target's defense)
        target.takeDamage(damage)
    }

    pickMove(string) {
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
        return
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




