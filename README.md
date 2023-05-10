# Pokemon_Battle_Arena

Summary: A pokémon battle simulator where the user uses Charizard to battle a random first generation pokémon fetched from the PokéAPI.

Tech Stack & Purpose: Built with HTML, CSS, and Vanilla JS. The purpose of this was to build a project that implements a 3rd party API.

More Detailed Project Description:

Because the purpose of this project was to showcase working with an API, its systems are slightly altered from the original Pokémon game. There are no buffs or debuffs, no status effects, no held items, and moves like "fly" or "bide" that take multiple turns to use are not available. If you're familiar with them, this project did not implement EV's and IV's.

The Battle System: Damage dealt and damage taken is calculated based on randomly generated attack and defense stats for each pokémon. Damage multipliers are applied for type resistances and weaknesses. Critical hits have a 10% chance. The probability of attacks missing is based on the move accuracy value. First-move advantage is granted to whichever pokémon has the higher speed. The move that an enemy uses on its turn is randomly chosen from its move set.

Pokemon Stats and Move Sets: Pokemon are randomly assigned basic attack, defense, health, and speed stats at the beginning of the battle. Attack and defense stats are considered in calculating damage dealt and damage taken. Enemy pokémon are given a level between 66 and 75 (this is more for appearances as the level has no effect on stats). Enemy pokémons' movesets consist of using all purely damage-dealing first generation moves that are learnable by the pokémon. Because of this, a given pokémon's moveset may consist of as few as 2 moves and as many as 8 or more moves.

Future Fixes and Patches:
-Update this readme to be more descriptive of design approach
-Make UI more responsive (for mobile)
-Refactor code (specifically, make an animations singleston and dom elements singleton, which should help clean everything up. Fix oter tightly coupled components of the project)
