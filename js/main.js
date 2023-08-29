// 메인 swiper
var swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      navigation: {
        prevEl: '.pc_swiper_prev',
        nextEl: '.pc_swiper_next',
      },
    }
  },
  on: {
    slideChangeTransitionStart: function () {
      // 슬라이드 변경 시 텍스트 애니메이션을 초기 상태로
      var pTags = document.querySelectorAll('.slide_text_wrap p');
      var h2Tags = document.querySelectorAll('.slide_text_wrap h2');
      pTags.forEach(function (pTag) {
        pTag.style.animation = 'none';
        void pTag.offsetWidth; // 리플로우를 강제로 발생시켜 초기 상태로
        pTag.style.animation = 'textFloat 1.3s cubic-bezier(.4,0,.2,1) both';
        pTag.style.animationDelay = '0.3s';
      });
      h2Tags.forEach(function (h2Tag) {
        h2Tag.style.animation = 'none';
        void h2Tag.offsetWidth; // 리플로우를 강제로 발생시켜 초기 상태로
        h2Tag.style.animation = 'textFloat 1.3s cubic-bezier(.4,0,.2,1) both';
        h2Tag.style.animationDelay = '0.5s';
      });
    },
  },
});

$('.pause').on('click', function(e) {
  e.preventDefault(); // 기본 동작 막기
  if(swiper.autoplay.running) {
    swiper.autoplay.stop();
  }else {
    swiper.autoplay.start();
  }
  $(this).toggleClass('play');
});

// 설화수 추천 swiper
var recommend_swiper = new Swiper('.recommend_card', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: 'slide',
  pagination: {
    el: ".recommend_progressbar",
    type: "progressbar",
  },
  navigation: {
    nextEl: '.swiper_button_next',
    prevEl: '.swiper_button_prev',
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: '.swiper_button_prev',
        nextEl: '.swiper_button_next',
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },
});

$('.recommend_container_inner .recommend_pause').on('click', function(e) {
  e.preventDefault(); // 기본 동작 막기
  if(recommend_swiper.autoplay.running) {
    recommend_swiper.autoplay.stop();
  }else {
    recommend_swiper.autoplay.start();
  }
  $(this).toggleClass('recommend_play');
});

// With Sulwhasoo swiper
var withSwiper = new Swiper('.withSwiper', {
  mousewheel: true,
  centeredSlides: true,
  loop: true,
  loopedSlides: 4, // 적절한 숫자로 조정 (보여지는 슬라이드 개수보다 큰 값으로 설정)
  loopPreventsSlide: false,
  loopFillGroupWithBlank: true,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 2,
      navigation: {
        prevEl: '.sns_button_prev',
        nextEl: '.sns_button_next',
      },
    },
  },
});

