function Ninja(name, health = 100) {
    var speed = 3; // (private)
    var strength = 3; // (private)
    this.name = name;
    this.health = health;

    this.sayName = function() { // - This should log that Ninja's name to the console.
      console.log(this.name);
    }

    this.showStats = function() { // - This should show the Ninja's name, strength, speed, and health.
      console.log("Name: "+this.name + " Strength: "+strength+" Speed: "+speed+" Health: "+health);
    }

    this.drinkSake = function() { // - This should add +10 Health to the Ninja
      this.health += 10;
    }

    this.punch = function(ninja) {
      if (ninja instanceof Ninja){
        ninja.health -= 5;
        console.log(ninja.name+" was punched by "+name+" and lost 5 health!");
      }
      else
        console.log("You need to give me a ninja to punch!");
    }

    this.kick = function(ninja) {
      if (ninja instanceof Ninja){
        total = 15*strength;
        ninja.health -= total;
        console.log(ninja.name+" was kicked by "+name+" and lost "+total+" health!");
      }
      else
        console.log("You need to give me a ninja to kick!");
    }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);