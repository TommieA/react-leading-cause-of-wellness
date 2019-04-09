
let cards = [];
let cardsPlayed = [];

let suits = ['c', 'd', 'h', 's'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let myHand = [];
let meHand = [];

shuffle();

deal();

console.log(myHand);
console.log(meHand);

function shuffle (){
    for(let i = 0; i < suits.length; i++) {
        for(let k = 0; k < ranks.length; k++){
            cards.push(ranks[k] + suits[i]);
        };
    };
    let currentIndex = 52, tempCard = '  ', randomIndex = 0;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempCard = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = tempCard;
    };
};

function deal(){
    for(let i = 0; i < 5; i++){

        myHand[i] = cards.shift();
        meHand[i] = cards.shift();
    };
};