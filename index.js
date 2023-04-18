import Pokemon from "./modules/pokemon.js";
import { Move } from "./modules/pokemon.js";
import Trainer from "./modules/trainer.js";
import BattleAnnouncer from "./modules/battle_announcer.js";

//Make something else called battle controller that controls the flow of the battle. 
//This is where Ill use a move is a move is picked and then check for fainting aftwerwards and
//end the battle if one has fainted
//Also, randomly assign a level and stats to the enemy trainer's pokemon

//Should have a premade list of movesets for each type of pokmeon, so not to overdo the calls to the API.
//Also, this way, there will be more control over movesets that make sense for the web app.
//avoid moves with status effects or moves that self inflict damage
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

let charizard = new Pokemon(moveList1,500,100,50,0, weaknessList1, immunitiesList1,resistanceList1,'Charizard')
let blastoise = new Pokemon(moveList2,500,100,30,0,weaknessList2,immunitiesList2, resistanceList2,'Blastoise')


let userTrainer = new Trainer(blastoise)
let enemyTrainer = new Trainer(charizard)

BattleAnnouncer.announceStartOfBattle()
BattleAnnouncer.announceEnemyThrow(enemyTrainer.pokemon)
BattleAnnouncer.announceUserThrow(userTrainer.pokemon)

console.log(`${enemyTrainer.pokemon.name}'s health is ${enemyTrainer.pokemon.health}`)

userTrainer.useMove(enemyTrainer.pokemon, userTrainer.pickMove('Tackle'))

console.log(`${enemyTrainer.pokemon.name}'s health is now ${enemyTrainer.pokemon.health}`)