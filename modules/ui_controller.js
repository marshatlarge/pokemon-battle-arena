import BattleAnnouncer from "./battle_announcer.js"

export default class UIController {

    constructor() {

        this.fightButton = document.getElementById("fightButton")
        this.runButton = document.getElementById("runButton")
        this.healButton = document.getElementById("healButton")
        this.pokeballButton = document.getElementById("pokeballButton")
        this.moveButtons = document.getElementsByClassName("moveOption") 

        this.announcerBox = document.getElementById("announcerBox")

        this.userHealthContainer = document.getElementById("userHealthContainer")
        this.userHealthBar = document.getElementById("userHealthBar")

        this.enemyHealthContainer = document.getElementById("enemyHealthContainer")
        this.enemyHealthBar = document.getElementById("enemyHealthBar")
        
    }

    configureActionButtons(battleController) {
        this.fightButton.addEventListener("click", () => {
            battleController.getUserMoveChoice()   
        })

        this.runButton.addEventListener("click", () => {
            battleController.conductUserRunAway()
            BattleAnnouncer.updateAnnouncerBoxText()
        })

        this.pokeballButton.addEventListener("click", () => {
            battleController.conductUserThrowPokeball()
            BattleAnnouncer.updateAnnouncerBoxText()
        })

        this.healButton.addEventListener("click",() => {
            battleController.conductUserHeal()
            BattleAnnouncer.updateAnnouncerBoxText()
            this.updateUserHealthBar(battleController) //this means that heal will really only be used by players if it is to work like this
        })
    }

    configureMoveButtons(battleController) {
        for (let moveButton of this.moveButtons) {
            
            moveButton.addEventListener("click", () => {
                battleController.conductUserUseMove(moveButton.textContent)
                BattleAnnouncer.updateAnnouncerBoxText()
                if(this.announcerBox.textContent.startsWith(`${battleController.user.pokemon.name} used`)) {
                    this.updateEnemyHealthBar(battleController)
                }
            })
            
        }
    }

    configureBattleProgression(battleController){ //can also update health of UI here depending on what exactly happened
        this.announcerBox.addEventListener("click", () => {
            if (this.announcerBox.textContent == `The battle is over.`) {
                console.log("EXIT TO HOME SCREEN")
                //EXIT TO HOME SCREEN
            }
            
            BattleAnnouncer.updateAnnouncerBoxText()

            if(this.announcerBox.textContent.startsWith(`${battleController.cpu.pokemon.name} used`)) {
                this.updateUserHealthBar(battleController)
            }

            //also check to see if a pokemon was healed
            
        })
    }

    //MAYBE MAKE A WHOLE CLASS TO DO THE HEALTH UI STUFF
    updateUserHealthBar(battleController) {
        
        let userPercentage = battleController.getUserHealthPercentage()
        let numPixelsUser = Math.ceil(userPercentage * this.userHealthContainer.clientWidth)

        if (userPercentage >= 0.6) {
            this.userHealthBar.style.backgroundColor = "#99FCB4"
        } else if (userPercentage >= 0.2) {
            this.userHealthBar.style.backgroundColor = "#FAEA5F"

        } else {
            this.userHealthBar.style.backgroundColor = "#EC6646"
        }

        if (numPixelsUser > 10) {  
            this.userHealthBar.style.width = numPixelsUser + "px"
        } else {
            this.userHealthBar.style.width = "10px"
        } 
    }

    updateEnemyHealthBar(battleController) {
        let cpuPercentage = battleController.getCpuHealthPercentage()
        let numPixelsCpu = Math.ceil(cpuPercentage * this.enemyHealthContainer.clientWidth)

        //CHANGE COLOR OF BAR
        if (cpuPercentage >= 0.6) {
            this.enemyHealthBar.style.backgroundColor = "#99FCB4"
        } else if (cpuPercentage >= 0.2) {
            this.enemyHealthBar.style.backgroundColor = "#FAEA5F"

        } else {
            this.enemyHealthBar.style.backgroundColor = "#EC6646"
        }

        //CHANGE SIZE OF BAR
        if (numPixelsCpu > 10) {
            this.enemyHealthBar.style.width = numPixelsCpu + "px"
        } else if (numPixelsCpu <= 0) {
            this.enemyHealthBar.style.width = "0px"
        }
        else {
            this.enemyHealthBar.style.width = "10px"
        }
    }
}

