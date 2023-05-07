import pokemon from "./modules/pokemon.js"
import Trainer from "./modules/trainer.js"
import BattleController from "./modules/battle_controller.js";
import UIController from "./modules/ui_controller.js";

//Need a module to do trainer and pokemon and move generation via pulling from the API
//Also, randomly assign a level and stats to the enemy trainer's pokemon
//Should have a premade list of movesets for each type of pokmeon, so not to overdo the calls to the API.
//Also, this way, there will be more control over movesets that make sense for the web app. Avoid moves with status effects or moves that self inflict damage for sake of simplicity

//NOTE- make a class that updates the UI, and make a class that is responsible for performing animations
//fist build UI by hardcoding sizes and positions of assets. Then, convert those to relative sizes and positions, make responsive.







let userTrainer = new Trainer(pokemon.charizard)
let enemyTrainer = new Trainer(pokemon.blastoise)

let bc = new BattleController(userTrainer, enemyTrainer)
let uic = new UIController()

uic.configureActionButtons(bc)
uic.configureMoveButtons(bc)
uic.configureBattleProgression(bc)
uic.configureBackButton()
/*
uic.configureAnnouncementProgression(bc)
*/

bc.startBattle()

//BATTLE SYSTEM ISTELF IS COMPLETE EXCEPT FOR DAMAGE FORMULAS (WILL TWEAK AT END)
