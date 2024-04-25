const cards = [
    {
        name : "card1",
        picture : "/images/cards/flower-card1.jpg", 
    },
    {
        name : "card2",
        picture : "/images/cards/flower-card2.jpg",
    },
    {
        name:"card3",
        picture:"/images/cards/flower-card3.jpg",
    },
    {
        name: "card4",
        picture: "/images/cards/flower-card4.jpg",
    },
    {
        name: "card5",
        picture: "/images/cards/flower-card5.jpg",
    },
    {
        name: "card6",
        picture: "/images/cards/flower-card6.jpg",
    },
    {
        name: "card7",
        picture: "/images/cards/flower-card7.jpg",
    },
    {
        name: "card8",
        picture: "/images/cards/flower-card8.jpg",
    },
    {
        name: "card9",
        picture: "/images/cards/flower-card9.jpg",
    },
    {
        name: "card10",
        picture: "/images/cards/flower-card10.jpg",
    },
    {
        name: "card11",
        picture: "/images/cards/flower-card11.jpg",
    },
    {
        name: "card12",
        picture: "/images/cards/flower-card12.jpg",
    },
    
    
];

const totalCards = [...cards,...cards.map(card =>({...card}))];


const cardsEnfant = cards.slice(0,6);
const totalCardsEnfant = [...cardsEnfant,...cardsEnfant.map(card => ({...card}))];




window.totalCards = totalCards;
window.totalCardsEnfant = totalCardsEnfant;
