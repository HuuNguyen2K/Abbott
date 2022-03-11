const initVideo = () => {
  const search = window.location.search.substring(1)
  const params = new URLSearchParams(search)
  const firstTime = params.get('firstTime')

  if (firstTime === 'true') {
    const videoEle = document.querySelector('#video')
    const video = document.createElement('video')
    const source = document.createElement('source')
    const container = document.querySelector('.container')

    source.setAttribute(
      'src',
      'https://ak.picdn.net/shutterstock/videos/1047168874/preview/stock-footage-black-and-white-monochrome-universal-countdown-film-leader-countdown-clock-from-to-effect.mp4'
    )

    source.setAttribute('type', 'video/mp4')
    video.width = '100%'
    video.appendChild(source)
    videoEle.appendChild(video)
    video.play()
    container.style.display = 'none'
    video.addEventListener('ended', () => {
      video.remove()
      container.style.display = 'block'
      videoEle.remove()
      window.location.href = 'immunity.html'
    })
  }
}

const openModalRemindGame = () => {
  const element = document.querySelector('.touch-shield')
  element && setTimeout(() => {
    element.classList.add('fadeIn')
  }, 1500) // 1.5s
}

const openGameRoom = () => {
  const element = document.querySelector('.shield')
  const iframeGame = document.querySelector('.sec-iframe')

  element && element.addEventListener('click', (evt) => {
    // BLock action user click without shield element
    if (evt.target.localName === 'span') return
    iframeGame.classList.toggle('open-iframe')
  })
}

const handleToggleIframe = () => {
  const _menu = document.querySelector('.sec-iframe')
  const element = document.querySelectorAll('[data-control-iframe-game]')

  element.length && element.forEach(ele => {
    ele.addEventListener('click', (evt) => {
      const command = evt.target.dataset['controlIframeGame']
      // Force check class exists
      _menu.classList.toggle('open-iframe', command === 'open')
    })
  })
};

window.onload = () => {
  initVideo()
  openModalRemindGame()
  openGameRoom()
  handleToggleIframe()
}
