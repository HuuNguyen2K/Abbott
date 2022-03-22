const { useState, useEffect, useRef, Fragment } = React

const PostQuestion = () => {
  // remove 

  // return null
  const picRef = useRef(null)
  const textRef = useRef(null)

  const handleSubmit = async (e) => {
    // disable
    return
    e.preventDefault()
    const pic = picRef.current.value
    const symposium_user_comment = textRef.current.value

    if (!symposium_user_comment.trim()) return

    // const endpoint = '/api/store_user_symposium_comment'
    // const user = JSON.parse(localStorage.getItem('user'))
    // const payload = {
    //   access_token: user.access_token,
    //   user_id: user.id,
    //   symposium_user_comment,
    //   pic,
    // }

    // try {
    //   const rs = await fetchData(endpoint, 'POST', payload)
    //   if (rs.success === true) {
    //     textRef.current.value = ''
    //   }
    // } catch (error) { }
  }

  return (
    <Fragment>
      <div className='room-4__select-employee'>
        <select disabled ref={picRef} id='select-employee'>
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
          style={{ cursor: 'unset', opacity: '0.8' }}
          onClick={handleSubmit}
          className='room-4__btn-submit'
        >
          Gửi câu hỏi
        </a>
        <textarea
          disabled
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

  const [showGame, setShowGame] = useState(false);
  const [currentGame, setCurrentGame] = useState('game1');

  const [lang, setLang] = useState('vn');
  const [showClip, setShowClip] = useState(true);
  const [currentClip, setCurrentClip] = useState('clip1');
  const [showCME, setShowCME] = useState(false);

  const CLIP = 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/GLUCERNA_SYMPOSIUM_UPDATE/hlsvideo.m3u8'

  const CLIPS = { // TODO
    clip1: {
      en: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/drelena_en/hlsvideo.m3u8',
      vn: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/drelena_vie/hlsvideo.m3u8',
    },
    // clip2: {
    //   en: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/clip05/hlsclip05.m3u8',
    //   vn: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/clip05/hlsclip05.m3u8'
    // },
    // clip3: {
    //   en: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/ElenaPresentEnglish/hlsElenaPresentEnglish.m3u8',
    //   vn: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/ElenaPresentEnglish/hlsElenaPresentEnglish.m3u8'
    // },
    clip4: {
      en: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/JEFFFREY_PRESENT_ENGLISH_VERSION/hlsvideo.m3u8',
      vn: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/JEFFFREY_PRESENT_VIETNAM_v2/hlsvideo.m3u8'
    },
    clip5: {
      en: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/BSNAM02/hlsvideo.m3u8',
      vn: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/BSNAM02/hlsvideo.m3u8'
    },
    clip6: {
      en: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/ramat2/hlsvideo.m3u8',
      vn: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/ramat2/hlsvideo.m3u8'
    },
    clip7: {
      en: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/GLUCERNA_ROOM+4_CLIP6_ENG_3/hlsvideo.m3u8',
      vn: 'https://gms-abbott-production.s3.ap-southeast-1.amazonaws.com/GLUCERNA_ROOM4_CLIP6_VIE_3/hlsvideo.m3u8'
    },
  }

  const GAMES = {
    game1: { url: URL_GAME_3_1, time: 41000 }, // millisecond
    game2: { url: URL_GAME_3_2, time: 41000 }, // millisecond
    game3: { url: URL_GAME_3_3, time: 41000 }, // millisecond
  }

  const playerRef = React.useRef();

  const checkSeminarStart = () => {
    const now = moment();
    return now.isSameOrAfter(START_EVENT_TIME);
  }

  const handleReady = (player) => {
    playerRef.current = player;
  };

  // const handleChangeVideo = (type) => {
  //   if (!playerRef.current) return ;
  //   setLang(type);

  //   playerRef.current.pause();
  //   const currentTime = playerRef.current.currentTime();
  //   playerRef.current.src([{ src: CLIPS[currentClip][type], type: 'application/x-mpegURL'}]);
  //   playerRef.current.currentTime(currentTime);
  //   playerRef.current.play();
  // };

  // const handleLeaveTime = async () => {
  //   const url = '/api/store_topic_4_leave_time'
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   const payload = {
  //     access_token: user.access_token,
  //     user_id: user.id,
  //   }
  //   try {
  //     await fetchData(url, 'POST', payload)
  //   } catch (error) {}
  // }

  const handleEnded = () => {
    switch (currentClip) {
      // case 'clip1':
      //   handleLeaveTime()
      //   setCurrentClip('clip2');
      // break;
      // case 'clip2':
      //   handleLeaveTime()
      //   setCurrentClip('clip3');
      //   break;
      // case 'clip1':
      //   handleLeaveTime()
      //   setShowClip(false);
      //   setShowGame(true);
      //   const setTimeoutGame1 = setTimeout(() => {
      //     setShowGame(false);
      //     setCurrentClip('clip4');
      //     setShowClip(true);
      //     clearTimeout(setTimeoutGame1);
      //   }, GAMES[currentGame].time);
      //   break;

      // case 'clip4':
      //   handleLeaveTime()
      //   setShowClip(false);
      //   setCurrentGame('game2');
      //   setShowGame(true);
      //   const setTimeoutGame2 = setTimeout(() => {
      //     setShowGame(false);
      //     setCurrentClip('clip5');
      //     setShowClip(true);
      //     clearTimeout(setTimeoutGame2);
      //   }, GAMES[currentGame].time);
      //   break;

      // case 'clip5':
      //   handleLeaveTime()
      //   setShowClip(false);
      //   setCurrentGame('game3');
      //   setShowGame(true);
      //   const setTimeoutGame3 = setTimeout(() => {
      //     setShowGame(false);
      //     setCurrentClip('clip6');
      //     setShowClip(true);
      //     clearTimeout(setTimeoutGame3);
      //   }, GAMES[currentGame].time);
      //   break;

      // case 'clip6':
      //   handleLeaveTime()
      //   alert('Hãy chung tay cùng chúng tôi cải thiện sức khoẻ bệnh nhân đái tháo đường!');
      //   setShowGame(false);
      //   setCurrentClip('clip7');
      //   setShowClip(true);
      //   break;
      // case 'clip7':
      default:
        // handleLeaveTime()
        // setShowClip(false);
        // setShowGame(false);
        // setShowCME(true);
        break;
    }
  }

  // const handleStatisticInit = async () => {
  //   const url = '/api/user_click_topic'
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   const payload = {
  //     access_token: user.access_token,
  //     user_id: user.id,
  //     topic_number: 4,
  //     language: 'VN',
  //   }
  //   try {
  //     await fetchData(url, 'POST', payload)
  //   } catch (error) {}
  // }

  // const handleStatisticLang = async (_l) => {
  //   const l = _l.toUpperCase()
  //   const url = '/api/store_topic_4_language'
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   const payload = {
  //     access_token: user.access_token,
  //     user_id: user.id,
  //     topic_number: 4,
  //     language: 'VN',
  //   }
  //   try {
  //     await fetchData(url, 'POST', payload)
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   handleStatisticInit()
  // }, [])

  // useEffect(() => {
  //   handleStatisticLang(lang)
  // }, [lang])


  return (
    <Fragment>
      <div
        className='room-4__left-video'
        style={{
          // backgroundImage: `url(./images/room-4-bg.jpg)`,
        }}
      >
        <div id='room-4-video-left'></div>
        <div id='video-js-center' className='video-js-center'>
          {
            showClip && (
              <VideoJS
                key={currentClip}
                src={CLIP}
                // src={CLIPS[currentClip][lang]}
                onReady={handleReady}
                options={{
                  autoplay: false,
                  // autoplay: checkSeminarStart(),
                  // muted: currentClip === 'clip1',
                  muted: false,
                  // muted: true,
                  controls: true,
                }}
                onEnded={handleEnded}
                isLive={false}
                keep={true}
              />
            )
          }
        </div>
        {/*<div className='live-btn'>*/}
        {/*  Live <span className='circle'></span>*/}
        {/*</div>*/}
      </div>
      <div className='room-4__left-option'>
        <PostQuestion />

        <div className='room-4__select-language'>
          <label htmlFor='select-language'></label>
          <select disabled id='select-language' onChange={(e) => handleChangeVideo(e.target.value)}>
            <option value='vn'>Tiếng Việt</option>
            <option value='en'>Tiếng Anh</option>
          </select>
        </div>
      </div>
      {/* {
        showGame && <IframeGame src={GAMES[currentGame].url} show={true} disabledClose={true} />
      } */}
      {/* {
        showCME && <ModalQR
          src="./images/cme_qr_code.png"
          show={true}
          documentUrl="http://54.251.217.230/avatars/Hoi-thao-dai-thao-duong.zip"
        />
      } */}
    </Fragment>
  )
}

const ele = document.getElementById('room-4-left')
ReactDOM.render(<Room4Left />, ele)
