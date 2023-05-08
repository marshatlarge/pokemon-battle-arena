class TypeData {
    constructor(){

        this.typeResistances = this.getTypeResistances()
        this.typeImmunities = this.getTypeImmunities()
        this.typeWeaknesses = this.getTypeWeaknesses()
        this.movesMasterList = this.getMovesMasterList()
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

    getMovesMasterList() {
        return {
            "normal": [
                {
                    "name":"Tackle",
                    "power":40,
                    "accuracy":100
                },
                {
                    "name":"Mega Kick",
                    "power":120,
                    "accuracy":75
                },
                {
                    "name":"Slash",
                    "power":70,
                    "accuracy":100
                },
                {
                    "name":"Scratch",
                    "power":40,
                    "accuracy":100
                },
            ],
        
            "fire": [
                {
                    "name":"Flamethrower",
                    "power":90,
                    "accuracy":100
                },
                {
                    "name":"Fire Punch",
                    "power":75,
                    "accuracy":100
                },
                {
                    "name":"Fire Blast",
                    "power":110,
                    "accuracy":85
                }
            ],
        
            "water": [
                {
                    "name":"Bubble",
                    "power":40,
                    "accuracy":100
                },
                {
                    "name":"Surf",
                    "power":90,
                    "accuracy":100
                },
                {
                    "name":"Waterfall",
                    "power":80,
                    "accuracy":100
                }
            ],
        
            "grass": [
                {
                    "name":"Razor Leaf",
                    "power":55,
                    "accuracy":95
                },
                {
                    "name":"Vine Whip",
                    "power":45,
                    "accuracy":100
                }
            ],
        
            "electric": [
                {
                    "name":"Thunder",
                    "power":110,
                    "accuracy":70
                },
                {
                    "name":"Thunder Punch",
                    "power":75,
                    "accuracy":100
                },
                {
                    "name":"Thunderbolt",
                    "power":90,
                    "accuracy":100
                }
            ],
        
            "ice": [
                {
                    "name":"Ice Beam",
                    "power":90,
                    "accuracy":100
                },
                {
                    "name":"Ice Punch",
                    "power":75,
                    "accuracy":100
                },
                {
                    "name":"Blizzard",
                    "power":110,
                    "accuracy":70
                }
            ],
        
            "fighting": [
                {
                    "name":"Karate Chop",
                    "power":50,
                    "accuracy":100
                },
                {
                    "name":"Low Kick",
                    "power":70,
                    "accuracy":100
                }
            ],
        
            "poison": [
                {
                    "name":"Sludge",
                    "power":65,
                    "accuracy":100
                },
                {
                    "name":"Acid",
                    "power":40,
                    "accuracy":100
                }
            ],
        
            "ground": [
                {
                    "name":"Earthquake",
                    "power":100,
                    "accuracy":100
                },
                {
                    "name":"Bone Club",
                    "power":65,
                    "accuracy":85
                },
                {
                    "name":"Bonemerang",
                    "power":50,
                    "accuracy":90
                }
            ],
        
            "flying": [
                {
                    "name":"Drill Peck",
                    "power":80,
                    "accuracy":100
                },
                {
                    "name":"Wing Attack",
                    "power":60,
                    "accuracy":100
                },
                {
                    "name":"Gust",
                    "power":40,
                    "accuracy":100
                }
            ],
        
            "psychic": [
                {
                    "name":"Confusion",
                    "power":50,
                    "accuracy":100
                },
                {
                    "name":"Psybeam",
                    "power":65,
                    "accuracy":100
                },
                {
                    "name":"Psychic",
                    "power":90,
                    "accuracy":100
                }
            ],
        
            "bug": [
                {
                    "name":"Pin Missle",
                    "power":70,
                    "accuracy":95
                },
                {
                    "name":"Twin Needle",
                    "power":50,
                    "accuracy":100
                }
            ],
        
            "rock": [
                {
                    "name":"Rock Slide",
                    "power":75,
                    "accuracy":90
                },
                {
                    "name":"Rock Throw",
                    "power":50,
                    "accuracy":90
                }
            ],
        
            "ghost": [
                {
                    "name":"Lick",
                    "power":30,
                    "accuracy":100
                }
            ],
        
            "dragon": [
                {
                    "name":"Dragon Rage",
                    "power":80,
                    "accuracy":100
                }
            ],
        
            "dark": [
                {
                    "name":"Bite",
                    "power":60,
                    "accuracy":100
                }
            ]  
        }
    }
}







