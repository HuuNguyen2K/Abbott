const { useState, useEffect } = React

const Question = () => {
  const [questionList, setQuestionList] = useState([])
  const [openAnswerReport, setOpenAnswerReport] = useState(false);

  const getData = async () => {
    const endPoint = '/api/get_list_approve_user_symposium_comment'
    try {
      const rs = await fetchData(endPoint)
      const { success, data } = rs
      if (success === true && data) {
        setQuestionList(data);
      }
    } catch (error) {}
  }

  const handleOpenAnswerReport = () => {
    setOpenAnswerReport(!openAnswerReport);
  }

  const handleCheckAnswerReport = () => {
    if (moment().isBetween(TIME_TO_ASK_HOST_FROM, TIME_TO_ASK_HOST_TO)) return setOpenAnswerReport(false);
    if (moment().isAfter(TIME_TO_ASK_HOST_TO)) return setOpenAnswerReport(true);
  }

  useEffect(() => {
    getData()

    const timer = setInterval(() => {
      getData()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='room-4__list-employee'>
      <div className='answer-from-reporter' onClick={handleCheckAnswerReport}>
        {(moment().isBetween(TIME_TO_ASK_HOST_FROM, TIME_TO_ASK_HOST_TO)) && <img src='../images/answeer-reporter-1.png' />}
        {(moment().isAfter(TIME_TO_ASK_HOST_TO)) && <img src='../images/answeer-reporter-2.png' />}
      </div>

      { openAnswerReport && <AnswerReporter onClose={handleOpenAnswerReport}/> }
      {questionList &&
        questionList.map((item, idx) => (
          <div key={idx} className='room-4__item-employee'>
            <h3>{item.pic}</h3>
            <p>{item.symposium_user_comment}</p>
          </div>
        ))}
    </div>
  )
}

const ele = document.getElementById('room-4-right')
ReactDOM.render(<Question />, ele)
