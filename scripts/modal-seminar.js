const modalSeminar = document.getElementById('event-seminar')
const btnSeminar = document.getElementById('btn-seminar')
const seminarOne = document.getElementById('seminar-one')
const seminarTwo = document.getElementById('seminar-two')
const btnSeminarLeft = document.getElementById('seminar-click-left')
const btnSeminarRight = document.getElementById('seminar-click-right')
const btnCloseSeminarOne = document.getElementById('close-modal-seminar-one')
const btnCloseSeminarTwo = document.getElementById('close-modal-seminar-two')

const showPopup = () => {
  modalSeminar.classList.add('open', 'overlay')
}

const hidePopup = () => {
  modalSeminar.classList.remove('open', 'overlay')
}

const showSeminarOne = () => {
  if(seminarOne)  {
    seminarOne.classList.remove('hide')
    seminarTwo.classList.add('hide')
  }
}

const showSeminarTwo = () => {
  if(seminarTwo){
    seminarTwo.classList.remove('hide')
    seminarOne.classList.add('hide')
  }
}


btnSeminar.addEventListener('click', showPopup)

btnSeminarLeft.addEventListener('click', showSeminarOne)

btnSeminarRight.addEventListener('click', showSeminarTwo)

btnCloseSeminarOne.addEventListener('click', hidePopup)

btnCloseSeminarTwo.addEventListener('click', hidePopup)




