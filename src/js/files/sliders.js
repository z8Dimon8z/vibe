/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { Navigation } from 'swiper';
import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  EffectFlip,
  Autoplay
} from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.coworking__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.coworking__slider', { // Указываем скласс нужного слайдера
        // Подключаем модули слайдера
        // для конкретного случая
        modules: [Navigation,
          Pagination, EffectFlip, Autoplay
        ],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,

        //touchRatio: 0,
        //simulateTouch: false,
        //loop: true,
        //preloadImages: false,
        //lazy: true,

        
        // Эффекты
        effect: 'fade',
        autoplay: {
        	delay: 3000,
        	disableOnInteraction: false,
        },
        

        // Пагинация

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          type: 'fraction',
          formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
          },
          formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
          },
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
              '/' +
              '<span class="' + totalClass + '"></span>';
          }
        },
      


      // Скроллбар
      /*
      scrollbar: {
      	el: '.swiper-scrollbar',
      	draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.s-button-prev',
        nextEl: '.s-button-next',
      },

      // Брейкпоинты
      /*
      breakpoints: {
      	320: {
      		slidesPerView: 1,
      		spaceBetween: 0,
      		autoHeight: true,
      	},
      	768: {
      		slidesPerView: 2,
      		spaceBetween: 20,
      	},
      	992: {
      		slidesPerView: 3,
      		spaceBetween: 20,
      	},
      	1268: {
      		slidesPerView: 4,
      		spaceBetween: 30,
      	},
      },
      */
      // События
      on: {

      }
    });
}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});