import Pokemon from "./modules/pokemon.js";
import { Move } from "./modules/pokemon.js";
import Trainer from "./modules/trainer.js";
import BattleController from "./modules/battle_controller.js";

//Need a module to do trainer and pokemon and move generation via pulling from the API
//Also, randomly assign a level and stats to the enemy trainer's pokemon
//Should have a premade list of movesets for each type of pokmeon, so not to overdo the calls to the API.
//Also, this way, there will be more control over movesets that make sense for the web app. Avoid moves with status effects or moves that self inflict damage for sake of simplicity


let move1 = new Move('Fire','Flamethrower',100,100)
let move2 = new Move('Normal','Tackle',100,100)
let move3 = new Move('Water','Watergun',100,100)


let moveList1 = [move1, move2]
let moveList2 = [move2, move3]

let resistanceList1 = ['Fire', 'Grass']
let weaknessList1 = ['Water']
let immunitiesList1 = ['']

let resistanceList2 = ['Water', 'Fire']
let weaknessList2 = ['Electric', 'Grass']
let immunitiesList2 = ['']

let charizard = new Pokemon(moveList1,500,100,50,100, weaknessList1, immunitiesList1,resistanceList1,'Charizard')
let blastoise = new Pokemon(moveList2,500,100,30,1000,weaknessList2,immunitiesList2, resistanceList2,'Blastoise')


let userTrainer = new Trainer(blastoise)
let enemyTrainer = new Trainer(charizard)

let bc = new BattleController(userTrainer,enemyTrainer)

bc.runBattle()

//BATTLE SYSTEM ISTELF IS COMPLETE EXCEPT FOR DAMAGE FORMULAS (WILL TWEAK AT END)