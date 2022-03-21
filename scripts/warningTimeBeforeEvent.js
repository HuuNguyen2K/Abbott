const { useEffect, Fragment, useRef, useState } = React;

const WarningTimeBeforeEvent = (props) => {
    const { forever, onEnd, children, disabledClose } = props;
    const startEventTime = useRef(START_EVENT_TIME);
    const handleShowPopup = useRef();
    const[durationTime, setDurationTime] = useState(moment.duration(startEventTime.current - moment()));

    const checkSeminarStart = () => {
        const now = moment();
        return now.isSameOrAfter(startEventTime.current);
    }

    const handleUpdateCounter = (onEnd) => {
        if(!checkSeminarStart()) {
            const now = moment();
            setDurationTime(moment.duration(startEventTime.current - now))
        } else onEnd();
    }

    useEffect(() => {
        const modalCountDown=document.getElementById('event-count-down')
        const btnCloseCountDown = document.getElementById('warning-time-before-event-close-slide-left')

        const showPopup = () => {
            modalCountDown.classList.add('open', 'overlay')
        }
        const hidePopup = () => {
            modalCountDown.classList.remove('open', 'overlay')
        }

        handleShowPopup.current = (onHide, onShow) => {
            if(!checkSeminarStart()) {
                showPopup();
                onShow && onShow();
            } else {
                hidePopup();
                onHide && onHide();
            }
        }

        if (!disabledClose) btnCloseCountDown.addEventListener('click', hidePopup)

        // const handleInterValUpdateCounter = setInterval(() => {
        //     handleUpdateCounter(() => clearInterval(handleInterValUpdateCounter));
        // }, 1000);

        // let handleIntervalShowPopup;
        // if (forever) {
        //     handleIntervalShowPopup = setInterval(() => {
        //         handleShowPopup.current(() => {
        //             clearInterval(handleIntervalShowPopup)
        //         });
        //     }, 1000);
        // }

        // return () => {
        //     clearInterval(handleInterValUpdateCounter);
        //     clearInterval(handleIntervalShowPopup)
        // }
    }, []);

    return (
        <Fragment>
            { children && <div onClick={onEnd}>{children}</div> }
            <div id="event-count-down" className="modal__count-down">
                <div className="modal__count-down-bg" style={{ backgroundImage: 'url(images/count-down-bg-text.png)'}}>

                    <div className="modal__count-down-time">
                        <div className="modal__count-down-time-wrap">
                            <div className="modal__count-down-time-bg "
                                 style={{ backgroundImage: 'url(images/count-down-time-bg.png)', marginRight: '3px'}}>
                                <span className="hour">
                                    { durationTime.minutes() < 10 ? `0${durationTime.minutes()}` : durationTime.minutes() }
                                </span>
                            </div>

                            <div className="texts" style={{marginRight: '3px'}}>Phút</div>
                        </div>
                        <div className="modal__count-down-time-wrap">
                            <div className="modal__count-down-time-bg"
                                 style={{ backgroundImage: 'url(images/count-down-time-bg.png)'}}>
                                <span className="minutes">
                                    { durationTime.seconds() < 10 ? `0${durationTime.seconds()}` : durationTime.seconds() }
                                </span>
                            </div>

                            <div className="texts">Giây</div>
                        </div>
                    </div>

                    <div id="warning-time-before-event-close-slide-left" className="swiper-btn-close"
                         style={{ backgroundImage: 'url(./images/btn-close-slider.png)'}} />
                </div>
            </div>
        </Fragment>
    );
};
