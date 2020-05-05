//global variables/arrays
const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let player1 = [];
let player2 = [];

//creates cards
 class Card {
 	constructor(suits, ranks, score) {
 		this.suits = suits
 		this.ranks = ranks
 		this.score = score
 	}				
 }
//this creates the deck and houses the functions to shuffle and split the deck.
 class Deck {
 	constructor() {
 		this.cards = [];
 		this.makeDeck()
 		this.length = this.cards.length;
 		this.shuffleDeck()
 		this.splitDeck()
 	}

//makes the deck of cards by looping through the card class.
	makeDeck(){
		for(let i = 0; i < suits.length; i++) {
 			for(let j = 0; j < ranks.length; j++) {
 				let card = new Card(suits[i],ranks[j], score[j])
 				this.cards.push(card);
 			}
 		}
 	}

//randomizes the this.card array.
 	shuffleDeck() {
    	for (let i = this.cards.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = this.cards[i]; //last card on array
		        this.cards[i] = this.cards[j];
		        this.cards[j] = temp;
    	}
	}	

//splits the this.card array (deck) into two equal halves of 26 cards
 	splitDeck() {
 		player1 = this.cards.slice(0, 26);
 		player2 = this.cards.slice(26, this.cards.length);
 		//console.log(player1);
 		//console.log(player2);
 	}
}


//class which runs the game
class War {
	constructor(hand1, hand2) {
		this.hand1 = [];
		this.hand1war = [];
		this.hand2 = [];
		this.hand2war = [];
		this.round = [];
		this.game()
		this.war()
	}

//runs the game outside of a "war" situation.
	game() {
		if(player1 > 1 && player2 > 1) {
			for(let i = 0; i < 1; i++) {
				this.hand1 = player1.shift()
				//console.log("game-hand1" + JSON.stringify(this.hand1))
				this.hand2 = player2.shift()
				//console.log("game-hand2" +JSON.stringify(this.hand2))
			
				if(this.hand1.score > this.hand2.score){
					player1.push(this.hand1)
					player1.push(this.hand2)
					//console.log("winner" + JSON.stringify(this.hand1))
					console.log(`player 1 wins this round with ${this.hand}`)//shows message with winning card(currently does not work)
				} else if(this.hand2.score > this.hand1.score) {
					player2.push(this.hand1)
					player2.push(this.hand2)
					//console.log("winner" + JSON.stringify(player2))
					console.log(`player 2 wins this round with ${this.hand}`)//shows message with winning card(currently does not work)
				} else {
					this.hand1war.push(this.hand1);//attempts to not lose the card that created war.
					this.hand2war.push(this.hand2);
					this.war()
				}
			}
		} else {
			
		}
	}

//contains the program for the "war" situation.  
	war() {
		for(let i = 0; i < 4; i++) {
			this.hand1war.push(player1[i])
			this.hand2war.push(player2[i])
		}
			//console.log(this.hand1)
			//console.log(this.hand2)
				if (this.hand1war[this.hand1war.length - 1].score > this.hand2war[this.hand2war.length - 1].score) {
					player1.push(this.hand1)
					player1.push(this.hand2)
					console.log(`player 1 wins this war with ${this.hand1war[3].suits.ranks.score}!`);
				} else if (this.hand1war[this.hand1war.length - 1].score < this.hand2war[this.hand2war.length - 1].score) {
					player2.push(this.hand1)
					player2.push(this.hand2)
					console.log(`player 2 wins this war with ${this.hand2war[3].suits.ranks.score}!`)
				} else {
					this.war()
				}
	}
}


//creates Deck and starts war game
const newDeck = new Deck()
const war = new War()

