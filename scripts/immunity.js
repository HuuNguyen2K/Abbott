const openModalRemindGame = () => {
  const element = document.querySelector('.touch-shield')
  element && setTimeout(() => {
    element.classList.add('fadeIn')
  }, 1500) // 1.5s
}

const openIframeGame = () => {
  const element = document.querySelector('.shield')
  const iframeGame = document.querySelector('.sec-iframe')

  element && element.addEventListener('click', (evt) => {
    // BLock action user click without shield element
    if (evt.target.localName === 'span') return
    iframeGame?.classList?.toggle('open-iframe')
  })
}

window.addEventListener('load', () => {
  openModalRemindGame()
  openIframeGame()
});
