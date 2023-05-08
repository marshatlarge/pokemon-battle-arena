import BattleConductor from "./battle_conductor.js"
import BattleUIController from "./battle_ui_controller.js"
import pokemon from "./pokemon.js"
import Trainer from "./trainer.js"

class BattleLoader {

    constructor() {

    }

    loadBattle() {

        let userTrainer = this.makeUserTrainer()
        let enemyTrainer = this.makeEnemyTrainer()

        let bc = new BattleConductor(userTrainer, enemyTrainer)
        let buic = new BattleUIController()

        buic.configureActionButtons(bc)
        buic.configureMoveButtons(bc)
        buic.configureBattleProgression(bc)
        buic.configureBackButton()

        bc.startBattle()
    }

    makeUserTrainer() {
        return new Trainer(pokemon.charizard)
    }

    makeEnemyTrainer() {
        return new Trainer(pokemon.blastoise)
    }

}

export default new BattleLoader()