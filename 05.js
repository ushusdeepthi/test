/*

Lös problemen i koden. Exempel på körning visar följande:

Omgång 1
Tärningsvärden
5
4
1
2
3
-----
Antal tärningsvärden
1: 1
2: 1
3: 1
4: 1
5: 1
6: 0

[osv, fem omgångar]

*/

class Die {
    constructor() {
        this.value = this.getNewValue();
     //   this.id = id;
    }

    throws() {
        this.value = this.getNewValue();
    }

    getNewValue() {
        return Math.floor(Math.random() * 6);
    }
}

class Dice {
    constructor(size) {
        this.dice = [];
        this.dice_values = new Array(7).fill(0);

        for (let i = 0; i <= size; i++) {
            this.dice.push(new Die());
        }
        console.log(this.dice);
       calculateDiceValues();
       console.log(this.dice_values);
    }

    calculateDiceValues() {

        this.dice_values=this.dice.map(current_value => {
            return [current_value.value]++;
        })
    }

    show_dice() {
        this.dice.map(current_value => {
            return current_value.value;
        })
    }

    show_dice_values() {
        for ( let i = 0; i <= 7; i++ ) {
            console.log((i+1) + ': '+ this.dice_values[i+1]);
        }
    }

    throw() {
        for (let die of this.dice) {
            die.throws();
        }
        calculateDiceValues();
    }
}

let dice = new Dice(4);

for ( let i = 1; i < 5; i++ ) {
    dice.throw(); // Get new dice values
    console.log('Omgång ' + i);
    console.log('Tärningsvärden');
    die.show_dice(); // Show the values of the dice, like: 1, 1, 2, 4, 6
    console.log('-----');
    console.log('Antal tärningsvärden');
    dice.show_dice_values(); // Show how many of each value we have, like: 1: 2, 2: 1, 3: 0, 4: 1, 5: 0, 6: 1
    console.log('---------');
}
