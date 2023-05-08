export default class MenuUIController {
    constructor(){

        this.homeScreen = document.getElementById("homeScreen")
        this.startButton = document.getElementById("startButton")

    }

    configureButtons(){
        this.startButton.addEventListener("click", ()=> {
            this.homeScreen.style.display = "none"
            //call function to remove event listener from gameboy needed to emphasize start button
            //call function that loads the pokemon and starts up the whole battle -- maybe even add an animation or loading screen while waiting
        })
    }

    //create a way to emphasize the start button here if the user clicks the gameboy
}