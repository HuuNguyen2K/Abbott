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
          zIndex: '3',
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

const Policy = ({ show = false, setShow = () => {} }) => {
  return (
    <React.Fragment>
      <div
        style={{
          width: '100%',
          position: 'absolute',
          backgroundColor: '#fff',
          padding: '35px 55px',
          top: '20px',
          left: '50%',
          border: '2px solid #ebd8b8',
          borderRadius: '10px',
          transition: '.2s',
          transform: show
            ? 'translateX(-50%) scale(1)'
            : 'translateX(-50%) scale(0)',
          zIndex: '2',
        }}
        className='policy-container'
      >
        <div className='policy detail'>
          <div className='detail-title no-wrap'>
            <p>Chi tiết điều khoản chương trình</p>
            <h3 className='no-wrap'>
              Hội thảo khoa học và đào tạo y khoa liên tục
              <br />
              VAI TRÒ CỦA MIỄN DỊCH VÀ DINH DƯỠNG ĐỐI VỚI BỆNH NHÂN
              <br />
              ĐÁI THÁO ĐƯỜNG TRONG GIAI ĐOẠN BÌNH THƯỜNG MỚI
            </h3>
          </div>

          <div className='detail-block '>
            <h4>I – TÊN CHƯƠNG TRÌNH HỘI THẢO</h4>
            <p>
              VAI TRÒ CỦA MIỄN DỊCH VÀ DINH DƯỠNG ĐỐI VỚI BỆNH NHÂN ĐÁI THÁO
              ĐƯỜNG TRONG GIAI ĐOẠN BÌNH THƯỜNG MỚI
              <br />
              (Sau đây được gọi tắt là “Hội thảo”).
            </p>
          </div>

          <div className='detail-block'>
            <h4>II – TÊN NHÃN HÀNG TÀI TRỢ CHƯƠNG TRÌNH:</h4>
            <p>
              Văn Phòng Đại Diện Abbott Laboratories GmbH - Nhãn hàng Glucerna.
              (Sau đây được gọi tắt là “Công ty”)
            </p>
          </div>

          <div className='detail-block'>
            <h4>III – Đối tượng tham gia:</h4>
            <p>Chuyên viên Y tế toàn quốc</p>
          </div>

          <div className='detail-block'>
            <h4>IV – Thời gian hội thảo trực tuyến</h4>
            <p>Hội thảo diễn ra vào ngày 20/03/2022</p>
          </div>

          <div className='detail-block'>
            <h4>V – Phạm vi thực hiện</h4>
            <p>Toàn quốc</p>
          </div>

          <div className='detail-block'>
            <h4>VI – Hình thức</h4>
            <p>Trực tuyến</p>
          </div>

          <div className='detail-block'>
            <h4>
              VII – Thông báo pháp lý, điều khoản lưu trữ và sử dụng thông tin
            </h4>
            <p className='text-mb'>
              1. Buổi hội thảo này chỉ dành cho cá nhân hoặc tổ chức đã/đang
              được mời tham dự. Nếu Quý Chuyên viên Y tế (CVYT) không phải đối
              tượng được mời, vui lòng không tham dự buổi hội thảo này.
              <br />
              Quý Chuyên viên Y tế vui lòng không phổ biến, chuyển hoặc sao chép
              bất kỳ thông tin nào trong buổi hội thảo.
            </p>

            <p className='text-mb'>
              Quý Chuyên viên Y tế chấp nhận và đồng ý với
              <a
                href='https://glucerna.com.vn/dieu-khoan-dieu-le'
                target='_blank'
              >
                &nbsp;Điều khoản sử dụng&nbsp;
              </a>
              và
              <a
                href='https://glucerna.com.vn/chinh-sach-bao-mat'
                target='_blank'
              >
                &nbsp;Chính sách bảo mật&nbsp;
              </a>
              của Abbott. Quý Chuyên viên Y tế đồng ý (i) Abbott thu thập, sử
              dụng, chuyển, và/hoặc xử lý thông tin cá nhân của Quý Chuyên viên
              Y tế cung cấp trên trang này nhằm mục đích sử dụng cho hội thảo
              này và/hoặc các hội thảo trong tương lai; (ii) Abbott ghi âm lại
              buổi hội thảo bằng bất kỳ dạng thức nào, bao gồm quyền lưu trữ,
              lưu chuyển và sử dụng vô thời hạn những bản ghi này dùng trong nội
              bộ hoặc bên ngoài. <br />
              Quý Chuyên viên Y tế đồng ý được liên hệ qua điện thoại, email,
              tin nhắn bởi Abbott và các công ty thành viên, nhà cung cấp/bên
              thứ ba được ủy quyền thực hiện các hoạt động liên quan đến hoạt
              động tiếp thị sản phẩm và/hoặc dịch vụ của Abbott.
            </p>

            <p className='text-mb'>
              2. Quý Chuyên viên Y tế có thể truy cập và/hoặc thay đổi thông tin
              cá nhân của mình bằng văn bản hoặc các hình thức có trong
              <a
                href='https://glucerna.com.vn/chinh-sach-bao-mat'
                target='_blank'
              >
                &nbsp;Chính sách riêng tư&nbsp;
              </a>
              của Abbott. Để ngừng nhận đăng ký các thông tin về chương trình,
              vui lòng liên hệ với nhân viên Abbott.
            </p>
          </div>
        </div>

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

const OTP = ({
  phone,
  errOTP = false,
  setShow = () => {},
  showToast = () => {},
  onSubmit = () => {},
}) => {
  const [count, setCount] = React.useState(90)

  const handleSubmit = () => {
    const inputList = document.querySelectorAll('.input-gr > input')
    const valid =
      inputList &&
      Array.from(inputList).every((i) => {
        const value = i.value
        return value && value.length === 1
      })
    if (!valid) {
      showToast('Vui lòng nhập mã OTP')
      return
    }

    const result = Array.from(inputList).reduce(
      (prev, current) => prev + current.value,
      ''
    )

    onSubmit(result)
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(timer)
          setShow(false)
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  React.useEffect(() => {
    const inputList = document.querySelectorAll('.input-gr > input')

    inputList &&
      inputList.forEach((i, idx) => {
        i.addEventListener('input', (e) => {
          const value = e.target.value
          if (value.length > 1) e.target.value = value[0]
          if (value.length === 1 && idx !== inputList.length - 1) {
            inputList[idx + 1].focus()
          }
        })
      })
  }, [])

  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          padding: '35px 55px',
          top: '50%',
          left: '50%',
          border: '2px solid #ebd8b8',
          borderRadius: '10px',
          transition: '.2s',
          zIndex: '2',
          transform: 'translate(-50%, -50%)',
        }}
        className='otp'
      >
        <h3>XÁC THỰC OTP</h3>
        <p>
          Mã OTP đã được gửi tới số điện thoại{' '}
          <span className='phone'>{phone}.</span>
        </p>
        <p>Xin vui lòng nhập mã OTP để xác thực tài khoản đã đăng ký.</p>
        <div className='input-gr'>
          <input id='1' type='number' maxLength='1' />
          <input id='2' type='number' maxLength='1' />
          <input id='3' type='number' maxLength='1' />
          <input id='4' type='number' maxLength='1' />
          <input id='5' type='number' maxLength='1' />
          <input id='6' type='number' maxLength='1' />
        </div>
        <div className='noti'>
          <p>Chưa nhận được mã</p>
          <span>Thử lại sau ({count}) s</span>
        </div>
        {errOTP && (
          <div
            className='swal2-validation-message'
            id='swal2-validation-message'
          >
            Mã OTP không chính xác
          </div>
        )}
        <div className='action'>
          <button onClick={handleSubmit}>XÁC THỰC</button>
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: '#ffffff85',
          bottom: '0',
          zIndex: '1',
          cursor: 'pointer',
        }}
        onClick={() => setShow(false)}
        className='modal'
      ></div>
    </React.Fragment>
  )
}

const SignUp = ({ setMode }) => {
  const [state, setState] = React.useState({
    inviteNumber: '',
    name: '',
    company: '',
    phoneNumber: '',
    email: '',
  })
  const [show, setShow] = React.useState(false)
  const [isShowPolicy, setIsShowPolicy] = React.useState(false)
  const [isShowOTP, setIsShowOTP] = React.useState(false)
  const [message, setMessage] = React.useState(false)
  const [isAgree, setAgree] = React.useState(false)
  const [payload, setPayload] = React.useState(false)
  const [errOTP, setErrOTP] = React.useState(false)
  const [phoneOTP, setPhoneOTP] = React.useState(null)
  const [otp, setOtp] = React.useState(() =>
    Math.floor(100000 + Math.random() * 900000)
  )

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
    // setIsShowOTP(true)
    // return
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

    const newPayload = {
      name: nameConvert,
      email,
      invite_number: inviteNumber,
      phone: phoneNumber,
      company,
    }
    setPhoneOTP(phoneNumber)
    setPayload(newPayload)

    await fetchData(
      `/api/get_user_info_by_invite_number?invite_number=${inviteNumber}`,
      'GET'
    ).then(async (rs) => {
      const { success } = rs
      if (!success)
        showToast(
          'Mã thư mời không hợp lệ, vui lòng liên hệ nhân viên Abbott để kiểm tra lại'
        )
      else {
        const newOtp = Math.floor(100000 + Math.random() * 900000)
        setOtp(newOtp)
        await fetch('https://kenhthanhtoan.net/apibrandname/SendOTP', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            brandname: 'Glucerna',
            idrequest: Math.floor(Math.random() * 1000000000),
            message: `Cam on Quy Chuyen vien Y Te da dang ky tham du hoi thao "VAI TRO CUA MIEN DICH VA DINH DUONG DOI VOI BENH NHAN DAI THAO DUONG TRONG GIAI DOAN BINH THUONG MOI". Ma xac nhan cua Quy vi la ${newOtp}. Vui long nhap ma xac nhan trong vong 1.5 phut de hoan tat dang ky.`,
            password: 'NonPO.GlucernaSymposium!@34',
            phone: phoneNumber,
            username: 'NonPO.GlucernaSymposium',
          }),
        }).then((rs) => {
          setIsShowOTP(true)
        })
      }
    })
  }

  const handleSubmitOTP = async (otpValue) => {
    if (otpValue == otp) {
      setErrOTP(false)
      await fetchData('/api/user_register', 'POST', payload).then(
        async (rs) => {
          const { success, error } = rs
          if (success) {
            setIsShowOTP(false)

            fetch('https://kenhthanhtoan.net/apibrandname/SendOTP', {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                phone: rs.data.phone,
                message: `Chuc mung Quy Chuyen vien Y Te da hoan tat dang ky tham du hoi thao "VAI TRO CUA MIEN DICH VA DINH DUONG DOI VOI BENH NHAN DAI THAO DUONG TRONG GIAI DOAN BINH THUONG MOI" vao luc 08 gio sang ngay 20/03/2022 tai website https://www.hoithaodaithaoduong.com
Vui long su dung thong tin sau de dang nhap:
Username: ${rs.data.phone}
Password: ${rs.data.name.toLowerCase().replace(/\s/g, '')}`,
                idrequest: Math.floor(Math.random() * 1000000000),
                brandname: 'Glucerna',
                username: 'NonPO.GlucernaSymposium',
                password: 'NonPO.GlucernaSymposium!@34',
              }),
            }).then(function (data) {
              setMode(MODE.SIGN_IN)
            })
          } else {
            setIsShowOTP(false)
            showToast(error.message)
          }
        }
      )
    } else {
      setErrOTP(true)
    }
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
            <span onClick={() => setIsShowPolicy(true)}>
              (Chi tiết điều khoản)
            </span>
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
        <div onClick={() => setMode(MODE.SIGN_IN)} className='time'>
          x
        </div>
      </form>
      <ToastErr message={message} show={show} setShow={setShow} />
      <Policy show={isShowPolicy} setShow={setIsShowPolicy} />
      {isShowOTP && (
        <OTP
          errOTP={errOTP}
          setShow={setIsShowOTP}
          showToast={showToast}
          onSubmit={handleSubmitOTP}
          phone={phoneOTP}
        />
      )}
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

  const login = async () => {
    const idEle = document.querySelector('#id')
    const passwordEle = document.querySelector('#password')

    const uid = idEle.value
    const password = passwordEle.value

    if (!uid || !password) return

    const url = `/api/sign_in`
    await fetchData(url, 'POST', { uid, password }).then((rs) => {
      if (rs.success === true) {
        const { data } = rs
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
        setMode(MODE.AVT)
      } else {
        const errLoginContainer = document.querySelector('.err-login-container')
        const closeBtn = document.querySelector('.time')
        errLoginContainer && errLoginContainer.classList.add('active')
        closeBtn &&
          closeBtn.addEventListener('click', () => {
            errLoginContainer.classList.remove('active')
          })
      }
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

  const onSelect = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
    const avatar = e.target.files[0]

    const user = JSON.parse(localStorage.getItem('user'))
    const user_id = user.id
    const access_token = user.access_token

    const formData = new FormData()
    formData.append('user_id', user_id)
    formData.append('access_token', access_token)
    formData.append('avatar', avatar)

    fetch(URL_API_PREFIX + '/api/upload_avt', {
      method: 'POST',
      body: formData,
    })
      .then((respone) => respone.json())
      .then((rs) => {
        const { data, success } = rs
        if (success === true) {
          const user = JSON.parse(localStorage.getItem('user'))
          if (data && user) {
            user.avatar = data.avatar
            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
            window.location = 'lobby.html?welcome=true'
          }
        }
      })
  }

  React.useEffect(() => {
    if (mode === MODE.AVT) {
      const { avatar } = user
      avatar && setPreview(URL_API_PREFIX + avatar)
    }
  }, [mode])

  return (
    <div
      style={{ backgroundImage: `url("../images/login.png")` }}
      className='container'
    >
      {mode === MODE.SIGN_UP ? (
        <SignUp setMode={setMode} />
      ) : (
        <div className='content'>
          {mode === MODE.SIGN_IN && (
            <div>
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
                <button id='login-form' onClick={login} className='btn'>
                  ĐĂNG NHẬP
                </button>
              </div>
            </div>
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
                  <a href='../lobby.html?welcome=true'>BỎ QUA</a>
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
