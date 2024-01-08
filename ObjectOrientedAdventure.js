// Part 1: Humble Beginnings.
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }

    // From the adventurer object, let access Robin’s inventory using a combination of dot notation and square bracket syntax.

   console.log(adventurer.inventory[0]);


//   create a loop that logs each item in Robin’s inventory.

let loop = "";
 
for (let x in adventurer){
    loop += adventurer[x] + " ";
};
console.log(loop)

Nested arrays and objects: give Robin’s feline friend a friend of his own.

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }

    // let Add a “companion” sub-object to “Leo”.
adventurer.companion.companionOfLeo = {
    name: "Frank",
    type: "Flea",
    belongings: ["small hat", "sunglasses"]
};

console.log(adventurer.companion.companionOfLeo);

console.log(adventurer);


// Give Robin the following method:

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: ...
    roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
    }
    
adventurer.roll()
adventurer.roll()
adventurer.roll()
adventurer.roll()
adventurer.roll()
adventurer.roll()


// Part 2: Class Fantasy.

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    // Adding the roll method to the Character class.
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
  }

  const robin = new Character("Robin");
  robin.roll()
  console.log(robin)

robin.inventory = ["sword", "potion", "artifact"];
console.log(robin.inventory);

robin.companion = new Character("Leo");
console.log(robin.companion);

robin.companion.type = "Cat";
console.log(robin.companion.type);

robin.companion.companion = new Character("Frank");
console.log(robin.companion.companion);

robin.companion.companion.type = "Flea";
console.log(robin.companion.companion.type);

robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin.companion.companion.inventory);

// Part 3: Class Features.
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }
  
  class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      //  Every adventurer should have water and food.
      this.Hydration = Hydration;
      this.Nutrition = Nutrition;
      // adventurer have to walk some distance.initial disatnce =0 
      this.distance = 0 
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    // Distance walk overtime 
    increaseDistance (amount){
      this.distance += amount;
      console.log(`${this.name} walked ${amount} km.`)
    } 
  }
  
  
  // Create a Companion class with specific properties and methods
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type; 
      this.isFriendly = true;
    }
  
    // Companion-specific method
    respectParent() {
      console.log(`${this.name} is respecting his parent.`);
    }
  }
  

// Part 4: Class Uniforms.

// Add a static MAX_HEALTH property to the Character class, equal to 100.

class Character {

    static MAX_HEALTH = 100;
  
    constructor (name) {
      this.name = name;
    }
  
  }
  console.log(Character.MAX_HEALTH);
  
  // Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard
  
  class Adventurer extends Character {
  
    static ROLES = ["fighter", "healer", "wizard"];
  
    constructor (name, role) {
      super(name);
      this.role = role;
      if (!Adventurer.isValidRole(role)) {
        throw new Error(`Invalid role`);  }
    
  }
  }
  console.log( Adventurer.ROLES);

// Part 5: Gather your Party.


// Part 6: Developing Skills.


// Part 7: Adventure Forth.
