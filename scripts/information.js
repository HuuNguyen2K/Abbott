const information = () => {
  const form = document.querySelector('#login-form')
  const imgELe = document.querySelector('#imgPr')
  const imgInp = document.querySelector('#imgInput')
  const firstName = document.querySelector('#firstName')
  const lastName = document.querySelector('#lastName')
  const errFirstName = document.querySelector('#err-firstName')
  const errLastName = document.querySelector('#err-lastName')

  imgInp.onchange = (evt) => {
    const [file] = imgInp.files
    if (file) imgELe.src = URL.createObjectURL(file)
    console.log(imgInp.files)
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value

    if (!firstNameValue) errFirstName.innerHTML = 'Vui lòng nhập họ'
    else errFirstName.innerHTML = ''

    if (!lastNameValue) errLastName.innerHTML = 'Vui lòng nhập tên'
    else errLastName.innerHTML = ''

    if (!firstNameValue || !lastNameValue) return

    console.log('submit');
  })
}

window.onload = () => {
  information()
}
