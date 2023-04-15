class Battle { //could also name this class "Trainer"

    constructor() {
        //passed user's pokemon and opponent's pokemon
        
        //make sure to configure whether moves are super effective or not at the beginning of each value
    }

    useMove(attacker, target, move) {
        //get base damage from the attacker (based on their attack)
        damage = BattleUtilities.sumDamage(attacker, target, move)

        damage = BattleUtilities.applyEffectiveness(damage)




        //deal damage to target (based on their defense)
        target.takeDamage(damage)
        //apply status affect to target if target doesn't already have a status effect
        //note-also need to build a waiting system in for effects to wear off

    }

}

class BattleUtilities {

    sumDamage(attacker, target, move) {
    }

    applyEffectiveness(damage) {
            //if the move type is one of the pokemon's weaknesses, add a little exta
            for (let weakness of target.weakness_list) {
                if (move.type == weakness) {
                    damage = damage * 1.2
                    //also indicate supereffectiveness
                }
            }
                
            //Do something if it's not super effective
             //if it's a crit, add a little extra

    }

    calculateStatusEffect() {
    }
}