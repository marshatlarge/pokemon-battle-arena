class UIController {

    constructor() {
        this.announcerBox = document.getElementById("announcerBox")
        this.fightButton = document.getElementById("fightButton")
        this.runButton = document.getElementById("runButton")
        this.healButton = document.getElementById("healButton")
        this.pokeballButton = document.getElementById("pokeballButton")

    }

    updateAnnouncerBoxText(text) {
        this.announcerBox.textContent = text
    }



}

export default new UIController()