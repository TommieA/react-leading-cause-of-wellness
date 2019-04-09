
let cards = [];
let suits = ['c', 'd', 'h', 's'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let p1Hand = []; p1Score = 0;
let p2Hand = []; p2Score = 0;

shuffle();



function shuffle (){
    cards = [];
    for(let i = 0; i < suits.length; i++) {
        for(let k = 0; k < ranks.length; k++){
            cards.push(ranks[k] + suits[i]);
        };
    };
    let currentIndex = cards.length -1, tempCard = '  ', randomIndex = 0;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempCard = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = tempCard;
    };
};

function deal(){
    if(cards.length <= 16) {
        shuffle();
    };

    for(let i = 0; i < 5; i++){

        p1Hand[i] = cards.shift();
        p2Hand[i] = cards.shift();
    };
    console.log(cards);
    console.log(p1Hand);
    console.log(p2Hand);
};

$('#deal').on('click', function(){deal()});
$('#stand').on('click', function(){stand()});
$('#take').on('click', function(){take()});
$('#fold').on('click', function(){fold()});