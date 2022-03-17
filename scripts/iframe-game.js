const { useEffect,  forwardRef } = React;

const IframeGame = forwardRef((props, ref) => {
  const { src } = props

  useEffect(() => {
    handleToggleByIssue()
  }, []);

  return (
      <div ref={ref} className="sec-iframe">
        <div data-control={ JSON.stringify({
                render_name: '.sec-iframe',
                command: 'close',
                active_class: 'open-iframe',
                without_ele: null
             }) }
             className="iframe-overlay">
        </div>

        <iframe className="iframe-game" src={ src }></iframe>

        <img className="close-popup"
             data-control={ JSON.stringify({
               render_name: '.sec-iframe',
               command: 'close',
               active_class: 'open-iframe',
               without_ele: null
             }) }
             src="./images/close_icon.png"
             alt="close_icon"/>
      </div>
  );
});
