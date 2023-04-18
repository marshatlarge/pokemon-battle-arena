class BattleUtils {

    constuctor() {
    }



    //Can tweak individual formulas for damage modifiers until finding something that works
    //can get rid of console.logs later
    applyDamageModifiers(damage, target, move) {

        if (this.getIsImmune(target, move)) {
            console.log('the target is immune. No damage done.')
            damage = this.applyImmunityNullifier(damage)
            //maybe return here
        }

        if (this.getIsSupereffective(target, move)) {
            console.log('its super effective')
            damage = this.applySupereffectiveMultiplier(damage)
        }

        if (this.getIsResistant(target, move)) {
            console.log('The target is resistant')
            damage = this.applyResistanceNullifier(damage)
        }

        if (this.calculateIsCritical()) {
            console.log('Its a crit')
            damage = this.applyCritical(damage)
        }

        return damage
    }

    
    getIsSupereffective(target, move) {
        for (let weakness of target.weakness_list) {
            if (move.type == weakness) {
              return true
              //also indicate supereffectiveness
          }
       }
       return false
    }

    applySupereffectiveMultiplier(damage) {
        return damage * 1.5
        
    }
    
    getIsResistant(target, move) {

        for (let resistance of target.resistance_list) {
            if (move.type == resistance) {
                return true //indicate is not very effective
            }
        }
        return false
    }

    applyResistanceNullifier(damage) {
        //decrease damage if resistant (attack not very effective)
        return damage * 0.85

    }

    getIsImmune(target, move) {
        for (let immunity of target.immunities_list) { //may want to put this somewhere else in the code
            if (move.type == immunity) {
                return true
                //Indicate/annouce immunity and call off the attack animations?
            } 
        }
        return false

    }

    applyImmunityNullifier(damage) {
        return damage * 0
    }

    calculateIsCritical() { //could even pass this a 'luck' value for critical hits that are tied to the pokemon if I wanted. That way, you could buff/debuff crits.
        if (Math.random() < 0.1) {
            return true //is critical 10% of the time
        }
        return false
    }

    applyCritical(damage) {
        return damage += damage * 1.2
    }

    determineIfMisses(move) { //accuracy assigned in between values of 0 and 100
        if (Math.random() > move.accuracy / 100) {
            return true
        }
    }



    
    //DO BELOW AFTER ADDING MULTIPLIERS
    calculateStatusEffect() {
        //can implement status effects a bit later
    }


}

export default new BattleUtils()