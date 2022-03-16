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

  useEffect(() => {
    handleToggleByIssue()
  }, []);

  return (
      <div className="modal-qr">
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
                   without_ele: null
                 }) } />
            <div className="qr-button faq"/>
          </div>
        </div>
      </div>
  )
}
