let cards   = [];
let suit    = ['c', 'd', 'h', 's'];
let rank    = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let decks   = 6;
let p1Name  = $('#inputP1Name').val();
let dHand   = [];                dCount  = 0;
let p1Hand  = []; p1Score = 0;   p1Count = 0;
let s1Hand  = [];                s1Count = 0;
let y       = 0;  z       = 0;   x       = 1;
let p1Stand = false; s1Stand = false;
let p1DoubleDown = false;   s1DoubleDown = false;  p1Blackjack = false;    
let splitCards   = false;   splitValue   = [];
let p1Aces       = 0;       dAces        = 0;      s1Aces      = 0; 
let card         = "";
let result       = 0;       
let p1Total      = 0;       dTotal       = 0;      s1Total     = 0;

shuffle();

function shuffle() {
    console.log("shuffle");
    cards = [];
    for(let d = 0; d < decks; d++) {
        for(let s = 0; s < suit.length; s++) {
            for(let r = 0; r < rank.length; r++){
                cards.push(rank[r] + suit[s]);
            };
        };
    };
    
    let currentIndex = cards.length, tempCard = "", randomIndex = 0;

    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempCard = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex]  = tempCard;
    };
    clearCards();
    
    console.log(cards);
};

function clearCards() {
    for(let i = 0; i < 10; i++) {
        $('#dCard' + i).css('opacity',0);
        $('#p1Card' + i).css('opacity',0);
        $('#s1Card' + i).css('opacity',0);
    };
};

function deal() {
    console.log("deal");
    p1Stand = false; s1Stand = false;
    p1Aces  = 0;     dAces   = 0;    s1Aces = 0;
    p1DoubleDown = false; splitCards  = false; s1DoubleDown = false;
    p1Blackjack  = false;
    dHand   = []; p1Hand  = []; s1Hand  = [];
    dTotal  = 0;  p1Total = 0;  s1Total = 0;

    clearCards();

    $('#message').text("");
    if(cards.length <= (.25 * (decks * 52))) {
        $('#message').text("Shuffled"); 
        shuffle();
    };

    for(let i = 0; i < 2; i++){
        p1Hand[i] = cards.shift();
        dHand[i] = cards.shift();
    };
    p1Name = $('#inputP1Name').val();

    $('#dCard1').text("");
    for(let i = 0; i < 2; i++){
        $('#p1Card' + i).text(`${p1Hand[i]}`);
        $('#p1Card' + i).css('opacity',1);
        getValue(p1Hand[i]);
        p1Total += result;
        if(result  == 11) {
            p1Aces += 1;
        };
        splitValue[i] = result;
        getValue(dHand[i]);
        dTotal += result;
        if(result == 11) {
            dAces += 1;
        };
        if(i == 0) {
            $('#dCard0').text(`${dHand[i]}`);
        };
        $('#dCard' + i).css('opacity',1);
    };
    
    if(dTotal == 21 && p1Total == 21) {
        $('#dCard1').text(`${dHand[1]}`); 
        $('#message').text("Push - " + p1Name + " and Dealer have Blackjack");
    }else if(dTotal == 21) {
        $('#dCard1').text(`${dHand[1]}`); 
        $('#message').text("Dealer has Blackjack");
    }else if (p1Total == 21) {
        $('#message').text(p1Name + " has Blackjack");
        p1Blackjack = true;
        stand();
    }else{           
        dCount = 2; p1Count = 2; s1Count = 0;
        getP1Total();
    };
};

function getValue(cardIn) {
    if(cardIn.substring(0,1) == "T" ||
       cardIn.substring(0,1) == "J" ||
       cardIn.substring(0,1) == "Q" ||
       cardIn.substring(0,1) == "K"   ) {
            result = 10;
      }else if(
       cardIn.substring(0,1) == "A") {
            result = 11;
       }else{
            result = parseInt(cardIn.substring(0,1))
       };
    return(result);
};

function getP1Total() {
    if(p1Aces != 0) {
        if(p1Total == 22) {
            $('#message').text(p1Name + " has 2 or 12");
        }else{
            $('#message').text(p1Name + " has " + (p1Total - (10 * p1Aces)) + " or " + p1Total);
        };
    }else{
        $('#message').text(p1Name + " has " + p1Total);
    };
};

function getS1Total() {
    if(s1Aces != 0) {
        if(s1Total == 22) {
            $('#message').text(p1Name + "'s second hand has 2 or 12");
        }else{
            $('#message').text(p1Name + "'s second hand has " + (s1Total - 10) + " or " + s1Total);
        };
    }else{
        $('#message').text(p1Name + "'s second hand has " + s1Total);
    };
};

function p1Loss() {
    if(!splitCards && p1DoubleDown) {
        p1Score -= 2;
    }else{
        p1Score-- };
    $('#p1Score').text(`${p1Score}`);
    if(!splitCards) {
        deal();
    };
};

function p1Win() {
    if(!splitCards && p1DoubleDown) {
        p1Score += 2;
    }else if(p1Blackjack) {
        p1Score += 1.5;
    }else{
        p1Score++ };
    $('#p1Score').text(`${p1Score}`);
    if(!splitCards) {
        deal();
    };
};

function hit() {
    if(!p1Stand) {
        p1Hit();
    }else if(splitCards && p1Stand) {
        s1Hit();
    };
};

function p1Hit() {
    console.log("p1Hit");
    i = p1Count;
    p1Hand[i] = cards.shift();
    $('#p1Card' + i).text(`${p1Hand[i]}`);
    $('#p1Card' + i).css('opacity',1);
    getValue(p1Hand[i]);
    p1Total += result;
    if(result  == 11) {
        p1Aces += 1;
    };
    if(p1Total > 21 && p1Aces > 0) {
        while(p1Total > 21 && p1Aces > 0) {
            p1Total -= 10;
            p1Aces  -= 1;
        };
        $('#message').text(p1Name + " has " + p1Total);  
        p1Count++;
    }else if(p1Total > 21) {
        if(!splitCards) {
            $('#dCard1').text(`${dHand[1]}`);
        };
        $('#message').text(p1Name + " has Busted");
        p1Stand = true;
        if(splitCards) {
            playSplit();
        };
    }else if(p1DoubleDown && splitCards) {
        p1Stand = true;
        playSplit();
    }else if(p1Total == 21) {
        if(!splitCards) {
            stand();
        }else{
            playSplit();
        };
    }else{
        //if(!p1Stand) {
            p1Count++;
            getP1Total();
        //};
    };
};

function playSplit() {
    s1Hand[1] = cards.shift();
    $('#s1Card1').text(`${s1Hand[1]}`);
    $('#s1Card1').css('opacity',1);
    getValue(s1Hand[1]);
    s1Total += result;
    if(result == 11) {
        s1Aces += 1;
    };
    $('#message').text(p1Name + "'s second hand has " + s1Total);
    p1Stand = true;
    s1Count = 2;
    if(s1Total == 21) {
        s1Stand = true;
        stand();
    };
};

function dHit() {
    console.log("dHit")
    i = dCount;
    dHand[i] = cards.shift();
    $('#dCard' + i).text(`${dHand[i]}`);
    $('#dCard' + i).css('opacity',1);
    dCount++;
    getValue(dHand[i]);
    dTotal += result;
    if(result == 11) {
        dAces += 1;
    };
    if(dTotal > 21 && dAces > 0) {
        while(dTotal > 21 && dAces > 0) {
            dTotal -= 10;
            dAces  -= 1;
        };
        $('#message').text("Dealer has " + dTotal);    
    }else if(dTotal > 21) {
        $('#message').text("Dealer has Busted");
    }else{ 
        $('#message').text("Dealer has " + dTotal);
    };
};

function s1Hit() {
    console.log("s1Hit")
    i = s1Count;
    s1Hand[i] = cards.shift();
    $('#s1Card' + i).text(`${s1Hand[i]}`);
    $('#s1Card' + i).css('opacity',1);
    getValue(s1Hand[i]);
    s1Total += result;
    if(result  == 11) {
        s1Aces += 1;
    };
    if(s1Total > 21 && s1Aces > 0) {
        while(s1Total > 21 && s1Aces > 0) {
            s1Total -= 10;
            s1Aces  -= 1;
        };
        $('#message').text(p1Name + "'s second hand has " + s1Total);    
    }else if(s1Total > 21) {
        $('#message').text(p1Name + "'s second hand has Busted");
        s1Stand = true;
        stand();
    }else{ 
        $('#message').text(p1Name + "'s second hand has " + s1Total);
    };
    if(s1Total == 21) {
        s1Stand = true;
        stand();
    };
    s1Count++;
};

function stand() {
    console.log("stand");
    if(splitCards && !p1Stand) {
        s1Hand[1] = cards.shift();
        $('#s1Card1').text(`${s1Hand[1]}`);
        $('#s1Card1').css('opacity',1);
        getValue(s1Hand[1]);
        s1Total += result;
        $('#message').text(p1Name + "'s second hand has " + s1Total);
        p1Stand = true;
        s1Count = 2;
    }else if((!splitCards || s1DoubleDown) ||
             ( splitCards && p1Stand)) {
        $('#dCard1').text(`${dHand[1]}`);
        s1Stand = true;
        if(!p1Blackjack) {
            dPlay();
        };
    };
};

function dPlay() {
    if(dTotal > 21 && dAces > 0) {
        while(dTotal > 21 && dAces > 0) {
            dTotal -= 10;
            dAces  -= 1;
        };
    };
    if(dTotal > 21) {
        $('#message').text("Dealer has Busted");
    }else{
        $('#message').text("Dealer has " + dTotal);   
    };
    if(dTotal == 17 && dAces > 0) {
        dHit();
    };
    while(dTotal < 17) {
         setTimeout(dHit(), 1000);
    };
};

function doubleDown() {
    if(!p1DoubleDown || !s1DoubleDown) {
        if(splitCards) {
            if(!p1Stand) {
                p1DoubleDown = true;
                p1Hit();
                p1Stand      = true;
                //playSplit();
            }else{
                s1DoubleDown = true;
                s1Hit();
                s1Stand      = true;
                $('#dCard1').text(`${dHand[1]}`);
                dPlay();
            };
        }else{
            p1DoubleDown = true;
            p1Hit();
            p1Stand      = true;
            $('#dCard1').text(`${dHand[1]}`);
            dPlay();
        };
    };
};

function split() {
    if(splitValue[0] == splitValue[1] && !splitCards) {
        console.log("split");
        splitCards = true;
        $('#s1Card0').text(`${p1Hand[1]}`);
        $('#s1Card0').css('opacity',1);
        getValue(p1Hand[1]);
        p1Total  -= result;
        s1Total   = result;
        p1Hand[1] = cards.shift();
        $('#p1Card1').text(`${p1Hand[1]}`);
        p1Count = 2;
        s1Count = 1;
        getValue(p1Hand[1]);
        p1Total += result;
        if(result  == 11) {
            p1Aces += 1;
        };
        if(p1Total > 21 && p1Aces > 0) {
            while(p1Total > 21 && p1Aces > 0) {
                p1Total -= 10;
                p1Aces  -= 1;
            };
        };
        $('#message').text(p1Name + " has " + p1Total);
        if(p1Hand[0].substring(0,1) == "A") {
            s1Hit();
            s1Stand = true;
            $('#dCard1').text(`${dHand[1]}`);
            dPlay();
        };
        //if(p1Total == 21) {
        //    playSplit();
        //};
    };
};

$('#p1Loss').on('click', p1Loss);
$('#p1Win').on('click', p1Win);
$('#deal').on('click', deal);
$('#hit').on('click', hit);
$('#stand').on('click', stand);
$('#dDown').on('click', doubleDown);
$('#split').on('click', split);

