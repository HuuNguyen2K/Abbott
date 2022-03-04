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
      window.location.href = 'welcome.html'
    })
    return
  }
  
  videoEle.remove()
}

window.onload = () => {
  initVideo()
}
