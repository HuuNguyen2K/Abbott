const btnRoom3Left = document.querySelector('.room-3__btn-left')
const btnRoom3Center = document.querySelector('.room-3__btn-center')
const btnRoom3Right = document.querySelector('.room-3__btn-right')

const elRoom3PopupLeft = document.getElementById('event-libre-left')
const elRoom3PopupCenter = document.getElementById('event-libre-center')
const elRoom3PopupRight = document.getElementById('event-libre-right')

const showPopup = (event) => {
  event.preventDefault();
  let showEventPopup = event.target.getAttribute('data-toggle');
  let elRoom3Popup = document.getElementById(showEventPopup)
  elRoom3Popup.classList.add('open', 'overlay')

}

const hidePopup = (event) => {
  // event.preventDefault();
  event.target.classList.remove('open', 'overlay')
}


btnRoom3Left.addEventListener('click', showPopup)

btnRoom3Center.addEventListener('click', showPopup)

btnRoom3Right.addEventListener('click', showPopup)

elRoom3PopupLeft.addEventListener('click', hidePopup)

elRoom3PopupCenter.addEventListener('click', hidePopup)

elRoom3PopupRight.addEventListener('click', hidePopup)

// Slider
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  spaceBetween: 120,
  // autoplay: {
  //     delay: 2500
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})
