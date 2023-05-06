import BattleController from "./battle_controller.js"

class UIController {

    constructor() {
        this.announcerBox = document.getElementById("announcerBox")
        this.selectionBox = document.getElementById("selectionBox")
        this.actionOptionsList = document.getElementById("actionOptionsList")
        this.moveOptionsList = document.getElementById("moveOptionsList")

        this.fightButton = document.getElementById("fightButton")
        this.runButton = document.getElementById("runButton")
        this.healButton = document.getElementById("healButton")
        this.pokeballButton = document.getElementById("pokeballButton")
        this.moveButtons = document.getElementsByClassName("moveOption")

        this.configureActionButtons()
        this.configureMoveButtons()
    }

    updateAnnouncerBoxText(text) {
        this.announcerBox.textContent = text
    }

    displayFullAnnouncerBox() {
        this.selectionBox.style.display = "none"
        return
    }

    displayMoveOptionsBox() {
        this.selectionBox.style.display = "flex"
        this.actionOptionsList.style.display = "none"
        this.moveOptionsList.style.display = "grid"
        return

    }

    displayActionOptionsBox() {
        this.selectionBox.style.display = "flex"
        this.moveOptionsList.style.display = "none"
        this.actionOptionsList.style.display = "grid"
        return

    }

    configureActionButtons() {
        this.fightButton.addEventListener("click", this.displayPickMoveScreen)
        this.runButton.addEventListener("click", BattleController.conductUserRunAway())
        this.pokeballButton.addEventListener("click", BattleController.conductUserThrowPokeball())
        this.healButton.addEventListener("click", BattleController.conductUserHeal())
    }

    configureMoveButtons() {
        for (let moveButton of this.moveButtons) {
            moveButton.addEventListener("click", BattleController.conductUserUseMove(this.textContent))
        }
    }

}

export default new UIController()