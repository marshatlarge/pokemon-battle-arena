class BattleAnnouncer { //currently these will all be console.logs, but eventually these will write to the battle text box as well

    constructor(){
    }

    announceSupereffective() {
        console.log(`It's super effective!`)
    }

    announceMiss() {
        console.log(`The attack missed!`)
    }

    announceImmunity(target) {
        console.log(`${target.name} is immune. The attack has no effect...`)
    }

    announceMove(pokemon, move) {
        console.log(`${pokemon.name} used ${move.name}!`)
    }

    announceCrit() {
        console.log(`It's a critical hit!`)
    }

    announceResistance() {
        console.log(`It's not very effective.`)
    }

    announceStartOfBattle(){
        console.log(`A wild trainer appeared with a random Pokémon from the PokéAPI!`)
    }

    announceEnemyThrow(pokemon){
        console.log(`The trainer throws out ${pokemon.name}!`)
    }

    announceUserThrow(pokemon) {
        console.log(`Go get 'em ${pokemon.name}!`)
    }

    announcePotionUse(pokemon) {
        console.log(`${pokemon.name} was healed!`)
    }

    announceZeroPotions() {
        console.log(`Oops! Unfortunately, you're all out of potions.`)
    }

    announceHealthLimit(pokemon) {
        console.log(`${pokemon.name} is already at full health!`)
    }

}

export default new BattleAnnouncer()