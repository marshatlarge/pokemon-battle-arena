import BattleUtils from "./battle_utils.js"
import BattleAnnouncer from "./battle_announcer.js"

export default class Trainer { //could also name this class "Trainer"

    constructor(pokemon) {

        this.pokemon = pokemon
        this.numPotions = 3
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

    usePotion(){
        if (this.hasPotions()) {
            if (!this.pokemon.isAtFullHealth()) {
                this.pokemon.consumePotion()
                BattleAnnouncer.announcePotionUse(this.pokemon)
                this.numPotions += -1
            }
            else {
                BattleAnnouncer.announceHealthLimit(this.pokemon)
                throw new Error('Health Already Full')
            }
        } else {
            BattleAnnouncer.announceZeroPotions()
            throw new Error('No Potions Left')
        }
    }

    runAway() {
        //Give a confirm option for this

    }

    throwPokeball() {
        BattleAnnouncer.announceThrowPokeball()
    }

    hasPotions() {
        if (this.numPotions > 0) {
            return true
        }
        return false
    }
}