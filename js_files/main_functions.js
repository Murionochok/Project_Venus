import Card from './card.js';
import CardsList from "./card-list.js";
import { festivals } from './festivals.js';

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    const slider = new SimpleAdaptiveSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 5000,
        swipe: true
    });
    // назначим обработчик при нажатии на кнопку .slider__control_prev
    document.querySelector('.slider__control_prev').onclick = function () {
        // перейдём к предыдущему слайду
        slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .slider__control_next
    document.querySelector('.slider__control_next').onclick = function () {
        // перейдём к следующему слайду
        slider.next();
    }
});

let cardBlock = document.getElementById('root');

const cardsList = new CardsList({
    data: festivals,
    Component: Card
});

cardBlock.append(cardsList.element);














