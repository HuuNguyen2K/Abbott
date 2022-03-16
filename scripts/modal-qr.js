const { useEffect } = React;

const ModalQR = (props) => {
  const { src } = props

  const handleDocumentDownload = () => {
    // TODO: handle download
    // let a = document.createElement('a');
    // const url = '...'
    // a.href = url
    // a.download = url.split('/').pop()
    // a.target = '_blank';
    // a.click();
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
      <div className="modal-qr modal-qr-visible">
        <div className="qr-container">
          <h3 className="qr-title">Mời Quý Chuyên viên y tế <br/>chọn các tính năng bên dưới</h3>
          <img className="qr-code" src={ src } alt="qr_code"/>
          <div className="qr-action">
            <div className="qr-button document-download"
                 onClick={handleDocumentDownload}/>
            <div className="qr-button direct-google"
                 data-control={ JSON.stringify({
                   render_name: '.sec-iframe',
                   command: 'open',
                   active_class: 'open-iframe',
                   without_ele: null,
                   iframe: true
                 }) } />
            <div className="qr-button faq"
                 onClick={handleOpenModalFaq}/>
          </div>
        </div>
      </div>
  )
}
