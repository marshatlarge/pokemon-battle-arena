import Pokemon from "./modules/pokemon.js";
import { Move } from "./modules/pokemon.js";
import Trainer from "./modules/trainer.js";


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

let charizard = new Pokemon(moveList1,500,100,50,50,'Fire', weaknessList1, immunitiesList1,resistanceList1,'Charizard')
let blastoise = new Pokemon(moveList2,500,100,30,0,'Water',weaknessList2,immunitiesList2, resistanceList2,'Blastoise')

let userTrainer = new Trainer(blastoise)
let enemyTrainer = new Trainer(charizard)

console.log(`${enemyTrainer.pokemon.name}'s health is ${enemyTrainer.pokemon.health}`)
console.log(`${userTrainer.pokemon.name} used a move and dealt damage to ${enemyTrainer.pokemon.name}`)

userTrainer.useMove(enemyTrainer.pokemon, userTrainer.pickMove('Watergun'))

console.log(`${enemyTrainer.pokemon.name}'s health is now ${enemyTrainer.pokemon.health}`)