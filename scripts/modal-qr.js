const { useEffect } = React;

const ModalQR = (props) => {
  const { src, documentUrl, show } = props

  const handleDocumentDownload = () => {
    let a = document.createElement('a');
    const url = documentUrl
    a.href = url
    a.download = url.split('/').pop()
    a.target = '_blank';
    a.click();
  }

  const handleOpenModalFaq = () => {
    const modalFaq = document.querySelector('#modal-faq')
    modalFaq && modalFaq.classList.add('modal-common-visible')
  }

  useEffect(() => {
    const closeModalFaq = document.querySelector('#close-modal-faq')
    const modalFaq = document.querySelector('#modal-faq')
    closeModalFaq && closeModalFaq.addEventListener('click', _ => {
      modalFaq.classList.remove('modal-common-visible')
    })

    handleToggleByIssue()

    return () => closeModalFaq.removeEventListener('click', _ => {})
  }, []);

  return (
      <div className={`modal-qr ${show ? 'modal-qr-visible' : ''}`} >
        <div className="qr-container">
          <h3 className="qr-title">Mời Quý Chuyên viên y tế <br/>chọn các tính năng bên dưới</h3>
          <img className="qr-code" src={ src } alt="qr_code"/>
          <div className="qr-action">
            <div className="qr-button document-download"
                 onClick={handleDocumentDownload}/>
            {/*<div className="qr-button direct-google"*/}
            {/*     data-control={ JSON.stringify({*/}
            {/*       render_name: '.sec-iframe',*/}
            {/*       command: 'open',*/}
            {/*       active_class: 'open-iframe',*/}
            {/*       without_ele: null,*/}
            {/*       iframe: true*/}
            {/*     }) } />*/}
            <a className="qr-button direct-google"
               href="https://docs.google.com/forms/d/e/1FAIpQLSfxY5BC6i1srGe0YY1B-ivL7UoJB2ZaMemyf50QfLn7Q8i_5A/viewform"
               target="_blank" />
            <div className="qr-button faq"
                 onClick={handleOpenModalFaq}/>
          </div>
          <p className="qr-notice">
            Nếu không có Gmail, vui lòng nhấn vào đường link:
            <a href="https://bit.ly/CME220320" target="_blank"> https://bit.ly/CME220320</a>
          </p>
        </div>
      </div>
  )
}
