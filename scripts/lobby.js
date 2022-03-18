const Lobby = () => {
  const handleRoom1Click = async () => {
    const url = '/api/user_click_topic'
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
      access_token: user.access_token,
      user_id: user.id,
      topic_number: 1,
    }
    try {
      await fetchData(url, 'POST', payload)
    } catch (error) {}
    location.href = './immunity.html?welcome=true'
  }
  const handleRoom2Click = async () => {
    const url = '/api/user_click_topic'
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
      access_token: user.access_token,
      user_id: user.id,
      topic_number: 2,
    }
    try {
      await fetchData(url, 'POST', payload)
    } catch (error) {}
    location.href = './room-2.html?welcome=true'
  }
  const handleRoom3Click = async () => {
    const url = '/api/user_click_topic'
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
      access_token: user.access_token,
      user_id: user.id,
      topic_number: 3,
    }

    try {
      await fetchData(url, 'POST', payload)
    } catch (error) {}
    location.href = './room-3.html?welcome=true'
  }
  const handleRoom4Click = async () => {
    // const url = '/api/user_click_topic'
    // const user = JSON.parse(localStorage.getItem('user'))
    // const payload = {
    //   access_token: user.access_token,
    //   user_id: user.id,
    //   topic_number: 4,
    // }
    //  try {
    //   await fetchData(url, 'POST', payload)
    // } catch (error) {}
    location.href = './room-4.html'
  }
  return (
    <div
      className='container'
      style={{
        backgroundImage: 'url(./images/lobbynewbg.png',
      }}
    >
      <div onClick={handleRoom1Click} className='room room-1 slide-shine'>
        <img src='./images/room-1-icon.png' alt='' />
      </div>
      <div onClick={handleRoom2Click} className='room room-2 slide-shine'>
        <img src='./images/room-2-icon.png' alt='' />
      </div>
      <div onClick={handleRoom3Click} className='room room-3 slide-shine'>
        <img src='./images/room-3-icon.png' alt='' />
      </div>
      {
        <WarningTimeBeforeEvent onEnd={handleRoom4Click}>
          <div className='room room-4 slide-shine'>
            <img src='./images/room-4-icon.png' alt='' />
          </div>
        </WarningTimeBeforeEvent>
      }
      <div className='invite-choice'>
        <img
          src='./images/lobby-moi.png'
          alt='Mời Qúy chuyên viên Y Tế chọn khu vực trải nghiệm'
        />
      </div>
      {/* <div className='text'>
        <span>
          VAI TRÒ CỦA MIỄN DỊCH VÀ DINH DƯỠNG ĐỐI VỚI BỆNH NHÂN ĐÁI THÁO ĐƯỜNG
          TRONG GIAI ĐOẠN BÌNH THƯỜNG MỚI
        </span>
      </div> */}
    </div>
  )
}

ReactDOM.render(<Lobby />, document.getElementById('root'))
