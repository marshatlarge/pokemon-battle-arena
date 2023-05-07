import BattleAnnouncer from "./battle_announcer.js"

export default class BattleController {

    constructor(userTrainer, cpuTrainer) {

        this.user = userTrainer
        this.cpu = cpuTrainer
     
        this.activeTrainer = userTrainer.pokemon.speed >= cpuTrainer.pokemon.speed ? this.user : this.cpu
    
        this.announcerBox = document.getElementById("announcerBox")
    }

    startBattle() {
        BattleAnnouncer.announceStartOfBattle()
        BattleAnnouncer.announceEnemyThrow(this.cpu.pokemon)
        BattleAnnouncer.announceUserThrow(this.user.pokemon)

        if (this.cpu.pokemon.speed > this.user.pokemon.speed) {
            this.conductCpuTurn()
        }
    }

    getUserMoveChoice() {
        BattleAnnouncer.announceMovePrompt(this.user.pokemon)
        BattleAnnouncer.displayMoveOptionsBox()
    }

    conductUserUseMove(moveChoice) {
        try {
            this.user.useMove(this.cpu.pokemon, this.user.pickMove(moveChoice))
            if(this.getBattlerIsDefeated()) {
                this.endBattle()
            } else {
                this.conductCpuTurn()
            }
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
            if(this.getBattlerIsDefeated()) {
                this.endBattle()
            } else {
                this.conductCpuTurn()
            }
            
        } catch (err) {
            if (err.message === 'No potions left') {
                
                BattleAnnouncer.announceZeroPotions()
            }
            if (err.message === 'Health already full') {
                BattleAnnouncer.announceHealthFull(this.user.pokemon)
            }
            
        }
    }

    conductCpuTurn() {
        this.cpu.useMove(this.user.pokemon, this.cpu.pickMove('Tackle'))
        if(this.getBattlerIsDefeated()) {
            this.endBattle()
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
            BattleAnnouncer.announceWhitedOut(this.user)
            return true
        }
    }

    getIsCpuDefeated() {
        if(this.cpu.pokemon.hasFainted()) {
            BattleAnnouncer.announceEnemyHasFainted(this.cpu.pokemon)
            return true
        }
    }

    getCpuHealthPercentage() {
        return this.cpu.pokemon.getPercentageHealth()
    }

    getUserHealthPercentage() {
        return this.user.pokemon.getPercentageHealth()
    }

    endBattle() {
        BattleAnnouncer.announceBattleOver()
    }
}