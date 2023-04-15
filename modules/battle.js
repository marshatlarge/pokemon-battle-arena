class Battle { //could also name this class "Trainer"

    constructor() {
        //passed user's pokemon and opponent's pokemon
        
        //make sure to configure whether moves are super effective or not at the beginning of each value
    }

    useMove(attacker, target, move) {
        //get base damage from the attacker (based on their attack)
        damage = BattleUtilities.sumDamage(attacker, move)

        damage = BattleUtilities.applyEffectiveness(damage, target, move)

        if (BattleUtilities.determineIfCritical()) {
            damage = BattleUtilities.applyCritical(damage)
        }
        




        //deal damage to target (based on their defense)
        target.takeDamage(damage)
        //apply status affect to target if target doesn't already have a status effect
        //note-also need to build a waiting system in for effects to wear off

    }

}

class BattleUtilities {

    sumDamage(attacker, move) {

        //returns a damage value
    }

    applyEffectiveness(damage, target, move) {
            //if the move type is one of the pokemon's weaknesses, add a little exta
            for (let weakness of target.weakness_list) {
                if (move.type == weakness) {
                    damage = damage * 1.2
                    //also indicate supereffectiveness
                }
            }

            for (let resistance of target.resistance_list) {
                if (move.type == resistance) {
                    damage = damage * 0.85
                }
            }

            for (let immunity of target.immunities_list) { //may want to put this somewhere else in the code
                if (move.type == immunity) {
                    damage = 0
                    //Indicate immunity
                }
                
            }
                
            //Do something if it's not super effective
            //if it's a crit, add a little extra

            //returns damage

    }

    applyCritical(damage) { //might be able to figure out a better name for this one
        //because the name assumes that it's a critical hit and it's just adding it
        //still need a better name

            return damage += damage * 1.2
    }
    

    determineIfCritical() {
        //returns a boolean value indicating whether an attack is critical or not

    }

    calculateStatusEffect() {
    }
}