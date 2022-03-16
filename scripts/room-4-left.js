const { useState, useEffect, useRef, Fragment } = React

const PostQuestion = () => {
  const picRef = useRef(null)
  const textRef = useRef(null)

  const handleSubmit = async () => {
    const pic = picRef.current.value
    const symposium_user_comment = textRef.current.value

    if (!symposium_user_comment.trim()) return

    const endpoint = '/api/store_user_symposium_comment'
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
      access_token: user.access_token,
      user_id: user.id,
      symposium_user_comment,
      pic,
    }

    try {
      const rs = await fetchData(endpoint, 'POST', payload)
      if (rs.success === true) {
        textRef.current.value = ''
      }
    } catch (error) {}
  }

  return (
    <Fragment>
      <div className='room-4__select-employee'>
        <select ref={picRef} id='select-employee'>
          <option value='GS. TS. BS. TRẦN HỮU DÀNG' className='selected'>
            GS. TS. BS. TRẦN HỮU DÀNG
          </option>
          <option value='PGS. BS. ELENA A. CHRISTOFIDES'>
            PGS. BS. ELENA A. CHRISTOFIDES
          </option>
          <option value='GS. BS. JEFFREY I. MECHANICK'>
            GS. BS. JEFFREY I. MECHANICK
          </option>
          <option value='TS. BS. TRẦN QUANG NAM'>TS. BS. TRẦN QUANG NAM</option>
        </select>
      </div>
      <div className='room-4__question-message'>
        <a
          style={{ cursor: 'pointer' }}
          onClick={handleSubmit}
          className='room-4__btn-submit'
        >
          Gửi câu hỏi
        </a>
        <textarea
          ref={textRef}
          className='room-4__textarea autoExpand'
          rows='3'
          data-min-rows='3'
          placeholder=''
          autoFocus
        ></textarea>
      </div>
    </Fragment>
  )
}

const Room4Left = () => {
  return (
    <Fragment>
      <div
        className='room-4__left-video'
        style={{
          backgroundImage: `url(./images/room-4-bg.jpg)`,
        }}
      >
        <div id='room-4-video-left'></div>
        <div id='video-js-center' className='video-js-center'>
          <VideoJS src='https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/ResearchStreaming/hlsdemo.m3u8' />
        </div>
        <div className='live-btn'>
          Live <span className='circle'></span>
        </div>
      </div>
      <div className='room-4__left-option'>
        <PostQuestion />

        <div className='room-4__select-language'>
          <label htmlFor='select-language'></label>
          <select id='select-language'>
            <option value=''>Tiếng Viết</option>
            <option value='january'>English</option>
          </select>
        </div>
      </div>
    </Fragment>
  )
}

const ele = document.getElementById('room-4-left')
ReactDOM.render(<Room4Left />, ele)
