
let cards = [];
let suits = ['c', 'd', 'h', 's'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let p1Hand = []; p1Score = 0;
let p2Hand = []; p2Score = 0;


shuffle();



function compare(){
    $('#message').text(`Something`); 
    return;
};

function stand(player){
    if(p1){p1Stand=true}else{p2Stand=true};
    return;
};

function draw(){

}

function fold(){
    if(p1){p1Fold=true}else{p2Fold=true};
    return;
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
    if(cards.length <= 16) {
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


$('#p1Stand').on('click', p1Stand);
$('#p1Draw').on('click', p1Draw);
$('#p1Fold').on('click', p1Fold);
$('#p2Stand').on('click', p2Stand);
$('#p2Draw').on('click', p2Draw);
$('#p2Fold').on('click', p2Fold);
