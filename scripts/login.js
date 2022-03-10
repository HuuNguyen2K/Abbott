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
      'http://hoithaodaithaoduong.com/video/tearsing-clip-06-03.mp4'
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
  SIGN_UP: 'SIGN_UP',
}

const ToastErr = (props) => {
  const { message = 'Mã thư mời là bắt buộc', show = false, setShow } = props
  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          top: '50%',
          left: '50%',
          padding: '35px 140px',
          border: '2px solid #ebd8b8',
          borderRadius: '10px',
          transition: '.2s',
          transform: show
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0)',
          zIndex: '2',
        }}
        className='toast-err'
      >
        <img
          style={{ width: '200px', margin: '0 auto' }}
          src='../images/icon-warning.png'
          alt=''
        />
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            fontSize: '40px',
            height: '50px',
            width: '50px',
            textAlign: 'center',
            lineHeight: '50px',
            cursor: 'pointer',
            color: 'rgb(127 125 125)',
          }}
          onClick={() => setShow(false)}
        >
          x
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px' }}>
          {message}
        </p>
      </div>
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: '#ffffff85',
          bottom: '0',
          transform: show ? 'scale(1)' : 'scale(0)',
          zIndex: '1',
          cursor: 'pointer',
        }}
        onClick={() => setShow(false)}
        className='modal'
      ></div>
    </React.Fragment>
  )
}

const SignUp = () => {
  const [state, setState] = React.useState({
    inviteNumber: '',
    name: '',
    company: '',
    phoneNumber: '',
    email: '',
  })
  const [show, setShow] = React.useState(false)
  const [message, setMessage] = React.useState(false)
  const [isAgree, setAgree] = React.useState(false)

  const showToast = (mess) => {
    setMessage(mess)
    setShow(true)
  }

  const repState = (newState) => setState((prev) => ({ ...prev, ...newState }))

  const validateInviteNumber = () => {
    const value = state.inviteNumber
    if (!value) {
      showToast('Mã thư mời là bắt buộc.')
      return false
    }

    if (!value.match(/^CME\d{6}$/g) && !value.match(/^\d{8}$/g)) {
      showToast('Mã thư mời sai định dạng.')
      return false
    }

    return true
  }

  const validateRequire = (value, mess) => {
    if (!value) {
      showToast(mess)
      return false
    }

    return true
  }

  const validatePhoneNumber = () => {
    const value = state.phoneNumber
    if (!value) {
      showToast('Số điện thoại là bắt buộc.')
      return false
    }

    if (!value.match(/^\d{10}$/g)) {
      showToast('Số điện thoại phải là 10 số.')
      return false
    }

    return true
  }

  const validateEmail = () => {
    const value = state.email

    if (!value) {
      showToast('Email là bắt buộc.')
      return false
    }

    if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showToast('Email sai định dạng.')
      return false
    }

    return true
  }

  const handleSubmit = async () => {
    if (!validateInviteNumber()) return
    if (!validateRequire(state.name, 'Họ và Tên là bắt buộc.')) return
    if (!validateRequire(state.company, 'Nơi công tác là bắt buộc.')) return
    if (!validatePhoneNumber()) return
    if (!validateEmail()) return

    const { inviteNumber, name, company, phoneNumber, email } = state

    const nameConvert = name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')

    const payload = {
      name: nameConvert,
      email,
      invite_number: inviteNumber,
      phone: phoneNumber,
      company,
    }

    await fetchData('user_register', 'POST', payload).then((rs) =>
      console.log(rs)
    )
  }

  return (
    <div className='form-sign-up'>
      <h3>
        ĐĂNG KÝ THAM GIA CHƯƠNG TRÌNH
        <br />
        HỘI THẢO ĐÀO TẠO CHUYÊN ĐỀ NGÀY 20/03/2022
      </h3>
      <form>
        <div className='sign-up-group'>
          <label htmlFor='invite_number'>
            Mã số thư mời*
            <span>*Mã số thư mời nhận được từ nhân viên Abbott</span>
          </label>
          <input
            onChange={(e) => repState({ inviteNumber: e.target.value })}
            onBlur={validateInviteNumber}
            type='text'
            name='invite_number'
            id='invite_number'
            placeholder='Mã số với cú pháp CMExxxxxx'
          />
        </div>
        <div className='sign-up-group'>
          <label htmlFor='name'>Họ và tên*</label>
          <input
            onChange={(e) => repState({ name: e.target.value })}
            onBlur={() => validateRequire(state.name, 'Họ và Tên là bắt buộc.')}
            type='text'
            name='name'
            id='name'
            placeholder='Vui lòng nhập họ và tên có dấu'
          />
        </div>
        <div className='sign-up-group'>
          <label htmlFor='company'>
            Nơi công tác*
            <span>*Ví dụ: Bệnh viện Đại học Y dược TP.HCM</span>
          </label>
          <input
            onChange={(e) => repState({ company: e.target.value })}
            onBlur={() =>
              validateRequire(state.company, 'Nơi công tác là bắt buộc.')
            }
            type='text'
            name='company'
            id='company'
            placeholder='Cú pháp: Tên bệnh viện + Tỉnh/Thành phố'
          />
        </div>
        <div className='sign-up-group'>
          <label htmlFor='phone'>Số điện thoại*</label>
          <input
            onChange={(e) => repState({ phoneNumber: e.target.value })}
            onBlur={validatePhoneNumber}
            type='text'
            name='phone'
            id='phone'
            placeholder='Vui lòng nhập số điện thoại'
          />
        </div>
        <div className='sign-up-group'>
          <label htmlFor='name'>Email*</label>
          <input
            onChange={(e) => repState({ email: e.target.value })}
            onBlur={validateEmail}
            type='text'
            name='email'
            id='email'
            placeholder='Vui lòng nhập email'
          />
        </div>
        <div className='checked-rule'>
          <input
            defaultChecked={isAgree}
            onChange={(e) => setAgree(e.target.checked)}
            type='checkbox'
            id='termOK'
          />
          <p>
            Tôi đồng ý với các điều khoản của chương trình
            <span>(Chi tiết điều khoản)</span>
          </p>
        </div>
        <div className='action'>
          <button
            className={isAgree ? 'active' : ''}
            disabled={!isAgree}
            onClick={handleSubmit}
            type='button'
          >
            GỬI THÔNG TIN
          </button>
        </div>
      </form>
      <ToastErr message={message} show={show} setShow={setShow} />
    </div>
  )
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
    const idEle = document.querySelector('#id')
    const passwordEle = document.querySelector('#password')

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const uid = idEle.value
      const password = passwordEle.value

      if (!uid || !password) return

      const url = `sign_in`
      await fetchData(url, 'POST', { uid, password }).then((rs) => {
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
      {mode === MODE.SIGN_UP ? (
        <SignUp />
      ) : (
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
                <button className='btn' onClick={() => setMode(MODE.SIGN_UP)}>
                  ĐĂNG KÝ
                </button>
                <button className='btn' type='submit'>
                  ĐĂNG NHẬP
                </button>
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
                <label
                  className='d-none'
                  ref={labelRef}
                  htmlFor='avt-up'
                ></label>
                <button
                  className='btn'
                  onClick={() => labelRef.current.click()}
                >
                  CHỌN ẢNH TỪ THIẾT BỊ
                </button>
                <button style={{ margin: 0 }} className='btn'>
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
      )}
    </div>
  )
}

ReactDOM.render(<Login />, document.getElementById('root'))
