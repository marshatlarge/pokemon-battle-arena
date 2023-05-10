import BattleAnnouncer from "./battle_announcer.js"

class BattleUtils {

    constuctor() {
    }

    //Can tweak individual formulas for damage modifiers until finding something that works
    applyDamageModifiers(damage, target, move) {

        if (this.getIsImmune(target, move)) {
            BattleAnnouncer.announceImmunity()
            damage = this.applyImmunityNullifier(damage)
            return damage
        }

        if (this.getIsSupereffective(target, move)) {
            BattleAnnouncer.announceSupereffective()
            damage = this.applySupereffectiveMultiplier(damage)
        }

        if (this.getIsResistant(target, move)) {
            BattleAnnouncer.announceResistance()
            damage = this.applyResistanceNullifier(damage)
        }

        if (this.calculateIsCritical()) {
            BattleAnnouncer.announceCrit()
            damage = this.applyCritical(damage)
        }
        return damage
    }

    getIsSupereffective(target, move) {
        for (let weakness of target.weakness_list) {
            if (move.type === weakness) {
              return true
          }
       }
       return false
    }

    applySupereffectiveMultiplier(damage) {
        return damage * 1.5
        
    }
    
    getIsResistant(target, move) {

        for (let resistance of target.resistance_list) {
            if (move.type === resistance) {
                return true
            }
        }
        return false
    }

    applyResistanceNullifier(damage) {
        //decrease damage if resistant (attack not very effective)
        return damage * 0.85
    }

    getIsImmune(target, move) {
        for (let immunity of target.immunities_list) {
            if (move.type === immunity) {
                return true
            } 
        }
        return false
    }

    applyImmunityNullifier(damage) {
        return damage * 0
    }

    calculateIsCritical() {
        if (Math.random() < 0.1) {
            return true //is critical 10% of the time
        }
        return false
    }

    applyCritical(damage) { //applies a damage multiplier for critical hits
        return damage += damage * 1.2
    }

    determineIfMisses(move) {
        if (Math.random() > move.accuracy / 100) {
            return true
        }
    }

}

export default new BattleUtils()