
let cards = [];
let suits = [' Clubs', ' Diamonds', ' Hearts', ' Spades'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

let p1Hand = []; p1Score = 0;
let p2Hand = []; p2Score = 0;
let y      = 0;  let z   = 0;

shuffle();

function compare(){
    $('#message').text(`Something`); 
    return;
};

function p1Win(){
    p1Score++;
    $('#p1Score').text(`${p1Score}`);
    deal();
};

function p2Win(){
    p2Score++;
    $('#p2Score').text(`${p2Score}`);
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
    $('#message').text('');
    if(cards.length <= 16) {
        shuffle();
    };
    for(let i = 0; i < 5; i++){
        p1Hand[i] = cards.shift();
        p2Hand[i] = cards.shift();
    };
    p1Name = $('#inputP1Name').val();
    p2Name = $('#inputP2Name').val();

    // console.log(cards);
    // console.log(p1Hand);
    // console.log(p2Hand);

    for(let i = 0; i < 5; i++){
        $('#p1Card' + i).text(`${p1Hand[i]}`);
    };

    for(let i = 0; i < 5; i++){
        $('#p2Card' + i).text(`${p2Hand[i]}`);
    };
};

function draw(){
    $('#message').text('');
    y = 0; z = 0;
    for(let i = 0; i < 5; i++){
        if(p1Hand[i] === 'discard'){
            p1Hand[i] = cards.shift();
            $('#p1Card' + i).css('opacity', 1);
            $('#p1Card' + i).text(`${p1Hand[i]}`);
        };
    };

    for(let i = 0; i < 5; i++){
        if(p2Hand[i] === 'discard'){
            p2Hand[i] = cards.shift();
            $('#p2Card' + i).css('opacity', 1);
            $('#p2Card' + i).text(`${p2Hand[i]}`);
        };
    };
};

for(let i = 0; i < 5; i++){
    $('#p1Card' + i).on('click', () => {
        y++;
        if(y > 3){
            $('#message').text(p1Name  + ' can only discard 3 cards')
        }else{
        $('#p1Card' + i).css('opacity',0);
        p1Hand[i] = 'discard';
        };
    });
};

for(let i = 0; i < 5; i++){
    $('#p2Card' + i).on('click', () => {
        z++;
        if(z > 3){
            $('#message').text(p2Name + ' can only discard 3 cards')
        }else{
        $('#p2Card' + i).css('opacity',0);
        p2Hand[i] = 'discard';
        };
    });
};

$('#deal').on('click', deal);
$('#draw').on('click', draw);

$('#p1Win').on('click', p1Win);
$('#p2Win').on('click', p2Win);