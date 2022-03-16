const { useState, useEffect } = React

const Question = () => {
  const [questionList, setQuestionList] = useState([])
  const getData = async () => {
    const endPoint = '/api/get_approve_user_symposium_comment'
    try {
      const rs = await fetchData(endPoint)
      const { success, data } = rs
      if (success === true && data) {
        setQuestionList((prev) => [...prev, data])
      }
    } catch (error) {}
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
      {questionList &&
        questionList.reverse().map((item, idx) => (
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
