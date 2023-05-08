import BattleLoader from "./battle_loader.js"

export default class MenuUIController {
    constructor(){

        this.homeScreen = document.getElementById("homeScreen")
        this.startButton = document.getElementById("startButton")
        this.infoButton = document.getElementById("infoButton")

        this.gameboyShell = document.getElementById("gbaCasing")

    }

    configureButtons(){

        this.gameboyShell.addEventListener("click", ()=> {
            this.startButton.style.animation = "none"
            this.startButton.offsetWidth
            this.startButton.style.animation = "startFlash 0.3s ease 2"

            this.infoButton.style.animation = "none"
            this.infoButton.offsetWidth
            this.infoButton.style.animation = "helpFlash 0.3s ease 2"
        })


        this.startButton.addEventListener("click", ()=> {
            this.homeScreen.style.display = "none"
            // remove event listener from gameboy sehll needed to emphasize start button
            //maybe even add an animation or loading screen while waiting
            BattleLoader.loadBattle()
        })
    }

    
    //create a way to emphasize the start button here if the user clicks the gameboy
}