import BattleAnnouncer from "./battle_announcer.js"

export default class UIController {

    constructor() {

        this.fightButton = document.getElementById("fightButton")
        this.runButton = document.getElementById("runButton")
        this.healButton = document.getElementById("healButton")
        this.pokeballButton = document.getElementById("pokeballButton")
        this.moveButtons = document.getElementsByClassName("moveOption") 

        this.announcerBox = document.getElementById("announcerBox")
        
 
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
        })
    }

    configureMoveButtons(battleController) {
        for (let moveButton of this.moveButtons) {
            
            moveButton.addEventListener("click", () => {
                battleController.conductUserUseMove(moveButton.textContent)
                BattleAnnouncer.updateAnnouncerBoxText()
            })
            
        }
    }

    configureBattleProgression(){ //can also update health of UI here depending on what exactly happened
        this.announcerBox.addEventListener("click", () => {
            if (this.announcerBox.textContent == `The battle is over.`) {
                console.log("EXIT TO HOME SCREEN")
                //EXIT TO HOME SCREEN
            }
            BattleAnnouncer.updateAnnouncerBoxText()
            
        })
    }



    //MAYBE MAKE A WHOLE CLASS TO DO THE HEALTH UI STUFF
    updateHealthBar() {
        

    }
}

