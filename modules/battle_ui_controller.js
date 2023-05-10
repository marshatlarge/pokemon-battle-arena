import BattleAnnouncer from "./battle_announcer.js"

export default class BattleUIController {

    constructor() {

        this.fightButton = document.getElementById("fightButton")
        this.runButton = document.getElementById("runButton")
        this.healButton = document.getElementById("healButton")
        this.pokeballButton = document.getElementById("pokeballButton")
        this.moveButtons = document.getElementsByClassName("moveOption") 

        this.announcerBox = document.getElementById("announcerBox")

        this.userHealthContainer = document.getElementById("userHealthContainer")
        this.userHealthBar = document.getElementById("userHealthBar")

        this.enemyHealthContainer = document.getElementById("enemyHealthContainer")
        this.enemyHealthBar = document.getElementById("enemyHealthBar")

        this.gameboyShell = document.getElementById("gbaCasing")

        this.userImg = document.getElementById("charizard")
        this.enemyImg = document.getElementById("enemyPokemon")

        this.pokeballCountBox = document.getElementById("pokeballCountBox")
        this.potionCountBox = document.getElementById("potionCountBox")
        this.potionNumberLabel = document.getElementById("potionNumberLabel")

        this.hpDisplay = document.getElementById("hpDisplay")

        this.actionOptions = document.getElementsByClassName("actionOption")
        this.backButton = document.getElementById("backButton")

        
    }

    configureActionButtons(battleConductor) {
        this.fightButton.addEventListener("click", () => {
            battleConductor.getUserMoveChoice()
            this.backButton.style.display = "block"   
        })

        this.runButton.addEventListener("click", () => {
            battleConductor.conductUserRunAway()
            BattleAnnouncer.updateAnnouncerBoxText()
        })

        this.pokeballButton.addEventListener("click", () => {
            battleConductor.conductUserThrowPokeball()
            BattleAnnouncer.updateAnnouncerBoxText()
        })

        this.healButton.addEventListener("click",() => {
            battleConductor.conductUserHeal()
            BattleAnnouncer.updateAnnouncerBoxText()
            this.potionNumberLabel.textContent = battleConductor.user.numPotions
            this.updateUserHealthBar(battleConductor) //this means that heal will really only be used by players if it is to work like this
            if(this.announcerBox.innerText == `Charizard was healed!`) {
                if(battleConductor.getBattlerIsDefeated()) {
                    battleConductor.endBattle()
                } else {
                    battleConductor.conductCpuTurn()
                }
            }
        })

        this.pokeballButton.addEventListener("mouseenter", () => {
            this.pokeballCountBox.style.display = "flex"
        })

        this.pokeballButton.addEventListener("mouseleave", () => {
            this.pokeballCountBox.style.display = "none"
        })

        this.healButton.addEventListener("mouseenter", () => {
            this.potionCountBox.style.display = "flex"
        })

        this.healButton.addEventListener("mouseleave", () => {
            this.potionCountBox.style.display = "none"
        })



    }

    configureBackButton() {
        this.backButton.addEventListener("click", ()=> {
            this.backButton.style.display = "none"
            BattleAnnouncer.updateAnnouncerBoxText()
        })
    }

    configureMoveButtons(battleConductor) {
        for (let moveButton of this.moveButtons) {
            
            moveButton.addEventListener("click", () => {
                this.backButton.style.display = "none" 
                battleConductor.conductUserUseMove(moveButton.textContent)
                BattleAnnouncer.updateAnnouncerBoxText()
                if(BattleAnnouncer.isAnnouncingMissNext()) {
                    
                    battleConductor.conductCpuTurn()
                    return
                }
                if(this.announcerBox.textContent.startsWith(`${battleConductor.user.pokemon.name} used`)) {
                    this.updateEnemyHealthBar(battleConductor)
                    this.triggerEnemyAnimation()
                    if(battleConductor.getBattlerIsDefeated()) {
                        battleConductor.endBattle()
                    } else {
                        battleConductor.conductCpuTurn()
                    }
                }
            })
            
        }
    }

    configureBattleProgression(battleConductor){ //can also update health of UI here depending on what exactly happened
        this.gameboyShell.addEventListener("click", () => {
            if(this.announcerBox.innerText == `What would you like Charizard to use?`) {
                return
            }
            this.progressBattle(battleConductor)
            if (this.announcerBox.innerText == `What would you like to do?`) {
                this.triggerOptionsAnimation()
            }
           
            
        })

        this.announcerBox.addEventListener("click", () => {
            if(this.announcerBox.innerText == `What would you like Charizard to use?`) {
                return
            }
            this.progressBattle(battleConductor)
            if (this.announcerBox.innerText == `What would you like to do?`) {
                this.triggerOptionsAnimation()
            }
            
        })

    }

    progressBattle(battleConductor) {
        if (this.announcerBox.textContent == `The battle is over.`) {
            location.reload()
            return
        }
        BattleAnnouncer.updateAnnouncerBoxText()
        if(BattleAnnouncer.isAnnouncingMissNext()) {
            return
        }
        if(this.announcerBox.textContent.startsWith(`${battleConductor.cpu.pokemon.name} used`)) {
            this.updateUserHealthBar(battleConductor)
            this.triggerUserAnimation()
        }

    }

    //MAYBE MAKE A WHOLE CLASS TO DO THE HEALTH UI STUFF
    updateUserHealthBar(battleConductor) {
        
        let userPercentage = battleConductor.getUserHealthPercentage()
        let numPixelsUser = Math.ceil(userPercentage * this.userHealthContainer.clientWidth)

        if (userPercentage >= 0.6) {
            this.userHealthBar.style.backgroundColor = "#99FCB4"
        } else if (userPercentage >= 0.2) {
            this.userHealthBar.style.backgroundColor = "#FAEA5F"

        } else {
            this.userHealthBar.style.backgroundColor = "#EC6646"
        }

        if (numPixelsUser > 10) {  
            this.userHealthBar.style.width = numPixelsUser + "px"
        } else if (numPixelsUser <= 0) {
            this.userHealthBar.style.width = "0px"
        } else{
            this.userHealthBar.style.width = "10px"
        }   

        this.updateHPDisplay(battleConductor)
    }

    updateEnemyHealthBar(battleConductor) {
        let cpuPercentage = battleConductor.getCpuHealthPercentage()
        let numPixelsCpu = Math.ceil(cpuPercentage * this.enemyHealthContainer.clientWidth)

        //CHANGE COLOR OF BAR
        if (cpuPercentage >= 0.6) {
            this.enemyHealthBar.style.backgroundColor = "#99FCB4"
        } else if (cpuPercentage >= 0.2) {
            this.enemyHealthBar.style.backgroundColor = "#FAEA5F"

        } else {
            this.enemyHealthBar.style.backgroundColor = "#EC6646"
        }

        //CHANGE SIZE OF BAR
        if (numPixelsCpu > 10) {
            this.enemyHealthBar.style.width = numPixelsCpu + "px"
        } else if (numPixelsCpu <= 0) {
            this.enemyHealthBar.style.width = "0px"
        }
        else {
            this.enemyHealthBar.style.width = "10px"
        }

        this.triggerEnemyAnimation()
    }

    triggerEnemyAnimation() {
        this.enemyImg.style.animation = "none"; // reset animation property
        void this.enemyImg.offsetWidth;
        this.enemyImg.style.animation="blink 0.2s linear 2";
    }

    triggerUserAnimation() {
        this.userImg.style.animation = "none"; // reset animation property
        void this.userImg.offsetWidth;
        this.userImg.style.animation="blink 0.2s linear 2";
    }

    triggerOptionsAnimation() {
        for (let option of this.actionOptions) {
            option.style.animation="none"
            void option.offsetWidth
            option.style.animation="textFlash 0.3s linear 1"
        }
    }


    updateHPDisplay(battleConductor) {
        let currentHealth = Math.ceil(battleConductor.user.pokemon.health)
        if(currentHealth < 0) {
            currentHealth = 0
        }
        let maxHealth = battleConductor.user.pokemon.maxHealth
        this.hpDisplay.innerText = `${currentHealth}/${maxHealth}`
    }
}

