const openModalRemindGame = () => {
  const element = document.querySelector('.touch-shield')
  element && setTimeout(() => {
    element.classList.add('fadeIn')
  }, 1500) // 1.5s
}

trackRoomTime('1')

const openIframeGame = () => {
  const element = document.querySelector('.shield')

  element && element.addEventListener('click', async (evt) => {
    const containIframeGame = document.querySelector('.sec-iframe')
    const iframeGame = containIframeGame.querySelector('.iframe-game')

    // BLock action user click without shield element
    if (evt.target.localName === 'span') return
    const isShow = containIframeGame?.classList.contains('open-iframe')
    if(!isShow) {
      const endpoint = '/api/user_click_game'
      const user = JSON.parse(localStorage.getItem('user'))
      const payload = {
        access_token: user.access_token,
        user_id: user.id,
        game_number: 1
      }
      await fetchData(endpoint, 'POST', payload)
    }

    iframeGame.setAttribute('src', evt.target.dataset['source'])
    containIframeGame?.classList?.toggle('open-iframe')
  })
}

window.addEventListener('load', () => {
  openModalRemindGame()
  openIframeGame()
});