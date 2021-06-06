// Challange 1: Age in Days
ageInDays = () => {
    let birthyear = prompt("What is your birthyear");
    let ageInDay = (2021-birthyear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(`You are ${ageInDay} Days Old`)

    h1.setAttribute('id', 'ageInDay');
    h1.appendChild(textAnswer);

    document.getElementById("flex-box-result").appendChild(h1);
}

resetAgeInDays = () => {
    if(document.getElementById("ageInDay"))
        document.getElementById("ageInDay").remove();
    else
        console.log("Nothing");
}

//Challenge 2: Cat Generator

generateCat = () => {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissor

function rpsGame(yourChoice) {

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    // console.log(results)
    message = finalMessage(results);
    // console.log(message)
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0){
        return {'message': 'You lost!', 'color':'red'};
    } else if(yourScore === 0.5) {
        return {'message': 'You Tied!', 'color':'yellow'};
    } else if(yourScore === 1) {
        return {'message': 'You Win!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    // console.log(imagesDatabase)

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=' " + imagesDatabase[humanImageChoice] + " ' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37, 50, 233, 1)'>";
    messageDiv.innerHTML = "<h1 style='color:" +finalMessage['color'] + "; font-size:60px;padding:30px;'>" + finalMessage['message'] + "</h1"
    botDiv.innerHTML = "<img src=' " + imagesDatabase[botImageChoice] + " ' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1)'>";
              
    setTimeout(() => {
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    }, 200);
    
}

//Challenge 4: Change the color of all Buttons

let all_buttons = document.getElementsByTagName('button');
// console.log(all_buttons)

let copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThing) {
    if(buttonThing.value === 'red'){
        buttonRed();
    } else if(buttonThing.value === 'green'){
        buttonGreen();
    } else if(buttonThing.value === 'random'){
        buttonRandom();
    } else if(buttonThing.value === 'reset'){
        buttonReset();
    }
}

function buttonRed() {
    for(let i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for(let i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for(let i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning', 'btn-secondary'];
    for(let i=0; i<all_buttons.length; i++){
        const randomChoice = Math.floor(Math.random() * 5);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomChoice]);
    }
}