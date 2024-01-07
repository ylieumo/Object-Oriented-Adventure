// // Part 1: Humble Beginnings.
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }

//     // From the adventurer object, let access Robin’s inventory using a combination of dot notation and square bracket syntax.

//    console.log(adventurer.inventory[0]);


// //   create a loop that logs each item in Robin’s inventory.

// let loop = "";
 
// for (let x in adventurer){
//     loop += adventurer[x] + " ";
// };
// console.log(loop)

// Nested arrays and objects: give Robin’s feline friend a friend of his own.

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


// Part 4: Class Uniforms.


// Part 5: Gather your Party.


// Part 6: Developing Skills.


// Part 7: Adventure Forth.
