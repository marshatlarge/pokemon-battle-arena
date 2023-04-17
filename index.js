import Pokemon from "./modules/pokemon.js";
import { Move } from "./modules/pokemon.js";
import BattleController from "./modules/battle.js";

console.log('hello')

let move1 = new Move('Fire','Flamethrower',100,100)
let move2 = new Move('Normal','Tackle',100,100)
let moveList = [move1, move2]

let myPokemon = new Pokemon(moveList,500,40,20,0,'Fire',null,null,null)
let enemyPokemon = new Pokemon(moveList,300,20,10,0,'Normal',null,null,null)

console.log(enemyPokemon.health)

let bc = new BattleController()

bc.useMove(myPokemon, enemyPokemon, myPokemon.getMove('Flamethrower'))

console.log(enemyPokemon.health)