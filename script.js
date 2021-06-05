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