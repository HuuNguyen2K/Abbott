const { useRef, useEffect } = React;

const WellComeVideo = (props) => {
  const { src } = props;

  const videoRef = useRef();

  useEffect(() => {
    const videoEle = document.querySelector('#welcome-video')
      const video = document.createElement('video')
      const source = document.createElement('source')
      const container = document.querySelector('.container')

      source.setAttribute('src', src)
      source.setAttribute('type', 'video/mp4')
      video.setAttribute('width', '100%')
      video.muted = true;
      video.setAttribute('controls', 'true')
      video.appendChild(source)
      videoEle.appendChild(video)
      videoRef.current = video;
      video.play()
      container.style.display = 'none'
      video.addEventListener('ended', () => {
        container.style.display = 'block'
        video.remove()
        videoEle.remove()
      });
  }, []);

  return (
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      }}>
        <div id="welcome-video" />
      </div>
  );
}
