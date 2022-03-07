const login = () => {
  const URL_API_PREFIX = 'http://hoithaodaithaoduong.com/api/'
  const form = document.querySelector('#login-form')
  const id = document.querySelector('#id')
  const password = document.querySelector('#password')
  const errID = document.querySelector('#err-id')
  const errPassword = document.querySelector('#err-pass')
  console.log(errPassword)

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const idValue = id.value
    const passwordValue = password.value

    if (!idValue) errID.innerHTML = 'Vui lòng nhập ID'
    else errID.innerHTML = ''

    if (!passwordValue) errPassword.innerHTML = 'Vui lòng nhập mật khẩu'
    else errPassword.innerHTML = ''

    if (!idValue || !passwordValue) return

    const url =
      URL_API_PREFIX + `sign_in?uid=${idValue}&password=${passwordValue}`

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((respone) => respone.json())
      .then((rs) => {
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

window.onload = () => {
  login()
}
