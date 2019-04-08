class Card {
	constructor (suit, string_value, numerical_value) {
		this.suit = suit;
		this.string_value = string_value;
		this.numerical_value = numerical_value;
	}

	get suit () { 
        return this._suit; 
    }
    set suit (suit) { 
        this._suit = suit;
    }

    get string_value () { 
        return this._string_value; 
    }
    set string_value (string_value) { 
        this._string_value = string_value;
    }

    get numerical_value () { 
        return this._numerical_value; 
    }
    set numerical_value (numerical_value) { 
        this._numerical_value = numerical_value;
    }

    show() {
    	//- This should log that Ninja's name to the console.
    	console.log(`Suit: ${ this.constructor.suit } String value: ${ this.string_value } Numeric value: ${ this.numerical_value }`);
    }
}

class Deck extends Card {
	constructor (suit, string_value, numerical_value, deck) {
		super(suit, string_value, numerical_value);
		this.deck = function() {
			var deck = [];
			var s_val = "";
			var n_val = 0;
			var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
			for (var s = 0; s < suits.length; s++) {
				for (var i = 1; i < 13; i++){
					switch (i) {
					  case 1:
					  	s_val = "Ace";
					  	n_val = 1;
					  	break;
					  case 2:
					  	s_val = "Two";
					  	n_val = 2;
					  	break;
					  case 3:
					  	s_val = "Three";
					  	n_val = 3;
					  	break;
					  case 4:
					  	s_val = "Four";
					  	n_val = 4;
					  	break;
					  case 5:
					  	s_val = "Five";
					  	n_val = 5;
					  	break;
					  case 6:
					  	s_val = "Six";
					  	n_val = 6;
					  	break;
					  case 7:
					  	s_val = "Seven";
					  	n_val = 7;
					  	break;
					  case 8:
					  	s_val = "Eight";
					  	n_val = 8;
					  	break;
					  case 9:
					  	s_val = "Nine";
					  	n_val = 9;
					  	break;
					  case 10:
					  	s_val = "10";
					  	n_val = 10;
					  	break;
					  case 11:
					  	s_val = "Jack";
					  	n_val = 10;
					  	break;
					  case 12:
					  	s_val = "Queen";
					  	n_val = 10;
					  	break;
					  case 13:
					  	s_val = "King";
					  	n_val = 10;
					  	break;
					}
					var card = new Card(suits[s], s_val, n_val);
					deck.push(card);
				}
			}
			return deck;};;
	}

	get deck () { 
        return this._deck; 
    }
    set deck (deck) { 
        this._deck = deck;
    }

    new_deck() {
    	var deck = [];
		var s_val = "";
		var n_val = 0;
		var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
		for (var s = 0; s < suits.length; s++) {
			for (var i = 1; i < 13; i++){
				switch (i) {
				  case 1:
				  	s_val = "Ace";
				  	n_val = 1;
				  	break;
				  case 2:
				  	s_val = "Two";
				  	n_val = 2;
				  	break;
				  case 3:
				  	s_val = "Three";
				  	n_val = 3;
				  	break;
				  case 4:
				  	s_val = "Four";
				  	n_val = 4;
				  	break;
				  case 5:
				  	s_val = "Five";
				  	n_val = 5;
				  	break;
				  case 6:
				  	s_val = "Six";
				  	n_val = 6;
				  	break;
				  case 7:
				  	s_val = "Seven";
				  	n_val = 7;
				  	break;
				  case 8:
				  	s_val = "Eight";
				  	n_val = 8;
				  	break;
				  case 9:
				  	s_val = "Nine";
				  	n_val = 9;
				  	break;
				  case 10:
				  	s_val = "10";
				  	n_val = 10;
				  	break;
				  case 11:
				  	s_val = "Jack";
				  	n_val = 10;
				  	break;
				  case 12:
				  	s_val = "Queen";
				  	n_val = 10;
				  	break;
				  case 13:
				  	s_val = "King";
				  	n_val = 10;
				  	break;
				}
				var card = new Card(suits[s], s_val, n_val);
				deck.push(card);
			}
		}
		return deck;
    }

    shuffle() {
	  var m = this.deck.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = this.deck[m];
	    this.deck[m] = this.deck[i];
	    this.deck[i] = t;
	  }

	  return this.deck;
	}

	deal() {
		var i = Math.floor((Math.random() * 52) + 1);
		let card = this.deck[i];
		this.deck[i] = this.deck[this.deck.length-1];
		this.deck[this.deck.length-1] = card;
		this.deck.pop();
		return card;
	}

}

class Player {
	constructor (name, deck) {
		this.name = name;
		this.deck = deck;
		this.hand = [];
	}

	get name () { 
        return this._name; 
    }
    set name (name) { 
        this._name = name;
    }

    get deck () { 
        return this._deck; 
    }
    set deck (deck) { 
        this._deck = deck;
    }

    get hand () { 
        return this._hand; 
    }
    set hand (hand) { 
        this._hand = hand;
    }

	get_a_hand() {
		for (var i = 0; i < 5; i++) {
			this.hand += this.deck.deal();
		}
	}

	take_a_card() {
		this.hand = this.deck.deal();
	}

	discard_a_card(card) {
		this.deck.push(card);
	}
}

var deck = new Deck();
deck.shuffle();
var player1 = new Player("Joe", deck);
player1.get_a_hand();
console.log(player1.name+" has this hand: "+player1.hand);