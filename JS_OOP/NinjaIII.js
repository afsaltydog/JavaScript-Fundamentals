class Ninja {
	constructor(name, health = 100, speed = 3, strength = 3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}

	get name () { 
        return this._name; 
    }
    set name (name) { 
        this._name = name;
    }

    get health () { 
        return this._health; 
    }
    set health (health) { 
        this._health = health;
    }

    get speed () { 
        return this._speed; 
    }
    set speed (speed) { 
        this._speed = speed;
    }

    get strength () { 
        return this._strength; 
    }
    set strength (strength) { 
        this._strength = strength;
    }

    sayName() {
    	//- This should log that Ninja's name to the console.
    	console.log(`Ninja name: ${ this.constructor.name }`)
    }
   	
	showStats() {
		//- This should show the Ninja's name, strength, speed, and health.
		console.log(`Name: ${ this.name } Strength: ${ this.strength } Speed: ${ this.speed } Health: ${ this.health }`);
	}
	drinkSake() {
		//- This should add +10 health to the Ninja
		this.health += 10;
		console.log(`Your health increased by 10: ${ this.health }`);
	}
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    // simple function in the child class
    speakWisdom() {
        // by using super, we can call the parent method
        const message = super.drinkSake();
        if (message != undefined) {
        	console.log(message);
    	}
        wise_sayings = ["If you want to fly, you have to give up the things that weigh you down.", "If you don't want anyone to find out, don't do it!", "Knowing is not enough, we must apply. Willing is not enough, we must do."];
        var i = Math.floor((Math.random() * 3) + 1);
        console.log("i is "+i);
        console.log(wise_sayings[i-1]);
    }
}

var ninja = new Ninja("Nobunaga");
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"