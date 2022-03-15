const { useEffect, useState, useRef } = React;

const WarningTimeOut = () => {
  const [isWarning, setWarning] = useState(false);
  const [isSeminarStart, setSeminarStart] = useState(false);
  const[durationTime, setDurationTime] = useState(null);

  // [startTime1] -5 minutes- [endTime1] ----- [startTime2] -30 seconds- [endTime2]

  const endTime2Ref = useRef(START_EVENT_TIME); // start event
  const startTime1Ref = useRef(endTime2Ref.current.clone().subtract(30, 'minutes'));

  const endTime1Ref = useRef(startTime1Ref.current.clone().add(5, 'minutes'));
  const startTime2Ref = useRef(endTime2Ref.current.clone().subtract(30, 'seconds'));

  const handleShowWarning = () => {
    const now = moment();
    const isBetween1 = now.isBetween(startTime1Ref.current, endTime1Ref.current);
    if (isBetween1) {
      setWarning(true);
      setDurationTime(moment.duration(endTime1Ref.current - now));
      return;
    }

    const isBetween2 = now.isBetween(startTime2Ref.current, endTime2Ref.current);
    if (isBetween2) {
      setWarning(true);
      setDurationTime(moment.duration(endTime2Ref.current - now));
      return;
    }

    setWarning(false);
    setDurationTime(null);
  }

  const checkSeminarStart = () => {
    const now = moment();
    return now.isSameOrAfter(endTime2Ref.current);
  }

  useEffect(() => {
    const handleInterval = setInterval(() => {
      handleShowWarning();
      setSeminarStart(checkSeminarStart());
    }, 1000);
    return () => { clearInterval(handleInterval) }
  }, []);

  useEffect(() =>{
    if (isSeminarStart) {
      // Redirect here
    }
  }, [isSeminarStart]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999
      }}
    >
      {isWarning && durationTime && (
        <div className='counter'>
          <p>CHƯƠNG TRÌNH HỘI THẢO SẼ BẮT ĐẦU SAU</p>
          <div className='timer' >
            <div>
              <p>{ durationTime.minutes() < 10 ? `0${durationTime.minutes()}` : durationTime.minutes() }</p>
            </div>
            <div >
              <p>{ durationTime.seconds() < 10 ? `0${durationTime.seconds()}` : durationTime.seconds() }</p>
            </div>
          </div>  
        </div>
      )}
    </div>
  );
}

const domContainer = document.querySelector('#warning-time-out');
ReactDOM.render(<WarningTimeOut/>, domContainer);
