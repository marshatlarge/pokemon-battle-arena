export default class BattleController {

    constructor(userTrainer, cpuTrainer) {

        this.user = userTrainer
        this.cpu = cpuTrainer

        this.activeTrainer = userTrainer.pokemon.speed >= cpuTrainer.pokemon.speed ? this.user : this.cpu

    }

    runBattle() {

        while(1) {

            this.conductTurn(activeTrainer)

            if (this.battleIsOver()) {
                this.endBattle()
            }

            this.changeTurns()
        }
    }


    conductTurn(trainer) {

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

    battleIsOver() {
        if (this.getIsUserDefeated()) {
            return true
        }
        if (this.getIsCpuDefeated()) {
            return true
        }
    }

    getIsUserDefeated() {
        if(userTrainer.pokemon.hasFainter()) {
            return true
        }
    }

    getIsCpuDefeated() {
        if(cpuTrainer.pokemon.hasFainted()) {
            return true
        }
    }

    endBattle() {
        //end the battle and send the user back to the main menu
        //call this if runaway is clicked and confirmed
    }

    waitForClick() {
        //after text pops up, maybe need to make the program wait for a click or button press to continue
    }

}



