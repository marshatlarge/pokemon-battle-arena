import UIController from "./ui_controller.js"

class BattleAnnouncer { 
    constructor(){
    }

    announceSupereffective() {
        let text = `It's super effective!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
        

    }

    announceMiss() {
        let text = `The attack missed!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceImmunity(target) {
        let text = `${target.name} is immune. The attack has no effect...`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceMove(pokemon, move) {
        let text = `${pokemon.name} used ${move.name}!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceCrit() {
        let text = `It's a critical hit!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceResistance() {
        let text = `It's not very effective.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceStartOfBattle(){
        let text = `A wild trainer appeared with a random Pokémon from the PokéAPI!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceEnemyThrow(pokemon){
        let text = `The trainer throws out ${pokemon.name}!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceUserThrow(pokemon) {
        let text = `Go get 'em ${pokemon.name}!`
        console.log(text) 
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announcePotionUse(pokemon) {
        let text = `${pokemon.name} was healed!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceZeroPotions() {
        let text = `Oops! Unfortunately, you're all out of potions.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceHealthFull(pokemon) {
        let text = `${pokemon.name} is already at full health.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceThrowPokeballError() {
        let text = `Sorry, you can't catch an opposing trainer's Pokemon.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceRunAway() {
        let text = `You ran away!`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceBattleOver() {
        let text = `The battle is over.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceInvalidMove() {
        let text = `That isn't a valid move.`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayFullAnnouncerBox()
        this.displayForSetTime()
    }

    announceActionPrompt() {
        let text = `What would you like to do?`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayActionOptionsBox()
    }

    announceMovePrompt(pokemon) {
        let text = `What would you like ${pokemon.name} to use?`
        console.log(text)
        UIController.updateAnnouncerBoxText(text)
        UIController.displayMoveOptionsBox()
    }

    displayForSetTime(){
        wait(2000);
    }

}

export default new BattleAnnouncer()