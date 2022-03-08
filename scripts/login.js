const login = () => {
  const URL_API_PREFIX = 'http://hoithaodaithaoduong.com/api/'
  const form = document.querySelector('#login-form')
  const id = document.querySelector('#id')
  const password = document.querySelector('#password')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const idValue = id.value
    const passwordValue = password.value

    if (!idValue || !passwordValue) return

    const url =
      URL_API_PREFIX + `sign_in?uid=${idValue}&password=${passwordValue}`

    await fetchData(url, 'POST').then((rs) => {
      if (rs.success === true) {
        // login success and do something
        const { data } = rs
        localStorage.setItem('user', JSON.stringify(data))
        window.location.href = 'lobby.html?firstTime=true'
      } else {
        document.querySelector('.login-fail').classList.remove('d-none')
      }
    })
  })
}

const initVideo = () => {
  const search = window.location.search.substring(1)
  const params = new URLSearchParams(search)
  const firstTime = params.get('firstTime')

  if (firstTime === 'true') {
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

function Login() {
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
        <form id='login-form'>
          <div className='group'>
            <span>ID</span>
            <input id='id' name='ID' type='text' />
          </div>
          <div className='group'>
            <span>Password</span>
            <input id='password' name='Password' type='text' />
          </div>
          <div className='group'>
            <button type='submit'>Đăng nhập</button>
            <button>
              <a href='sign-in.html'>Đăng ký</a>
            </button>
          </div>
        </form>
        <div className='login-fail d-none'>
          <p>Thông tin đăng nhập chưa chính xác</p>
          <p>Vui lòng nhập đúng cú pháp:</p>
          <p>ID (số điện thoại đăng ký)</p>
          <p>Password (Họ và tên viết liền không dấu)</p>
          <p>Nếu chưa có tài khoản, vui lòng trở về màn hình</p>
          <p>đăng nhập và đăng kí theo hướng dẫn</p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Login />, document.getElementById('root'))
