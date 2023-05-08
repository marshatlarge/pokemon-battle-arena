import pokemon from "./modules/pokemon.js"
import Trainer from "./modules/trainer.js"
import BattleConductor from "./modules/battle_conductor.js";
import BattleUIController from "./modules/battle_ui_controller.js";
import MenuUIController from "./modules/menu_ui_controller.js"

//Need a module to do trainer and pokemon and move generation via pulling from the API
//Also, randomly assign a level and stats to the enemy trainer's pokemon
//Should have a premade list of movesets for each type of pokmeon, so not to overdo the calls to the API.
//Also, this way, there will be more control over movesets that make sense for the web app. Avoid moves with status effects or moves that self inflict damage for sake of simplicity

//NOTE- make a class that updates the UI, and make a class that is responsible for performing animations
//fist build UI by hardcoding sizes and positions of assets. Then, convert those to relative sizes and positions, make responsive.




let muic = new MenuUIController()
muic.configureButtons()


let userTrainer = new Trainer(pokemon.charizard)
let enemyTrainer = new Trainer(pokemon.blastoise)

let bc = new BattleConductor(userTrainer, enemyTrainer)
let buic = new BattleUIController()

buic.configureActionButtons(bc)
buic.configureMoveButtons(bc)
buic.configureBattleProgression(bc)
buic.configureBackButton()

bc.startBattle()

//BATTLE SYSTEM ISTELF IS COMPLETE EXCEPT FOR DAMAGE FORMULAS (WILL TWEAK AT END)
