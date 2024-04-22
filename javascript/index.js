//HTML ELEMENTS
const buttonEnter = document.querySelector('#button-enter');
const buttonStart = document.querySelector('#button-start');





  
//EVENEMENTS SUR LES BOUTONS
buttonEnter.addEventListener('click', function(){
    displayText();
})

buttonStart.addEventListener('click',function(){
    console.log('bouton start cliqué');
    shuffle(window.totalCards); // S'assurer que totalCards est accessible
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
    paragraphe.textContent = `Hello ${inputName}, find the 12 pairs of flowers! Watch the clock! To start playing, press the start button."`;
}

function displayCards() {
    const displaySection = document.querySelector("#display-cards");
    displaySection.innerHTML = ''; 

    // Afficher toutes les cartes du tableau totalCards
    totalCards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = '../images/cards/carte-face-cachee.jpg';  
        cardElement.alt = "carte face cachée"; 
        cardElement.className = "card"; 

       
      //gérer le retournement des cartes
        cardElement.addEventListener('click', () => {
            // Logique de retournement ou de vérification des paires
            if(cardElement.src.includes('carte-face-cachee.jpg')){
                cardElement.src = card.picture; 
            }
        });

        displaySection.appendChild(cardElement); 
    });
}




/*function displayChrono(){
   
}*/


/*function buttonStart(){}

function playWithCards(){}

function exitGame(){}

function buttonRestart(){}*/

