const btnRoom2Left = document.querySelector('.room-2__btn-left')
const btnRoom2Right = document.querySelector('.room-2__btn-right')
const elEventRoom2PopupLeft = document.getElementById('event-room-2-left')
const elEventRoom2PopupRight = document.getElementById('event-room-2-right')

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

btnRoom2Left.addEventListener('click', showPopup)

// btnRoom2Right.addEventListener('click', showPopup)

elEventRoom2PopupLeft.addEventListener('click', hidePopup)

// elEventRoom2PopupRight.addEventListener('click', hidePopup)
