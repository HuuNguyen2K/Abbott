const initVideo = () => {
  const search = window.location.search.substring(1)
  const params = new URLSearchParams(search)
  const welcome = params.get('welcome')

  if (welcome === 'true') {
    const videoEle = document.querySelector('#video')
    const root = document.querySelector('#root')
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
    root.classList.add('none')
    video.addEventListener('ended', () => {
      videoEle.classList.remove('active')
      video.remove()
      container.style.display = 'block'
      videoEle.remove()
      window.location.href = 'login.html'
      root.classList.remove('none')
    })
  }
}

const MODE = {
  SIGN_IN: 'SIGN_IN',
  AVT: 'AVT',
}

function Login() {
  const [isTypePassword, setIsTypePassword] = React.useState(true)
  const [mode, setMode] = React.useState(MODE.SIGN_IN)
  const [user, setUser] = React.useState({})
  const labelRef = React.useRef(null)
  const [selectedFile, setSelectedFile] = React.useState(null)
  const [preview, setPreview] = React.useState()

  const login = () => {
    const form = document.querySelector('#login-form')
    const id = document.querySelector('#id')
    const password = document.querySelector('#password')

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const idValue = id.value
      const passwordValue = password.value

      if (!idValue || !passwordValue) return

      const url = `sign_in?uid=${idValue}&password=${passwordValue}`
      await fetchData(url, 'POST').then((rs) => {
        if (rs.success === true) {
          const { data } = rs
          setUser(data)
          localStorage.setItem('user', JSON.stringify(data))
          setMode(MODE.AVT)
        } else {
          const errLoginContainer = document.querySelector(
            '.err-login-container'
          )
          const closeBtn = document.querySelector('.time')
          errLoginContainer && errLoginContainer.classList.add('active')
          closeBtn &&
            closeBtn.addEventListener('click', () => {
              errLoginContainer.classList.remove('active')
            })
        }
      })
    })
  }

  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }

  React.useEffect(() => {
    initVideo()
    login()
  }, [])

  return (
    <div
      style={{ backgroundImage: `url("../images/login.png")` }}
      className='container'
    >
      <div className='content'>
        {mode === MODE.SIGN_IN && (
          <form id='login-form'>
            <div className='group'>
              <span>Username</span>
              <input
                placeholder='Nhập số điện thoại đã đăng ký'
                className='in'
                id='id'
                name='ID'
                type='text'
              />
            </div>
            <div className='group'>
              <span>Password</span>
              <input
                placeholder='Nhập họ và tên đã đăng ký (viết liền, không dấu)'
                className='in'
                id='password'
                name='Password'
                type={isTypePassword ? 'password' : 'text'}
              />
            </div>
            <div className='show-password'>
              <input
                className='checkbox'
                onChange={() => setIsTypePassword((prev) => !prev)}
                checked={!isTypePassword}
                type='checkbox'
              />
              <span>Hiện mật khẩu</span>
            </div>
            <div className='action'>
              <button>
                <a href='sign-in.html'>ĐĂNG KÝ</a>
              </button>
              <button type='submit'>ĐĂNG NHẬP</button>
            </div>
          </form>
        )}
        {mode === MODE.AVT && (
          <div className='avt'>
            {preview ? (
              <img src={preview} alt='' />
            ) : (
              <img src='../images/avt-up.png' alt='' />
            )}
            <input
              onChange={onSelect}
              className='d-none'
              id='avt-up'
              type='file'
            />
            <div className='action'>
              <label className='d-none' ref={labelRef} htmlFor='avt-up'></label>
              <button onClick={() => labelRef.current.click()}>
                CHỌN ẢNH TỪ THIẾT BỊ
              </button>
              <button>
                <a href='#'>BỎ QUA</a>
              </button>
            </div>
          </div>
        )}

        <div className='err-login-container'>
          <div className='time'>X</div>
          <img className='err-login' src='../images/err-login.png' alt='' />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Login />, document.getElementById('root'))
