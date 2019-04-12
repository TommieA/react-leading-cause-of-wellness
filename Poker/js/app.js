
let cards = [];
let suits = [' Clubs', ' Diamonds', ' Hearts', ' Spades'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

let p1Hand = []; p1Score = 0;
let p2Hand = []; p2Score = 0;

shuffle();

function compare(){
    $('#message').text(`Something`); 
    return;
};

function p1Card1Btn(){
    p1Hand[0] = cards.shift();
    $('#p1Card1').text(`${p1Hand[0]}`);
    $('#p1Card1Btn').css('opacity', 0);
};

function p1Card2Btn(){
    p1Hand[1] = cards.shift();
    $('#p1Card2').text(`${p1Hand[1]}`);
    $('#p1Card2Btn').css('opacity', 0);
};

function p1Card3Btn(){
    p1Hand[2] = cards.shift();
    $('#p1Card3').text(`${p1Hand[2]}`);
    $('#p1Card3Btn').css('opacity', 0);
};

function p1Card4Btn(){
    p1Hand[3] = cards.shift();
    $('#p1Card4').text(`${p1Hand[3]}`);
    $('#p1Card4Btn').css('opacity', 0);
};

function p1Card5Btn(){
    p1Hand[4] = cards.shift();
    $('#p1Card5').text(`${p1Hand[4]}`);
    $('#p1Card5Btn').css('opacity', 0);
};

function p1Fold(){
    p2Score++;
    $('#p2Score').text(`${p2Score}`);
    deal();
};

function p2Card1Btn(){
    p2Hand[0] = cards.shift();
    $('#p2Card1').text(`${p2Hand[0]}`);
    $('#p2Card1Btn').css('opacity', 0);
};

function p2Card2Btn(){
    p2Hand[1] = cards.shift();
    $('#p2Card2').text(`${p2Hand[1]}`);
    $('#p2Card2Btn').css('opacity', 0);
};

function p2Card3Btn(){
    p2Hand[2] = cards.shift();
    $('#p2Card3').text(`${p2Hand[2]}`);
    $('#p2Card3Btn').css('opacity', 0);
};

function p2Card4Btn(){
    p2Hand[3] = cards.shift();
    $('#p2Card4').text(`${p2Hand[3]}`);
    $('#p2Card4Btn').css('opacity', 0);
};

function p2Card5Btn(){
    p2Hand[4] = cards.shift();
    $('#p2Card5').text(`${p2Hand[4]}`);
    $('#p2Card5Btn').css('opacity', 0);
};

function p2Fold(){
    p1Score++;
    $('#p1Score').text(`${p1Score}`);
    deal();
};

function shuffle (){
    cards = [];
    for(let i = 0; i < suits.length; i++) {
        for(let k = 0; k < ranks.length; k++){
            cards.push(ranks[k] + suits[i]);
        };
    };
    let currentIndex = cards.length -1, tempCard = '', randomIndex = 0;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempCard = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = tempCard;
    };
};

function deal(){
    if(cards.length <= 18) {
        shuffle();
    };
    for(let i = 0; i < 5; i++){
        p1Hand[i] = cards.shift();
        p2Hand[i] = cards.shift();
    };
    p1Name = $('#inputP1Name').val();
    p2Name = $('#inputP2Name').val();

    console.log(cards);
    console.log(p1Hand);
    console.log(p2Hand);

    $('#p1Card1').text(`${p1Hand[0]}`);
    $('#p1Card2').text(`${p1Hand[1]}`);
    $('#p1Card3').text(`${p1Hand[2]}`);
    $('#p1Card4').text(`${p1Hand[3]}`);
    $('#p1Card5').text(`${p1Hand[4]}`);

    $('#p2Card1').text(`${p2Hand[0]}`);
    $('#p2Card2').text(`${p2Hand[1]}`);
    $('#p2Card3').text(`${p2Hand[2]}`);
    $('#p2Card4').text(`${p2Hand[3]}`);
    $('#p2Card5').text(`${p2Hand[4]}`);
 
};

$('#deal').on('click', deal);

$('#p1Fold').on('click', p1Fold);

$('#p2Stand').on('click', p2Stand);
$('#p2Fold').on('click', p2Fold);

$('#p1Card1Btn').on('click', p1Card1Btn);
$('#p1Card2Btn').on('click', p1Card2Btn);
$('#p1Card3Btn').on('click', p1Card3Btn);
$('#p1Card4Btn').on('click', p1Card4Btn);
$('#p1Card5Btn').on('click', p1Card5Btn);

$('#p2Card1Btn').on('click', p2Card1Btn);
$('#p2Card2Btn').on('click', p2Card2Btn);
$('#p2Card3Btn').on('click', p2Card3Btn);
$('#p2Card4Btn').on('click', p2Card4Btn);
$('#p2Card5Btn').on('click', p2Card5Btn);