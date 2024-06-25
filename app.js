
// Humble Beginnings
const adventurer = {
    name: "robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
      },
    },
    roll(mod = 0) {
        //
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    },
  };

  class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
// 

    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
    }
  }

    const robin = new Adventurer("Robin", "Scout");
    inventory = ["sword", "potion", "artifact"];
    robin.companion = new Companion("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Companion("Frank");
    robin.companion.companion.type = "Flea";
    robin.companion.companion.inventory = ["small hat", "sunglasses"];
    robin.scout();
    robin.companion.assist();
    robin.companion.companion.assist();



 //

 class Adventurer extends Character {
    static max_def = 150;
    static roles = ["Sorcerer", "Auror", "Dementor"];
    constructor(name, role) {
      super(name);
     
  
      this.inventory.push("bedroll", "50 gold coins");
    }
  //
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
        console.log(this.ROLES);
      }
    
      roleMatches(role) {
        const result = false;
        this.ROLES.forEach((element) => {
          if (element === role) {
            result = true;
          }
        });
    
        return result;
      }
    };
