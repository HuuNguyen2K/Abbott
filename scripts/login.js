const login = () => {
  const URL_API_PREFIX = ''
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

    console.log(idValue)
    console.log(passwordValue)

    const url = URL_API_PREFIX + 'sign_in'
    const data = {
      uid: idValue,
      password: passwordValue,
    }

    const rsJSON = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const rs = JSON.parse(rsJSON)

    if(rs.status === 200) {
      // login success and do something

      
      window.location.href = 'information.html'
    }


  })
}

window.onload = () => {
  login()
}
