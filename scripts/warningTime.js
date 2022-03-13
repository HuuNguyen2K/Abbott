const { useEffect, useState, useRef } = React;

const WarningTimeOut = () => {
  const [isWarning, setWarning] = useState(false);
  const [isSeminarStart, setSeminarStart] = useState(false);
  const endTimeRef = useRef(moment().add(1, 'minutes'));
  const startTime = endTimeRef.current.clone().subtract(2, 'minutes');

  const checkTime = () => {
    const now = moment();
    return now.isBetween(startTime, endTimeRef.current);
  }

  const checkSeminarStart = () => {
    const now = moment();
    return now.isSameOrAfter(endTimeRef.current);
  }

  useEffect(() => {
    setInterval(() => {
      setWarning(checkTime());
      setSeminarStart(checkSeminarStart());
    }, 1000);
  }, []);

  useEffect(() => {
    if (isWarning) alert('Còn 5, 10 phút nữa hết giờ trải nghiệm!');
  }, [isWarning]);

  useEffect(() => {
    if (isSeminarStart) alert('Đã đến giờ hội thảo!');
  }, [isSeminarStart]);

  return (
      <div>
        {/*{*/}
        {/*  isWarning && (*/}
        {/*    <div style={{ color: 'red' }}>*/}
        {/*      Còn 5, 10 phút nữa hết giờ trải nghiệm!*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*}*/}
      </div>
  );
}

const domContainer = document.querySelector('#warning-time-out');
ReactDOM.render(<WarningTimeOut/>, domContainer);
