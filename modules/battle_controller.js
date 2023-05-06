import BattleAnnouncer from "./battle_announcer.js"

export default class BattleController {

    constructor(userTrainer, cpuTrainer) {

        this.user = userTrainer
        this.cpu = cpuTrainer
        this.isRunning = true

        this.activeTrainer = userTrainer.pokemon.speed >= cpuTrainer.pokemon.speed ? this.user : this.cpu

    }

    runBattle() {

        BattleAnnouncer.announceStartOfBattle()
        BattleAnnouncer.announceEnemyThrow(this.cpu.pokemon)
        BattleAnnouncer.announceUserThrow(this.user.pokemon)

        while(this.isRunning) {

            if (this.activeTrainer === this.user) {
                this.conductUserTurn()
            } else {
                this.conductCpuTurn()
            }

            if (this.getBattlerIsDefeated()) {
                this.endBattle()
            }

            this.changeTurns()

        }
    }


    conductUserTurn() { //could refactor this to add error handler methods passed the errors

        while (1) {
            this.promptUserAction()
        }
    }


    conductUserUseMove(moveChoice) {
        try {
            this.user.useMove(this.cpu.pokemon, moveChoice)
            
        } catch {
            BattleAnnouncer.announceInvalidMove()
        }
    }

    conductUserRunAway() {
        this.user.runAway()
        BattleAnnouncer.announceRunAway()
        this.endBattle()
    }

    conductUserThrowPokeball() {
        try {
            this.user.throwPokeball()
        } catch (err) {
            BattleAnnouncer.announceThrowPokeballError()
        }
    }

    conductUserHeal() {
        try {
            this.user.usePotion()
        } catch (err) {
            if (err.message === 'No potions left') {
                BattleAnnouncer.announceZeroPotions()
            }
            if (err.message === 'Health already full') {
                BattleAnnouncer.announceHealthFull(this.user.pokemon)
            }
        }
    }

    promptUserAction() {
        BattleAnnouncer.announceActionPrompt()
        //wait til user picks a move
    }

    promptUserMoveChoice() {
        BattleAnnouncer.announceMovePrompt()
        //wait til user picks a move
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

    getBattlerIsDefeated() {
        if (this.getIsUserDefeated()) {
            return true
        }
        if (this.getIsCpuDefeated()) {
            return true
        }
    }

    getIsUserDefeated() {
        if(this.user.pokemon.hasFainted()) {
            //mayebe announce the user's pokemon fainted here
            return true
        }
    }

    getIsCpuDefeated() {
        if(this.cpu.pokemon.hasFainted()) {
            //maybe announce the cpu's pokemon fainted here
            return true
        }
    }

    endBattle() {
        BattleAnnouncer.announceBattleOver()
        this.isRunning = false
    }

 
}



