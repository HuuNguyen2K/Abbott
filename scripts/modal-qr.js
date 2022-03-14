const { useEffect } = React;

const ModalQR = (props) => {
  const { src } = props

  useEffect(() => {
  }, []);

  return (
      <div className="modal-qr modal-qr-visible">
        <div className="qr-container">
          <h3 className="qr-title">Bài lượng giá CME và khỏa sát ý kiến</h3>
          <p className="qr-desc">Mời Quý Chuyên viên y tế quét mã QR<br/>hoặc bấm vào ô bài lượng giá CME bên dưới.</p>
          <img className="qr-code" src={ src } alt="qr_code"/>
          <div className="direct-google"
               data-control={ JSON.stringify({
                 render_name: '.sec-iframe',
                 command: 'open',
                 active_class: 'open-iframe',
                 without_ele: null
               }) } />
        </div>
      </div>
  )
}
