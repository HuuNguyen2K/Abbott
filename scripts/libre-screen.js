const btnLibreLeft = document.querySelector('.page-libre__btn-left')
const btnLibreCenter = document.querySelector('.page-libre__btn-center')
const btnLibreRight = document.querySelector('.page-libre__btn-right')
const elEventLibrePopupLeft = document.getElementById('event-libre-left')
const elEventLibrePopupCenter = document.getElementById('event-libre-center')
const elEventLibrePopupRight = document.getElementById('event-libre-right')

const showPopup = (event) => {
    event.preventDefault();
    let showEventPopup = event.target.getAttribute('data-toggle');
    let elEventLibrePopup = document.getElementById(showEventPopup)
    elEventLibrePopup.classList.add('open', 'overlay')
}

const hidePopup = (event) => {
    event.preventDefault();
    event.target.classList.remove('open', 'overlay')
}

btnLibreLeft.addEventListener('click', showPopup)

btnLibreCenter.addEventListener('click', showPopup)

btnLibreRight.addEventListener('click', showPopup)

elEventLibrePopupLeft.addEventListener('click', hidePopup)

elEventLibrePopupCenter.addEventListener('click', hidePopup)

elEventLibrePopupRight.addEventListener('click', hidePopup)

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

});
