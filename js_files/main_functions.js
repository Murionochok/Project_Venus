import Card from './card.js';
import CardsList from "./card-list.js";
import { festivals } from './festivals.js';

let cardBlock = document.getElementById('root');

const cardsList = new CardsList({
    data: festivals,
    Component: Card
});

cardBlock.append(cardsList.element);

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    new SimpleAdaptiveSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 5000,
      swipe: true,
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider');
    // назначим обработчик при нажатии на кнопку .btn-prev
    document.querySelector('.btn-prev').onclick = function () {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .btn-next
    document.querySelector('.btn-next').onclick = function () {
      // перейдём к следующему слайду
      slider.next();
    }
  });









 