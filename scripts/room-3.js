const btnRoom3Left = document.querySelector('.room-3__btn-left')
const btnRoom3Center = document.querySelector('.room-3__btn-center')
const btnRoom3Right = document.querySelector('.room-3__btn-right')

const elRoom3PopupLeft = document.getElementById('event-libre-left')
const elRoom3PopupCenter = document.getElementById('event-libre-center')
const elRoom3PopupRight = document.getElementById('event-libre-right')

const eventCloseSlideLeft= document.getElementById('event-close-slide-left')
const eventCloseSlideCenter = document.getElementById('event-close-slide-center')
const eventCloseSlideRight = document.getElementById('event-close-slide-right')

let timeOpenMiddle = null
let timeOpenRight = null

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


btnRoom3Left.addEventListener('click', async (e) => {
  // api thống kê
  showPopup(e)
  const endPoint = '/api/topic_3_libre_click'
  const user = JSON.parse(localStorage.getItem('user'))
  const payload = {
      access_token: user.access_token,
      user_id: user.id,
      direction: 'left'
  }

  try {
      await fetchData(endPoint, 'POST', payload)
  } catch (error) {
  }
})

btnRoom3Center.addEventListener('click', async (e) => {
  showPopup(e)
  const endPoint = '/api/topic_3_libre_click'
  const user = JSON.parse(localStorage.getItem('user'))
  const payload = {
      access_token: user.access_token,
      user_id: user.id,
      direction: 'middle'
  }

  try {
      await fetchData(endPoint, 'POST', payload)
  } catch (error) {
  }

  // lưu thời gian ấn 
  const now = moment()
  timeOpenMiddle = now
})

btnRoom3Right.addEventListener('click', async (e) => {
  showPopup(e)
  const endPoint = '/api/topic_3_libre_click'
  const user = JSON.parse(localStorage.getItem('user'))
  const payload = {
      access_token: user.access_token,
      user_id: user.id,
      direction: 'right'
  }

  try {
      await fetchData(endPoint, 'POST', payload)
  } catch (error) {
  }

  // lưu thời gian ấn 
  const now = moment()
  timeOpenRight = now
})

elRoom3PopupLeft.addEventListener('click', hidePopup)

elRoom3PopupCenter.addEventListener('click', async (e) => {
  if(!timeOpenMiddle) return
  const timeScreen = moment().subtract(timeOpenMiddle).seconds()
  const target = e.target 
  if(target.classList.contains('swiper-btn-close') || target.classList.contains('room-3__popup-center') ) {
    const endPoint = '/api/topic_3_libre_duration'
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
        access_token: user.access_token,
        user_id: user.id,
        direction: 'middle',
        duration: timeScreen / 60,
    }

    try {
        await fetchData(endPoint, 'POST', payload)
    } catch (error) {
    }
  }
  timeOpenMiddle = null
  hidePopup(e)
})

elRoom3PopupRight.addEventListener('click', async (e) => {
  if(!timeOpenRight) return
  const timeScreen = moment().subtract(timeOpenRight).seconds()
  const target = e.target 
  if(target.classList.contains('swiper-btn-close') || target.classList.contains('room-3__popup-right') ) {
    const endPoint = '/api/topic_3_libre_duration'
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
        access_token: user.access_token,
        user_id: user.id,
        direction: 'right',
        duration: timeScreen / 60,
    }

    try {
        await fetchData(endPoint, 'POST', payload)
    } catch (error) {
    }
  }
  timeOpenRight = null
  hidePopup(e)
})

eventCloseSlideLeft.addEventListener('click', function () {
  if(elRoom3PopupLeft) elRoom3PopupLeft.classList.remove('open', 'overlay')
})

eventCloseSlideCenter.addEventListener('click', function () {
  if(elRoom3PopupCenter) elRoom3PopupCenter.classList.remove('open', 'overlay')
})

eventCloseSlideRight.addEventListener('click', function () {
  if(elRoom3PopupRight) elRoom3PopupRight.classList.remove('open', 'overlay')
})

// Slider
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  spaceBetween: 120,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 80,
    },
  },
})
