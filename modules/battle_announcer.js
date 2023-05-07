class BattleAnnouncer { 
    
    constructor(){
        this.announcerBox = document.getElementById("announcerBox")
        this.selectionBox = document.getElementById("selectionBox")
        this.actionOptionsList = document.getElementById("actionOptionsList")
        this.moveOptionsList = document.getElementById("moveOptionsList")

        this.announcementsQueue = []


    }

    announceSupereffective() {
        let text = `It's super effective!`
        console.log(text)
        this.announcementsQueue.push(text)
         
    }

    announceMiss() {
        let text = `The attack missed!`
        console.log(text)
        this.announcementsQueue.push(text)
        
    }

    announceImmunity(target) {
        let text = `${target.name} is immune. The attack has no effect...`
        console.log(text)
        this.announcementsQueue.push(text)
        
    }

    announceMove(pokemon, move) { //maybe display immediately without needing to cycle through
        let text = `${pokemon.name} used ${move.name}!`
        console.log(text)
        this.announcementsQueue.push(text)

    }

    announceCrit() {
        let text = `It's a critical hit!`
        console.log(text)
        this.announcementsQueue.push(text)
       
    }

    announceResistance() {
        let text = `It's not very effective.`
        console.log(text)
        this.announcementsQueue.push(text)
        
    }

    announceStartOfBattle(){ //perhaps display this immediately
        let text = `A wild trainer appeared with a random Pokémon from the PokéAPI!`
        console.log(text)
        this.announcementsQueue.push(text)
        this.updateAnnouncerBoxText()
        
    }

    announceEnemyThrow(pokemon){
        let text = `The trainer throws out ${pokemon.name}!`
        console.log(text)
        this.announcementsQueue.push(text)
        
      
    }

    announceUserThrow(pokemon) {
        let text = `Go get 'em ${pokemon.name}!`
        console.log(text) 
        this.announcementsQueue.push(text)
        
       
    }

    announcePotionUse(pokemon) {
        let text = `${pokemon.name} was healed!`
        console.log(text)
        this.announcementsQueue.push(text)
        
        
    }

    announceZeroPotions() {
        let text = `Oops! Unfortunately, you're all out of potions.`
        console.log(text)
        this.announcementsQueue.push(text)
        
      
    }

    announceHealthFull(pokemon) {
        let text = `${pokemon.name} is already at full health.`
        console.log(text)
        this.announcementsQueue.push(text)
        
    
    }

    announceThrowPokeballError() {
        let text = `Sorry, you can't catch an opposing trainer's Pokemon.`
        console.log(text)
        this.announcementsQueue.push(text)
        
  
    }

    announceRunAway() {
        let text = `You ran away!`
        console.log(text)
        this.announcementsQueue.push(text)
       
    }

    announceBattleOver() {
        let text = `The battle is over.`
        console.log(text)
        this.announcementsQueue.push(text)
     
    }

    announceInvalidMove() {
        let text = `That isn't a valid move.`
        console.log(text)
        this.announcementsQueue.push(text)
        this.displayActionOptionsBox()
    }

    announceActionPrompt() { //can probably just put this on the side regardless
        let text = `What would you like to do?`
        console.log(text)
        this.announcementsQueue.push(text)
        this.updateAnnouncerBoxText()
        this.displayActionOptionsBox() 
    }

    announceMovePrompt(pokemon) { //can also put this on the side regardless
        let text = `What would you like ${pokemon.name} to use?`
        console.log(text)
        this.announcementsQueue.push(text)
        this.updateAnnouncerBoxText()
    }


    announceEnemyHasFainted(pokemon) {
        let text = `${pokemon.name} has fainted. You won!`
        console.log(text)
        this.announcementsQueue.push(text)
    }

    announceWhitedOut(pokemon) {
        let text = `${pokemon.name} has fainted. You whited out...`
        console.log(text)
        this.announcementsQueue.push(text)
    }



    updateAnnouncerBoxText() {
        
        if(this.announcementsQueue.length > 0) {
            this.displayFullAnnouncerBox()
            this.announcerBox.textContent = this.announcementsQueue.shift()
        }
        else {
            this.announceActionPrompt() 
        } 
    }

    displayFullAnnouncerBox() {
        this.selectionBox.style.display = "none"
    }

    displayMoveOptionsBox() {
        this.selectionBox.style.display = "flex"
        this.actionOptionsList.style.display = "none"
        this.moveOptionsList.style.display = "grid"
        return

    }

    displayActionOptionsBox() {
        this.selectionBox.style.display = "flex"
        this.moveOptionsList.style.display = "none"
        this.actionOptionsList.style.display = "grid"
        return

    }




}

export default new BattleAnnouncer()