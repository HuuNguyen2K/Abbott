function SignIn() {
  return (
    <div className='container'>
      <h3 style={{ textAlign: 'center' }} className='head'>
        ĐĂNG KÍ THAM GIA CHƯƠNG TRÌNH <br />
        HỘI THẢO ĐÀO TẠO CHUYÊN ĐỀ NGÀY 20/03/2022
      </h3>
      <div className='content'>
        <div className='group'>
          <div className='title'>Mã số thư mời*</div>
          <div className='input'>
            <input type='text' />
            <button>LẤY THÔNG TIN</button>
          </div>
        </div>
        <div className='group'>
          <div className='title'>Họ và tên*</div>
          <div className='input'>
            <input type='text' />
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<SignIn />, document.getElementById('root'))
