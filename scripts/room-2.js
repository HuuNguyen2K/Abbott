const btnRoom2Left = document.querySelector('.room-2__btn-left')
const btnRoom2Right = document.querySelector('.room-2__btn-right')
const elEventRoom2PopupLeft = document.getElementById('event-room-2-left')
const elEventRoom2PopupRight = document.getElementById('event-room-2-right')
const eventCloseSlide = document.getElementById('event-close-slide')
console.log(eventCloseSlide)

const showPopup = (event) => {
    // event.preventDefault();
    let showEventPopup = event.target.getAttribute('data-toggle');
    let elEventLibrePopup = document.getElementById(showEventPopup)
    elEventLibrePopup.classList.add('open', 'overlay')
}

const hidePopup = (event) => {
    event.target.classList.remove('open', 'overlay')
}

btnRoom2Left.addEventListener('click', showPopup)

// btnRoom2Right.addEventListener('click', showPopup)

elEventRoom2PopupLeft.addEventListener('click', hidePopup)

// elEventRoom2PopupRight.addEventListener('click', hidePopup)

eventCloseSlide.addEventListener('click', function () {
    elEventRoom2PopupLeft.classList.remove('open', 'overlay')
})

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

const openModalRemindGame = () => {
    const element = document.querySelector('.touch-shield')
    element && setTimeout(() => {
        element.classList.add('fadeIn')
    }, 1500) // 1.5s
}

const openIframeGame = () => {
    const iframeGame = document.querySelector('.sec-iframe')

    btnRoom2Right && btnRoom2Right.addEventListener('click', (evt) => {
        // BLock action user click without shield element
        if (evt.target.localName === 'span') return
        const isShow = iframeGame?.classList.contains('open-iframe')
        if(!isShow) {
        const endpoint = '/api/user_click_game'
        const user = JSON.parse(localStorage.getItem('user'))
        const payload = {
            access_token: user.access_token,
            user_id: user.id,
            game_number: 2
        }
        await fetchData(endpoint, 'POST', payload)
        }
        iframeGame?.classList?.toggle('open-iframe')
    })
}

window.addEventListener('load', () => {
    openModalRemindGame()
    openIframeGame()
});
