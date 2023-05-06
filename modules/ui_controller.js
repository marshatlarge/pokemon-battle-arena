import BattleAnnouncer from "./battle_announcer.js"

export default class UIController {

    constructor() {

        this.fightButton = document.getElementById("fightButton")
        this.runButton = document.getElementById("runButton")
        this.healButton = document.getElementById("healButton")
        this.pokeballButton = document.getElementById("pokeballButton")
        this.moveButtons = document.getElementsByClassName("moveOption") 

        this.announcerBox = document.getElementById("announcerBox")
        this.configureAnnouncementProgression()
 
    }

    configureActionButtons(battleController) {

        this.fightButton.addEventListener("click", () => {
            battleController.getUserMoveChoice()
        })

        this.runButton.addEventListener("click", () => {
            battleController.conductUserRunAway()
        })

        this.pokeballButton.addEventListener("click", () => {
            battleController.conductUserThrowPokeball()
        })

        this.healButton.addEventListener("click",() => {
            battleController.conductUserHeal()
        })
    }

    configureMoveButtons(battleController) {
        for (let moveButton of this.moveButtons) {
            
            moveButton.addEventListener("click", () => {
                battleController.conductUserUseMove(moveButton.textContent)
            })
            
        }
    }

    configureAnnouncementProgression(){
        this.announcerBox.addEventListener("click", () => {
            BattleAnnouncer.updateAnnouncerBoxText()
        })
    }

}

