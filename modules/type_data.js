class TypeData {
    constructor(){

        this.typeResistances = this.getTypeResistances()
        this.typeImmunities = this.getTypeImmunities()
        this.typeWeaknesses = this.getTypeWeaknesses()
    }

    getTypeResistances() {
        return {
            "normal":[""],
            "fire":["fire", "grass","ice","bug","steel"],
            "water":["fire","water","ice", "steel"],
            "grass":["water","grass","electric","ground"],
            "electric":["electric","flying"],
            "ice":["ice"],
            "fighting":["bug","rock","dark"],
            "poison":["grass","fighting","poison","bug"],
            "ground":["poison","rock"],
            "flying":["grass","fighting","bug"],
            "psychic":["fighting","psychic"],
            "bug":["grass","fightning","ground"],
            "rock":["normal","fire","poison","flying"],
            "ghost":["poison","bug"],
            "dragon":["fire","water","grass","electric"],
            "dark":["ghost","dark"],
            "steel":["normal","grass","ice","flying","psychic","bug","rock","ghost","dragon","dark","steel"]
        }
    }

    getTypeImmunities() {
        return {
            "normal":["ghost"],
            "fire":[""],
            "water":[""],
            "grass":[""],
            "electric":[""],
            "ice":[""],
            "fighting":[""],
            "poison":[""],
            "ground":["electric"],
            "flying":["ground"],
            "psychic":[""],
            "bug":[""],
            "rock":[""],
            "ghost":["normal","fighting"],
            "dragon":[""],
            "dark":["psychic"],
            "steel":["poison"]
        }
    }

    getTypeWeaknesses() {
        return {
            "normal":["fighting"],
            "fire":["water","rock","ground"],
            "water":["grass","electric"],
            "grass":["fire","ice","poison","flying","bug"],
            "electric":["ground"],
            "ice":["fire","fighting","rock","steel"],
            "fighting":["flying","psychic"],
            "poison":["ground","psychic"],
            "ground":["water","grass","ice"],
            "flying":["electric","ice"],
            "psychic":["bug","ghost","dark"],
            "bug":["fire","flying","rock"],
            "rock":["water","grass","fighting","ground","steel"],
            "ghost":["ghost","dark"],
            "dragon":["ice","dragon"],
            "dark":["bug","fighting"],
            "steel":["fire","fighting","ground"]
        }
    }





}






