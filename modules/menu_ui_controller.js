import BattleLoader from "./battle_loader.js"

export default class MenuUIController {
    constructor(){

        this.homeScreen = document.getElementById("homeScreen")
        this.startButton = document.getElementById("startButton")
        this.infoButton = document.getElementById("infoButton")

        this.gameboyShell = document.getElementById("gbaCasing")

    }

    configureButtons(){

        //Emphasizes button if user is tapping or clicking elsewhere
        this.gameboyShell.addEventListener("click", ()=> {

            this.triggerMenuFlashAnimations()
        }
            
        )


        this.startButton.addEventListener("click", ()=> {
            this.homeScreen.style.display = "none"
            //Add a loading screen while waiting for the start fo the battle to load
            //I can call load battle here with the battle loader but call it asyncronously and immediately go to a waiting screen while waiting for it
            setTimeout(() => {
                BattleLoader.loadBattle()
            }, 5000)
           
        })
    }

    triggerMenuFlashAnimations() {
        this.startButton.style.animation = "none"
        this.startButton.offsetWidth
        this.startButton.style.animation = "startFlash 0.3s ease 2"

        this.infoButton.style.animation = "none"
        this.infoButton.offsetWidth
        this.infoButton.style.animation = "helpFlash 0.3s ease 2"
    }

}