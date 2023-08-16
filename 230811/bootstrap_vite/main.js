import "./scss/style.scss"
import "bootstrap-icons/font/bootstrap-icons.scss"

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// 모듈 임포트
import { Navigation, Pagination } from 'swiper/modules';
// 스타일 추가
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  modules: [Navigation, Pagination],


});