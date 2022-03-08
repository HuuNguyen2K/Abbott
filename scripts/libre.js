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
    video.setAttribute('width', '100%')
    video.appendChild(source)
    videoEle.appendChild(video)
    videoEle.classList.add('active')
    video.play()
    container.style.display = 'none'
    video.addEventListener('ended', () => {
      videoEle.classList.remove('active')
      video.remove()
      container.style.display = 'block'
      videoEle.remove()
      window.location.href = 'libre.html'
    })
  }
}

function Libre() {
  React.useEffect(() => {
    initVideo()
  }, [])

  return (
    <div
      style={{ backgroundImage: `url("../images/room-3.jpg")` }}
      className='container'
    >
      <div className='touch touch-1'></div>
      <div className='touch touch-2'></div>
      <div className='touch touch-3'></div>
    </div>
  )
}

ReactDOM.render(<Libre />, document.getElementById('root'))
