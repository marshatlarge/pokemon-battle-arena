import UIController from "./ui_controller.js"

class BattleAnnouncer { //currently these will all be console.logs, but eventually these will write to the battle text box as well
//maybe should change where these are called in the code. Should they be called in the battle controller only, or should they be called in trainer methods?
//and should some of them be replaced with error messages?
    constructor(){
    }

    announceSupereffective() {
        let text = `It's super effective!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)

    }

    announceMiss() {
        let text = `The attack missed!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceImmunity(target) {
        let text = `${target.name} is immune. The attack has no effect...`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceMove(pokemon, move) {
        let text = `${pokemon.name} used ${move.name}!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceCrit() {
        let text = `It's a critical hit!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceResistance() {
        let text = `It's not very effective.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceStartOfBattle(){
        let text = `A wild trainer appeared with a random Pokémon from the PokéAPI!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceEnemyThrow(pokemon){
        let text = `The trainer throws out ${pokemon.name}!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceUserThrow(pokemon) {
        let text = `Go get 'em ${pokemon.name}!`
        console.log(text) 
        UIController.updateAnnouncerBoxText(text) 
    }

    announcePotionUse(pokemon) {
        let text = `${pokemon.name} was healed!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceZeroPotions() {
        let text = `Oops! Unfortunately, you're all out of potions.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceHealthFull(pokemon) {
        let text = `${pokemon.name} is already at full health.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceThrowPokeballError() {
        let text = `Sorry, you can't catch an opposing trainer's Pokemon.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceRunAway() {
        let text = `You ran away!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceBattleOver() {
        let text = `The battle is over.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceInvalidMove() {
        let text = `That isn't a valid move.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceActionPrompt() {
        let text = `What would you like to do?`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

    announceMovePrompt(pokemon) {
        let text = `What would you like ${pokemon.name} to use?`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
    }

}

export default new BattleAnnouncer()