const login = () => {
  const form = document.querySelector('#login-form')
  const id = document.querySelector('#id')
  const password = document.querySelector('#password')
  const errID = document.querySelector('#err-id')
  const errPassword = document.querySelector('#err-pass')
  console.log(errPassword)

  form.addEventListener('submit', (e) => {
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
  })
}

window.onload = () => {
  login()
}
