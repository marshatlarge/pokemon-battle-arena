export default class BattleController { //could also name this class "Trainer"

    constructor() {
        
        //passed user's pokemon and opponent's pokemon
        
        //make sure to configure whether moves are super effective or not at the beginning of each value
    }

    useMove(attacker, target, move) {
        //get base damage from the attacker (based on their attack)

        /*
        if(determineIfMisses(move)) {
            //announce that a move missed
            //likely return so nothing happens
        }

        if (determineIsImmune(target, move)) {
            //DO SOMETHING IF SOMEBODY IS IMMUNE
        }
        */


        damage = attacker.dealDamage(move)
        //damage = BattleUtilities.applyEffectiveness(damage, target, move)
        /*
        if (BattleUtilities.determineIfCritical()) {
            damage = BattleUtilities.applyCritical(damage)
        }
        */
        
        //deal damage to target (based on their defense)
        target.takeDamage(damage)
        //apply status affect to target if target doesn't already have a status effect
        //note-also need to build a waiting system in for effects to wear off
    }




    usePotion(user, target){ //going to need to redo this as well
        user.numPotions += -1
        target.drinkPotion()
        //announce a potion was used
    }

    runAway() {

    }

    throwPokeball() { //also could come up 

    }
}

class BattleUtilities {

    applyEffectiveness(damage, target, move) {
            
            //increase damage if supereffective
            for (let weakness of target.weakness_list) {
                if (move.type == weakness) {
                    damage = damage * 1.2
                    //also indicate supereffectiveness
                }
            }

            //decrease damage if not very effective
            for (let resistance of target.resistance_list) {
                if (move.type == resistance) {
                    damage = damage * 0.85
                    //indicate not very effective
                }
            }
                
            return damage
    }

    determineIsImmune(target, move) {

        for (let immunity of target.immunities_list) { //may want to put this somewhere else in the code
            if (move.type == immunity) {
                damage = 0
                //Indicate/annouce immunity
            } 
        }

    }

    applyCritical(damage) {

            return damage += damage * 1.2
    }

    determineIfCritical() {
        //returns a boolean value indicating whether an attack is critical or not

    }

    calculateStatusEffect() {
        //can implement status effects a bit later
    }

    determineIfMisses(move) {
        //calculate probability of missing
        //return true if misses


    }
}


class BattleAnnouncer() {
    
    announceSuperEffective() {
        //does something with the text
    }
}