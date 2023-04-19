class BattleController {

    constructor(userTrainer, cpuTrainer) {

        this.user = userTrainer
        this.cpu = cpuTrainer

        activeTrainer = //set this at the beginning depending on the trainers' pokemon's speed

    }

    conductBattle() {

        while(1) {

            this.conductTurn()

            if (this.battleIsOver()) {
                this.endBattle()
            }

            this.changeTurns()
        }

        

    }


    conductTurn(trainer) {

    }

    changeTurns() {
        if (activeTrainer === this.user) {
            activeTrainer = this.cpu
        }
        if (activeTrainer === this.cpu) {
            activeTrainer = this.user
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

