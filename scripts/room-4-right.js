const { useState, useEffect } = React

const Question = () => {
  // remove 
  // return null

  const [questionList, setQuestionList] = useState([])
  const [openAnswerReport, setOpenAnswerReport] = useState(false);

  const getData = async () => {
    // const endPoint = '/api/get_list_approve_user_symposium_comment'
    // try {
    //   const rs = await fetchData(endPoint)
    //   const { success, data } = rs
    //   if (success === true && data) {
    //     setQuestionList(data)
    //   }
    // } catch (error) {}
  }

  const handleOpenAnswerReport = () => {
    setOpenAnswerReport(!openAnswerReport);
  }

  const handleCheckAnswerReport = () => {
    return;
    if (moment().isSameOrBefore(TIME_TO_ASK_HOST)) return setOpenAnswerReport(false);
    if (moment().isAfter(TIME_TO_ASK_HOST)) return setOpenAnswerReport(true);
  }

  // useEffect(() => {
  //   getData()

  //   const timer = setInterval(() => {
  //     getData()
  //   }, 5000)

  //   return () => clearInterval(timer)
  // }, [])

  return (
    <div className='room-4__list-employee'>
      <a className='dl ta' href={URL_API_PREFIX + '/avatars/Tai-lieu-tieng-Anh.zip'} download='Tai-lieu-tieng-Anh.zip'>
        <img src="../images/Button-dl-TA.png" alt="" />
      </a>

      <a className='dl tv' href={URL_API_PREFIX + '/avatars/Tai-lieu-tieng-Viet.zip'} download='Tai-lieu-tieng-Anh.zip'>
        <img src="../images/Button-dl-TV.png" alt="" />
      </a>

      {/* <a href='http://glusymposium2003.com/'>
        <img src="../images/button-ENGLISH.png" alt="" />
      </a> */}


      {/* <div className='answer-from-reporter' onClick={handleCheckAnswerReport}>
        {moment().isSameOrBefore(TIME_TO_ASK_HOST) && <img src='../images/answeer-reporter-1.png' />}
        {(moment().isAfter(TIME_TO_ASK_HOST)) && <img src='../images/answeer-reporter-2.png' />}
      </div>

      { openAnswerReport && <AnswerReporter onClose={handleOpenAnswerReport}/> }
      {questionList &&
        questionList.map((item, idx) => (
          <div key={idx} className='room-4__item-employee'>
            <h3>{item.pic}</h3>
            <p>{item.symposium_user_comment}</p>
          </div>
        ))} */}
    </div>
  )
}

const ele = document.getElementById('room-4-right')
ReactDOM.render(<Question />, ele)
