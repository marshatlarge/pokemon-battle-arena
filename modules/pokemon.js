import GameData from "./game_data.js"

export default class Pokemon {

    constructor(name, learnableMoves, typeList) {
        
        //CAN ALSO RANDOMLY SET A LEVEL FOR THE ENEMY POKEMON LATER
        this.moveSet = this.buildMoveSet(learnableMoves)
        this.maxHealth = this.generateHealth()
        this.health = this.maxHealth
        this.attack = this.generateAttack()
        this.defense = this.generateDefense()
        this.weakness_list = this.buildWeaknessList(typeList)
        this.immunities_list = this.buildImmunityList(typeList)
        this.resistance_list = this.buildResistanceList(typeList)
        this.name = name
        this.gender = Math.random() < 0.5 ? 'Male' : 'Female' //reset this for ditto and most ghost pokemon

        this.speed = this.generateSpeed()
        
        //Note, attack and defense calculations are fairly basic. There aren't any EVs or IVs or Sp. Attk or Sp. Defense
    }



    generateHealth() {
        return Math.ceil(Math.random() * 65 + 350)
    }

    generateAttack() {
        return Math.ceil(Math.random() * 10 + 35)
    }

    generateDefense() {
        return Math.ceil(Math.random() * 10 + 25)
    }

    generateSpeed() {
        return Math.ceil(Math.random() * 50)
    }

    buildWeaknessList(typeList) {
        let weaknessList = []
        for(let type of typeList) {
            for (let t in GameData.typeWeaknesses) {
                if (type == t) {
                    for (let value of GameData.typeWeaknesses[t]) {
                        weaknessList.push(value)

                    }
                }
            }
        }
        console.log(weaknessList)
        return weaknessList
    }

    buildImmunityList(typeList) {
        let immunityList = []
        for(let type of typeList) {
            for (let t in GameData.typeImmunities) {
                if (type == t) {
                    for (let value of GameData.typeImmunities[t]) {
                        immunityList.push(value)

                    }
                }
            }
        }
        console.log(immunityList)
        return immunityList

    }

    buildResistanceList(typeList) {
        let resistanceList = []
        for(let type of typeList) {
            for (let t in GameData.typeResistances) {
                if (type == t) {
                    for (let value of GameData.typeResistances[t]) {
                        resistanceList.push(value)

                    }
                }
            }
        }
        console.log(resistanceList)
        return resistanceList

    }





    buildMoveSet(learnableMoves) {
        let moveSet = []

        for (let type in GameData.movesMasterList) {
            for (let move of GameData.movesMasterList[type]) {
                for (let learnableMoveName of learnableMoves) {
                    if(move.name.toLowerCase() == learnableMoveName.toLowerCase()) {
                        moveSet.push(new Move(type, move.name, move.power, move.accuracy))
                        break
                    }
                }
            }
        }

        if (moveSet.length < 1) {
            moveSet.push(new Move("normal", "tackle", 40, 100))
        }  
        return moveSet
    }



    //base this on the pokemon's defensive stat
    takeDamage(damage) { //absorbs some damage based on pokemon's defense stat
        this.health += -damage + Math.round(this.defense / 100 * damage)
        return
    }

    calculateDamage(move) { //boosts attack based on pokemon's attack stat
        return this.attack + Math.round((move.power * this.attack / 100))
    }

    getMove(string) { //Gets move object given the name of a move
       
        for (let move of this.moveSet) {
            
            if (move.name === string) {
                return move
            }
        }
        throw new Error(`${string} is not a part of this Pokemon's moveset`)
    }

    hasFainted() {
        if (this.health <= 0) {
            return true
        }
    }

    getPercentageHealth() {
        return this.health / this.maxHealth
    }

    consumePotion() { //going to need to flesh this out
        if (this.isAtFullHealth()) { //This is a double safety measure
            throw new Error ('Health already full')
        }

        if (this.health <= this.maxHealth - 50) {
            this.health += 50
        }
        else {
            this.health = this.maxHealth
        }
    }

    isAtFullHealth() {
        if (this.health >= this.maxHealth) {
            return true
        }
        return false
    }

}

class Move {


    /*
    Accuracy should not be more than 100. Whatever the value of accuracy out of 100 is the odds it connects
    */
    constructor(type, name, power, accuracy) {
        this.type = type
        this.name = name
        this.power = power
        this.accuracy = accuracy
    }

}

