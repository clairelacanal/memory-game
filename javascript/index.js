//HTML ELEMENTS
const buttonEnter = document.querySelector('#button-enter');
const buttonStart = document.querySelector('#button-start');





  
//EVENEMENTS SUR LES BOUTONS
buttonEnter.addEventListener('click', function(){
    displayText();
})

buttonStart.addEventListener('click',function(){
    console.log('bouton start cliqué');
    displayCards();
})

//FONCTIONS
/*function getName(){
alert(inputName);
}*/


/*function getAge(){
const inputAge = document.querySelector('#age').value;
alert(inputAge);
}*/

function displayText(){
const inputName = document.querySelector('#name').value;
const paragraphe = document.querySelector('#display-text');
paragraphe.textContent = `Hello ${inputName}, find the 36 pairs of flowers! Watch the clock! To start playing, press the start button."`;
}

function displayCards(){
const randomIndex = Math.floor(Math.random() * cards.length);
const splicedArr = cards.splice(randomIndex, 1);
const randomCard = splicedArr[0];
const cardsVisible = document.createElement('img');
cardsVisible.src = randomCard.picture;
cardsVisible.alt = randomCard.name;
const displaySection = document.querySelector("#display-cards");
displaySection.appendChild(cardsVisible);
}

/*function displayChrono(){
   
}*/


/*function buttonStart(){}

function playWithCards(){}

function exitGame(){}

function buttonRestart(){}*/

