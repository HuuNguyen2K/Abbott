const { useEffect, Fragment } = React;

const SeminarProgram = (props) => {
    const { children } = props;

    useEffect(() => {
        const modalSeminar = document.getElementById('event-seminar')
        const btnSeminar = document.getElementById('btn-seminar')
        const seminarOne = document.getElementById('seminar-one')
        const seminarTwo = document.getElementById('seminar-two')
        const btnSeminarLeft = document.getElementById('seminar-click-left')
        const btnSeminarRight = document.getElementById('seminar-click-right')
        const btnCloseSeminarOne = document.getElementById('close-modal-seminar-one')
        const btnCloseSeminarTwo = document.getElementById('close-modal-seminar-two')

        const showPopup = () => {
            modalSeminar.classList.add('open', 'overlay')
        }


        const hidePopup = () => {
            modalSeminar.classList.remove('open', 'overlay')
        }

        const showSeminarOne = () => {
            if(seminarOne)  {
                seminarOne.classList.remove('hide')
                seminarTwo.classList.add('hide')
            }
        }

        const showSeminarTwo = () => {
            if(seminarTwo){
                seminarTwo.classList.remove('hide')
                seminarOne.classList.add('hide')
            }
        }

        btnSeminar.addEventListener('click', showPopup)
        btnSeminarLeft.addEventListener('click', showSeminarOne)
        btnSeminarRight.addEventListener('click', showSeminarTwo)
        btnCloseSeminarOne.addEventListener('click', hidePopup)
        btnCloseSeminarTwo.addEventListener('click', hidePopup)
    }, []);

    return (
        <Fragment>
            <div id="btn-seminar">{children}</div>
            <div id="event-seminar" className="modal__seminar ">
                <div id="seminar-one" className="modal__seminar-bg"
                     style={{ backgroundImage: 'url(images/modal-seminar-agenda.jpg)'}}>

                    <div className="modal__seminar-bottom">
                        <button className="modal__seminar-btn-left"
                                style={{ backgroundImage: 'url(./images/modal-seminar-agenda-bg-grey-btn.png)' , marginRight: '30px'}} />
                        <button id="seminar-click-right" className="modal__seminar-btn-right"
                                style={{ backgroundImage: 'url(./images/modal-seminar-speaker-bg-yellow-btn.png)'}} />
                    </div>
                    <div id="close-modal-seminar-one" className="btn-close-modal-seminar"
                         style={{ backgroundImage: 'url(./images/btn-close-slider.png)'}} />
                </div>

                <div id="seminar-two" className="modal__seminar-bg hide"
                     style={{ backgroundImage: 'url(images/modal-seminar-speakers.jpg)'}}>

                    <div className="modal__seminar-bottom">
                        <button id="seminar-click-left" className="modal__seminar-btn-left" data-toggle="true"
                                style={{ backgroundImage: 'url(./images/modal-seminar-agenda-bg-yellow-btn.png)', marginRight: '30px' }} />
                        <button className="modal__seminar-btn-right" data-toggle="false"
                                style={{ backgroundImage: 'url(./images/modal-seminar-speaker-bg-grey-btn.png)'}} />
                    </div>
                    <div id="close-modal-seminar-two" className="btn-close-modal-seminar"
                         style={{ backgroundImage: 'url(./images/btn-close-slider.png)'}} />
                </div>
            </div>
        </Fragment>
    );
}