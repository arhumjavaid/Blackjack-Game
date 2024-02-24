

let sum = 0
let card1 = []
let hasBlackjack = false;
let isAlive = false;
let message = "";
let cards = document.getElementById("cards");


console.log(message);

function startGame(){
    isAlive = true
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber(); 
    card1 = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){
    
    if(sum <= 20){
        document.getElementById("message").innerHTML = "Do u want to draw a new card?";
    }
    else if(sum == 21){
        document.getElementById("message").innerHTML = "You've got a Blackjack";
        hasBlackjack = true;
    }
    else{
        document.getElementById("message").innerHTML = "You're out of the Game";
        isAlive = false;
    }
    
    cards.innerHTML = "Cards: "   
    for(let i = 0; i < card1.length; i++){
        cards.innerHTML += card1[i] + " "
    }

    document.getElementById("sum").innerHTML = "Sum:" + " " + sum 

}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomNumber();
        sum += card
        card1.push(card)
        console.log(card1);    
        renderGame()
    }
}

function getRandomNumber(){
    let random = Math.floor(Math.random()*13)+1
    if (random > 10){
        return 10
    }
    else if (random === 1){
        return 11
    }
    else {
        return random
    }
    // console.log(random);
    
}

