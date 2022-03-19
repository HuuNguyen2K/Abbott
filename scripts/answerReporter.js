const { useEffect, Fragment, useState } = React;

const AnswerReporter = (props) => {
    const { disabledClose, onClose } = props;

    useEffect(() => {
        const modalCountDown=document.getElementById('answer-reporter')
        const btnCloseCountDown = document.getElementById('answer-reporter-close')

        const showPopup = () => {
            modalCountDown.classList.add('open', 'overlay')
        }
        const hidePopup = () => {
            onClose && onClose();
            modalCountDown.classList.remove('open', 'overlay')
        }

        if (!disabledClose) {
            btnCloseCountDown.addEventListener('click', hidePopup)
        }
    }, []);

    return (
        <Fragment>
            <div id="answer-reporter" className="modal__answer-report open overlay">
                <div className="modal__count-down-bg" style={{ backgroundImage: 'url(images/count-down-bg-text.png)'}}>

                    {/*<div className="modal__count-down-time">*/}
                    {/*    <div className="modal__count-down-time-wrap">*/}
                    {/*        <div className="modal__count-down-time-bg "*/}
                    {/*             style={{ backgroundImage: 'url(images/count-down-time-bg.png)', marginRight: '3px'}}>*/}
                    {/*            <span className="hour">*/}
                    {/*                { durationTime.minutes() < 10 ? `0${durationTime.minutes()}` : durationTime.minutes() }*/}
                    {/*            </span>*/}
                    {/*        </div>*/}

                    {/*        <div className="text" style={{marginRight: '3px'}}>Phút</div>*/}
                    {/*    </div>*/}
                    {/*    <div className="modal__count-down-time-wrap">*/}
                    {/*        <div className="modal__count-down-time-bg"*/}
                    {/*             style={{ backgroundImage: 'url(images/count-down-time-bg.png)'}}>*/}
                    {/*            <span className="minutes">*/}
                    {/*                { durationTime.seconds() < 10 ? `0${durationTime.seconds()}` : durationTime.seconds() }*/}
                    {/*            </span>*/}
                    {/*        </div>*/}

                    {/*        <div className="text">Giây</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div id="answer-reporter-close" className="swiper-btn-close"
                         style={{ backgroundImage: 'url(./images/btn-close-slider.png)'}} />
                </div>
            </div>
        </Fragment>
    );
};
