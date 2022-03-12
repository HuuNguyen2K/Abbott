const { useEffect } = React;

const ModalQR = (props) => {
  const { src } = props

  useEffect(() => {
  }, []);

  return (
      <div className="modal-qr">
        <div className="qr-container">
          <h3 className="qr-title">Bài lượng giá CME và khỏa sát ý kiến</h3>
          <p className="qr-desc">Mời Quý Chuyên viên y tế quét mã QR<br/>hoặc bấm vào ô bài lượng giá CME ở khung chat bên phải</p>
          <img className="qr-code" src={ src } alt="qr_code"/>
          <div className="direct-google"
               data-control={ JSON.stringify({
                 render_name: '.sec-iframe',
                 command: 'open',
                 active_class: 'open-iframe',
                 without_ele: null
               }) }>
            Vui lòng bấm vào đây để làm <br/>
            bài lượng giá CME và <br/>
            đóng góp ý kiến về hội thảo
          </div>
        </div>

        <img className="close-popup"
             data-control={ JSON.stringify({
               render_name: '.modal-qr',
               command: 'close',
               active_class: 'modal-qr-visible',
               without_ele: null
             }) }
             src="./images/close_icon.png"
             alt="close_icon"/>
      </div>
  )
}
