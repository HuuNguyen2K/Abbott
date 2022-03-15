const openModalRemindGame = () => {
  const element = document.querySelector('.touch-shield')
  element && setTimeout(() => {
    element.classList.add('fadeIn')
  }, 1500) // 1.5s
}

const openIframeGame = () => {
  const element = document.querySelector('.shield')
  const iframeGame = document.querySelector('.sec-iframe')

  element && element.addEventListener('click', async (evt) => {
    // BLock action user click without shield element
    if (evt.target.localName === 'span') return
    const isShow = iframeGame?.classList.contains('open-iframe')
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
    iframeGame?.classList?.toggle('open-iframe')
  })
}

window.addEventListener('load', () => {
  openModalRemindGame()
  openIframeGame()
});
