

const btnLibreLeft = document.querySelector('.page-libre__btn-left')
const btnLibreCenter =  document.querySelector('.page-libre__btn-center')
const btnLibreRight =  document.querySelector('.page-libre__btn-right')
const elEventLibrePopupLeft = document.getElementById('event-libre-left')
const elEventLibrePopupCenter = document.getElementById('event-libre-center')
const elEventLibrePopupRight = document.getElementById('event-libre-right')
console.log(elEventLibrePopupLeft)
console.log(btnLibreLeft)

showPopup = (event) => {
    event.preventDefault();
    let showEventPopup = event.target.getAttribute('data-toggle');
    const elEventLibrePopup =document.getElementById(showEventPopup)
    console.log(elEventLibrePopup)
    // elEventLibrePopup.classList.toggle('open',)
    elEventLibrePopup.classList.add('open','overlay')
}
hidePopup = (event) => {
    event.preventDefault();
    console.log(event)
    // let showEventPopup = event.target.getAttribute('data-toggle');
    // const elEventLibrePopup =document.getElementById(showEventPopup)
    // console.log(elEventLibrePopup)
    // elEventLibrePopup.classList.toggle('open',)
    event.target.classList.remove('open', 'overlay')
}

btnLibreLeft.addEventListener('click', showPopup)

btnLibreCenter.addEventListener('click',  showPopup)

btnLibreRight.addEventListener('click',  showPopup)

elEventLibrePopupLeft.addEventListener('click', hidePopup)

elEventLibrePopupCenter.addEventListener('click',  hidePopup)

elEventLibrePopupRight.addEventListener('click',  hidePopup)

const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    autoplay: {
        delay: 2500
    },

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
