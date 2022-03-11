const { useRef, useEffect, useState } = React

const WellComeVideo = (props) => {
  const { src } = props

  const videoRef = useRef()
  const [mute, setMute] = useState(true)

  const addQueryParam = (key, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
  };
  

  useEffect(() => {
    const videoEle = document.querySelector('#welcome-video')
    const video = document.createElement('video')
    const source = document.createElement('source')
    const container = document.querySelector('.container')

    source.setAttribute('src', src)
    source.setAttribute('type', 'video/mp4')
    video.setAttribute('width', '100%')
    video.muted = true
    video.setAttribute('controls', 'true')
    video.appendChild(source)
    videoEle.appendChild(video)
    videoRef.current = video
    video.play()
    container.style.display = 'none'
    video.addEventListener('ended', () => {
      container.style.display = 'block'
      video.remove()
      videoEle.remove()
      addQueryParam('welcome', 'false')
    })
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
    >
      <div id='welcome-video'>
        <button
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            cursor: 'pointer',
            outline: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            zIndex: '2',
          }}
          onClick={() => {
            videoRef.current.muted = videoRef.current.muted ? false : true
            setMute((prev) => !prev)
          }}
        >
          {mute ? (
            <img
              style={{
                width: '60px',
                height: '60px',
              }}
              src='../images/unmute-icon.png'
              alt=''
            />
          ) : (
            <img
              style={{
                width: '60px',
                height: '60px',
              }}
              src='../images/mute-icon.png'
              alt=''
            />
          )}
        </button>
      </div>
    </div>
  )
}
