import Card from './card.js';
import CardsList from "./card-list.js";
import { festivals } from './festivals.js';

let cardBlock = document.getElementById('root');

const cardsList = new CardsList({
    data: festivals,
    Component: Card
});

cardBlock.append(cardsList.element);


