import { festivals } from './festivals.js';

console.log('it works');
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

let festivalBlock = document.getElementsByClassName('big-festival-container');

function onStart() {

    let this_month = [21, 22, 23, 24];
    let popular = [1, 3, 5, 7];
    let ukraine = [1, 7, 3, 4, 5, 6];

    let value_for_this_month = '';
    let value_for_popular = '';
    let value_for_ukraine = '';
    let value_for_main = '';

    festivals.forEach((festival) => {
        let htmlBlock = `
        <div id="fest${festival.id}" class="festivals__window">
          <div class="festivals-descr">
            <div class="festivals__window-box-column">
              <div class="festivals__window-date">${festival.startDate}</div>
              <div class="festivals__window-title">${festival.title}</div>
              <div class="festivals__window-descr">${festival.description}</div>         <!--Приклад вікна-->
              <div class="festivals__window-location">${festival.location}</div>
              <div class="festivals__window-price"><b>${festival.price}</b></div>
              <a class="festivals__window-button" href="${festival.LinkToOffSite}">Купити квиток</a>
            </div>
          </div>
        </div>
        `;
        let smallHtmlBlock = `
        <div id="fest${festival.id}" class="small-festivals__window">
          <div class="card-header"></div>
          <div class="descr">${festival.title}</div>
        </div>`;
        if(this_month.includes(JSON.parse(festival.id))){
            value_for_this_month += htmlBlock;
        }
        if(popular.includes(JSON.parse(festival.id))){
            value_for_popular += htmlBlock;
        }
        if(ukraine.includes(JSON.parse(festival.id))){
            value_for_ukraine += smallHtmlBlock;
        }
        value_for_main += htmlBlock;
    });


    festivalBlock[0].innerHTML = value_for_this_month;
    festivalBlock[1].innerHTML = value_for_popular;
    festivalBlock[2].innerHTML = value_for_main;
    festivalBlock[3].innerHTML = value_for_ukraine;
}

onStart();















