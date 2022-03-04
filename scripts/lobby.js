const compareTimeEvent = () => {
  fetch('../time.txt')
    .then((response) => response.text())
    .then((text) => {
      const eventTime = Date.parse(new Date(text))

      setInterval(() => {
        const currentTime = Date.parse(new Date())
        if (eventTime === currentTime) console.log(eventTime)
      }, 1000)
    })
}

const timerColorChange = () => {
  const TIME_WAIT = 3
  const TIME_BLINK = 0.5
  let count = 0
  const text = document.querySelectorAll('.r-a')
  setInterval(() => {
    count += 0.1
    if (count >= TIME_WAIT + TIME_BLINK) count = 0
    if (count >= TIME_WAIT) {
      text.forEach((i) => {
        if (!i.classList.contains('active')) i.classList.add('active')
      })
    } else {
      text.forEach((i) => {
        if (i.classList.contains('active')) i.classList.remove('active')
      })
    }
  }, 100)
}

const initVideo = () => {
  const videoEle = document.querySelector('#video')

  const search = window.location.search.substring(1)
  const params = new URLSearchParams(search)
  const firstTime = params.get('firstTime')

  if (firstTime === 'true') {
    const video = document.createElement('video')
    const source = document.createElement('source')
    const container = document.querySelector('.container')

    source.setAttribute(
      'src',
      'https://ak.picdn.net/shutterstock/videos/1047168874/preview/stock-footage-black-and-white-monochrome-universal-countdown-film-leader-countdown-clock-from-to-effect.mp4'
    )
    source.setAttribute('type', 'video/mp4')
    video.setAttribute('width', '100%')
    video.appendChild(source)
    videoEle.appendChild(video)
    video.play()
    container.style.display = 'none'
    video.addEventListener('ended', () => {
      container.style.display = 'block'
      video.remove()
      videoEle.remove()
      window.location.href = 'lobby.html'
    })

    return
  }

  videoEle.remove()
}

const burger = () => {
  const toggle = document.querySelector('.burger')
  toggle.addEventListener('click', () => toggle.classList.toggle('toggle'))
}

window.onload = () => {
  initVideo()
  timerColorChange()
  burger()
  compareTimeEvent()
}
