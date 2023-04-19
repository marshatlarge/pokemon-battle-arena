import BattleAnnouncer from "./battle_announcer.js"

export default class BattleController {

    constructor(userTrainer, cpuTrainer) {

        this.user = userTrainer
        this.cpu = cpuTrainer

        this.activeTrainer = userTrainer.pokemon.speed >= cpuTrainer.pokemon.speed ? this.user : this.cpu

    }

    runBattle() {

        BattleAnnouncer.announceStartOfBattle()
        BattleAnnouncer.announceEnemyThrow(this.cpu.pokemon)
        BattleAnnouncer.announceUserThrow(this.user.pokemon)

        while(1) {

            this.conductUserTurn()

            if (this.getBattleIsOver()) {
                this.endBattle()
                break
            }

            this.conductCpuTurn()

            if (this.getBattleIsOver()) {
                this.endBattle()
                break
            }

        }
    }


    conductUserTurn() {

        while (1) {

            
            let userCommand = prompt(`What would you like to do? Options are "Fight", "Run Away", "Heal", or "Use Pokeball"?`)

            switch (userCommand.toLowerCase()) {
                case 'fight':
                    console.log(`Great! Which move do you want to use? Just kidding. You can't pick right now.`)
                    this.user.useMove(this.cpu.pokemon, this.user.pickMove('Tackle'))
                    return

                case 'run away':
                    
                    return
                
                case 'heal':
                    try {
                        this.user.usePotion()
                    } catch (err) {
                        if (err.message === 'No potions left') {
                            BattleAnnouncer.announceZeroPotions()
                        }
                        if (err.message === 'Health already full') {
                            BattleAnnouncer.announceHealthFull(this.user.pokemon)
                        }
                        continue
                    }
                    return
                
                case 'use pokeball':
                    try {
                        this.user.throwPokeball()
                    } catch (err) {
                        BattleAnnouncer.announceThrowPokeballError()
                        continue
                    }
                    

                default:
                    console.log(`That isn't a command. You lose a turn.`)
                    return

            }
        }

    }

    promptUser() {
        //maybe take the prompting the user with all the cases and put it in here
        //then can create another prompt user for picking which attack to use
    }

    conductCpuTurn() {
        this.cpu.useMove(this.user.pokemon, this.cpu.pickMove('Tackle'))
    }

    changeTurns() {
        if (this.activeTrainer === this.user) {
            this.activeTrainer = this.cpu
            return
        }
        if (this.activeTrainer === this.cpu) {
            this.activeTrainer = this.user
            return
        }
    }

    getBattleIsOver() {
        if (this.getIsUserDefeated()) {
            return true
        }
        if (this.getIsCpuDefeated()) {
            return true
        }
    }

    getIsUserDefeated() {
        if(this.user.pokemon.hasFainted()) {
            return true
        }
    }

    getIsCpuDefeated() {
        if(this.cpu.pokemon.hasFainted()) {
            return true
        }
    }

    endBattle() {
        console.log(`The battle is over.`)
        //end the battle and send the user back to the main menu
        //call this if runaway is clicked and confirmed
    }

    waitForClick() {
        //after text pops up, maybe need to make the program wait for a click or button press to continue
    }

}



