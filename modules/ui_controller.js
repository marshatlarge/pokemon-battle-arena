import BattleController from "./battle_controller.js"

class UIController {

    constructor() {
        this.announcerBox = document.getElementById("announcerBox")
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

    displayPickActionScreen() {

    }

    displayPickMoveScreen() {

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