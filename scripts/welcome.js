const { useState } = React

const WellComeVideo = (props) => {
  const { src } = props;
  const [muted, setMuted] = useState(true);
  const [ended, setEnded] = useState(false);

  const addQueryParam = (key, value) => {
    const url = new URL(window.location.href)
    url.searchParams.set(key, value)
    window.history.pushState({}, '', url.toString())
  }

  // useEffect(() => {
  //   const videoEle = document.querySelector('#welcome-video')
  //   const video = document.createElement('video')
  //   const source = document.createElement('source')
  //   const container = document.querySelector('.container')
  //   const modal = document.querySelector('.modal-video')
  //   // Custom for immunity page
  //   const touchShield = document.querySelector('.touch-shield')
  //   // Custom for immunity page - END
  //
  //   modal.style.display = 'block'
  //   source.setAttribute('src', src)
  //   source.setAttribute('type', 'video/mp4')
  //   video.setAttribute('width', '100%');
  //   video.muted = true
  //   video.setAttribute('controls', 'true')
  //   video.appendChild(source)
  //   videoEle.appendChild(video)
  //   videoRef.current = video
  //   video.play()
  //   container.style.display = 'none'
  //   video.addEventListener('ended', () => {
  //     modal.style.display = 'none'
  //     container.style.display = 'block'
  //     video.remove()
  //     videoEle.remove()
  //     addQueryParam('welcome', 'false')
  //     // Custom for immunity page
  //     touchShield && touchShield.classList.remove('fadeIn')
  //     touchShield && setTimeout(() => {
  //       touchShield.classList.add('fadeIn')
  //     }, 1500) // 1.5s
  //     // Custom for immunity page - END
  //   })
  // }, []);

  const handleEnded = () => {
      setEnded(true);
      addQueryParam('welcome', 'false');
      // Custom for immunity page
      const touchShield = document.querySelector('.touch-shield');
      touchShield && touchShield.classList.remove('fadeIn')
      touchShield && setTimeout(() => {
          touchShield.classList.add('fadeIn')
      }, 1500) // 1.5s
  };

  if (ended) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '1'
      }}
      className='modal-video'
    >
      <div id='welcome-video'>
          <VideoJS src={src} options={{ muted, autoplay: true }} onEnded={handleEnded} />
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
          onClick={(e) => { e.preventDefault(); setMuted((prev) => !prev) }}
        >
          {!muted ? (
            <img
                onClick={(e) => e.preventDefault()}
              style={{
                width: '60px',
                height: '60px',
              }}
              src='../images/unmute-icon.png'
              alt=''
            />
          ) : (
            <img
                onClick={(e) => e.preventDefault()}
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
