//HTML ELEMENTS
const buttonEnter = document.querySelector('#button-enter');

  
//EVENEMENTS SUR LES BOUTONS
buttonEnter.addEventListener('click', function(){
    console.log('bouton entré cliqué !');
    getName();
    getAge();
})

//FONCTIONS
function getName(){
const inputName = document.querySelector('#name').value;
alert(inputName);
}


function getAge(){
const inputAge = document.querySelector('#age').value;
alert(inputAge);
}

//GENERE DU TEXTE DYNAMIQUEMENT
const paragraphe = document.createElement('p');
paragraphe.textContent = `Hello`;
document.body.appendChild(paragraphe);



/*function buttonStart(){}

function playWithCards(){}

function exitGame(){}

function buttonRestart(){}*/

