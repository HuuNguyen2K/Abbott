const modalCountDown=document.getElementById('event-count-down')
const btnRoom4CountDown =document.getElementById('btn-count-down')
const btnCloseCountDown = document.getElementById('event-close-slide-left')

const showPopup = () => {
  modalCountDown.classList.add('open', 'overlay')
}

const hidePopup = () => {
  modalCountDown.classList.remove('open', 'overlay')
}


btnRoom4CountDown.addEventListener('click', showPopup)


btnCloseCountDown.addEventListener('click', hidePopup)




