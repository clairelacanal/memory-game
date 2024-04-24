//HTML ELEMENTS
const buttonEnter = document.querySelector('#button-enter');
const buttonStart = document.querySelector('#button-start');

  
//EVENEMENTS SUR LES BOUTONS
buttonEnter.addEventListener('click', function(e){
    e.preventDefault();  
    displayText();
    
})

buttonStart.addEventListener('click',function(){
    shuffle(totalCards);
    shuffle(totalCardsEnfant);
    displayCards();
    buttonStart.style.display = "none";
    displayChrono();
    displayScore();
})


//FONCTIONS 

function displayText(){
    const age = parseInt(document.querySelector('#age').value, 10);
    let pairs = "";
    if(age <= 12){
        pairs = "6";
    }else if( age > 12){
        pairs = "12";
    }
    const inputName = document.querySelector('#name').value;
    const paragraphe = document.querySelector('#display-text');
    paragraphe.textContent = `Hello ${inputName}, find the ${pairs} pairs of flowers! Watch the clock! To start playing, press the start button.`;
    paragraphe.className = "paragraphe-presentation"
}

function displayCards() {
    const age = parseInt(document.querySelector('#age').value, 10);
    const displaySection = document.querySelector("#display-cards");
    displaySection.innerHTML = ''; 

    const cardsToDisplay = age <= 12 ? totalCardsEnfant : totalCards;

    // Afficher toutes les cartes du tableau 
        cardsToDisplay.forEach(card => {
            const cardElement = document.createElement('img');
            cardElement.src = '../images/cards/carte-face-cachee.jpg';  
            cardElement.alt = "carte face cachée"; 
            cardElement.className = "card"; 
           
          //gérer le retournement des cartes
            cardElement.addEventListener('click', () => {
                flipCard(card, cardElement);  
            });
    
            displaySection.appendChild(cardElement); 
        });
    }

function checkAllCardsFlipped() {
    const cards = document.querySelectorAll('.card');
    const allFlipped = Array.from(cards).every(card => card.classList.contains('flipped'));
    
    if (allFlipped) {
        return true;
        console.log('Toutes les cartes ont été retournées!');
        // CODE A AJOUTER POUR : Stopper le jeu, afficher le score et le WIN

    }else{
        return false;
    }
}
    
function shuffle(array){
    for(let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
}

//Varriables globales flipCard()
let firstCard = null; //stocke la première carte cliquée
let secondCard = null; //stocke la seconde carte cliquée
let isChecking = false //Pour empêcher le retournement de plus de DEUX cartes à la fois

function flipCard(card,cardElement){

    if(isChecking) return; // Ne fait rien si déjà en train de vérifier deux cartes
    if(cardElement.classList.contains('flipped')) return; // empêche le recliquage sur la même carte;
    cardElement.classList.add('flipped'); //ajoute la classe pour indiquer que la carte est retournée;
    checkAllCardsFlipped(); // vérifie que toutes les cartes ont été retournées
    cardElement.src = card.picture; //change l'image pour montrer la face de la carte;

    if(!firstCard){
        //Si aucune carte n'est actuellement stockée, stocke la première carte
        firstCard = {card, cardElement};
    }else{
        //rend une deuxième carte si une première est déjà stockée
        secondCard = {card,cardElement};
        isChecking = true;

        //Vérifie si les deux cartes correspondent
        if(firstCard.card.name === secondCard.card.name){
            //Correspondance trouvée
            firstCard = null;
            secondCard = null;
            isChecking = false;
        } else {
            //Pas de correspondance, retourner les cartes aprés un court délais
            setTimeout(() => {
                firstCard.cardElement.classList.remove('flipped');
                secondCard.cardElement.classList.remove('flipped');
                firstCard.cardElement.src = '../images/cards/carte-face-cachee.jpg';
                secondCard.cardElement.src = '../images/cards/carte-face-cachee.jpg';

                firstCard = null;
                secondCard = null;
                isChecking = false;
            }, 1000);
        }
    }
}

//Variables globales
const departMinutes = 2;
let temps = departMinutes * 60;
const chrono = document.querySelector("#time");

function displayChrono(){ 
const time = setInterval(() => {
    let minutes = parseInt(temps/60,10);
    let secondes = parseInt(temps%60,10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    chrono.textContent = `${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps -1;
    if(temps <= 0 || checkAllCardsFlipped()){
        clearInterval(time);
        openModal();
        console.log("toutes les cartes sont retournées, le chrono s'arrête");
    }
}, 1000)
};


function displayScore(){
    const score = document.querySelector("#display-score");
    score.textContent = 
    `Tu as gagné 3 fois
    Tu as perdu 5 fois`;
    score.className = "score-presentation";
}

function openModal() {
    // Le fond noir
    const modalBackground = document.createElement('div');
    modalBackground.setAttribute('id', 'modal-background');
    modalBackground.style.position = 'fixed';
    modalBackground.style.top = '0';
    modalBackground.style.left = '0';
    modalBackground.style.width = '100%';
    modalBackground.style.height = '100%';
    modalBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modalBackground.style.display = 'flex';
    modalBackground.style.justifyContent = 'center';
    modalBackground.style.alignItems = 'center';

    // Le contenu du popup
    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-content');
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '600px';

    // Message dans le popup
    const modalText = document.createElement('p');
    modalText.className = "modal-text";
    modalText.textContent = "Awesome! You've WON! You can play again and beat your record or quit the game.";

    // Bouton pour fermer le popup
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Exit';
    closeButton.onclick = function() {
        exitGame(modalBackground);
    };

    // Assemble le contenu du popup
    modalContent.appendChild(modalText);
    modalContent.appendChild(closeButton);

    // Ajoute le contenu au fond noir
    modalBackground.appendChild(modalContent);

    // Ajoute le fond noir au document
    document.body.appendChild(modalBackground);
}

function exitGame(modalElement) {
    modalElement.addEventListener('click', function() {
        document.body.removeChild(modalElement);
        window.location.href = '/';  // Redirige vers la page d'accueil
    });
}






function buttonRestart(){}

