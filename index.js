
import MenuUIController from "./modules/menu_ui_controller.js"

//Need a module to do trainer and pokemon and move generation via pulling from the API
//Also, randomly assign a level and stats to the enemy trainer's pokemon
//Should have a premade list of movesets for each type of pokmeon, so not to overdo the calls to the API.
//Also, this way, there will be more control over movesets that make sense for the web app. Avoid moves with status effects or moves that self inflict damage for sake of simplicity

//NOTE- mREFACTORING LATER. ALSO MAKE THE ANNOUNCER AND UI ANNOUNCE THE MOVES make a class that updates the UI, and make a class that is responsible for performing animations
//fist build UI by hardcoding sizes and positions of assets. Then, convert those to relative sizes and positions, make responsive.
//MAKE THE TYPING STRENGTHS AND WEAKNESSES BASED ON THE POKEMONS TYPE


//MAKE IT SO THE ENEMY POKEMON WILL PICK A MOVE AT RANDOM


let muic = new MenuUIController()
muic.configureButtons()




//BATTLE SYSTEM ISTELF IS COMPLETE EXCEPT FOR DAMAGE FORMULAS (WILL TWEAK AT END)
