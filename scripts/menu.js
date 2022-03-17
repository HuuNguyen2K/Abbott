const { useEffect, useRef } = React;

const Menu = () => {
    const game1Ref = useRef(null)
    const game2Ref = useRef(null)
    const userName = localStorage.getItem('user') ?
        JSON.parse(localStorage.getItem('user')).name : '-Tên khách tham dự-'

    const handleToggleSubMenu = () => {
        const subMenu = document.querySelectorAll('#menu .menu-submenu')

        subMenu.length && subMenu.forEach(ele => {
            ele.previousElementSibling.addEventListener('click', (evt) => {
                const parentElement = evt.target.closest('.menu-item')
                // Close all submenu is opened
                const menuItemHaveVisible = document.querySelectorAll('#menu .submenu-visible')
                menuItemHaveVisible.length && menuItemHaveVisible.forEach(ele => {
                    if (parentElement === ele) return
                    ele.classList.toggle('submenu-visible', false)
                })
                // Force check class exists
                parentElement.classList.toggle('submenu-visible')
            })
        })
    };

    useEffect(() => {
        handleToggleByIssue();
        handleToggleSubMenu();
    }, []);


    return (
       <div>
            <div id="menu-icon" className="menu-icon">
                <img src="./images/menu.png"
                     alt="menu_icon"
                     data-control={ JSON.stringify({
                         render_name: '#menu',
                         command: 'open',
                         active_class: 'menu-visible',
                         without_ele: null
                     }) }
                />
            </div>
            <div id="menu">
            <div data-control={ JSON.stringify({
                    render_name: '#menu',
                    command: 'close',
                    active_class: 'menu-visible',
                    without_ele: null
                }) }
                 className="menu-overlay">
            </div>
            <div className="menu-container">
                <h5 className="menu-greeting">
                    Kính chào Quý Chuyên viên Y tế
                    <span id="user_name" className="d-block">{ userName }</span>
                </h5>
                <ul className="menu-root">
                    <li className="menu-item">
                        <WarningTimeBeforeEvent onEnd={() => { window.location = "./room-4.html" }}>
                            <a href="#" onClick={(e) => e.propertyIsEnumerable()} id="menu-seminar">Chương trình hội thảo</a>
                        </WarningTimeBeforeEvent>
                    </li>
                    <li className="menu-item">
                        <p className="submenu-title">
                            Phòng trải nghiệm
                          <img src="./images/dropdown-icon.png"
                               alt="dropdown_icon" />
                        </p>
                        <ul className="menu-submenu">
                            <li className="menu-item submenu-item">
                                <a href="./immunity.html?welcome=true">Miễn dịch</a>
                            </li>
                            <li className="menu-item submenu-item">
                                <a href="./room-2.html?welcome=true">Dinh Dưỡng Và<br/>Giải Pháp Đột Phá</a>
                            </li>
                            <li className="menu-item submenu-item">
                              <a href="./room-3.html?welcome=true">theo dõi<br/>glucose liên tục</a>
                            </li>
                            <li className="menu-item submenu-item">
                                <WarningTimeBeforeEvent onEnd={() => { window.location = "./room-4.html" }}>
                                    <a href="#" onClick={(e) => e.propertyIsEnumerable()}>Hội Thảo Khoa Học</a>
                                </WarningTimeBeforeEvent>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <p className="submenu-title">
                            Thử thách
                          <img src="./images/dropdown-icon.png"
                               alt="dropdown_icon" />
                        </p>
                        <ul className="menu-submenu">
                            <li className="menu-item submenu-item">
                                <a onClick={() => game1Ref.current.classList.add('open-iframe')}  href="javascript:void(0)">
                                    ổn định đường huyết - tăng cường miễn dịch
                                </a>
                            </li>
                            <li onClick={() => game2Ref.current.classList.add('open-iframe')} className="menu-item submenu-item">
                                <a href="javascript:void(0)">dinh dưỡng tối ưu</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="javascript:void(0)"
                           data-control={ JSON.stringify({
                               render_name: '#global-leaderboard .leaderboard',
                               command: 'open',
                               active_class: 'leaderboard-visible',
                               without_ele: null
                           }) }
                        >
                            bảng xếp hạng
                        </a>
                    </li>
                </ul>

                <div className="menu-logo">
                  <img src="./images/logo-abbott.png"
                       alt="logo_abbott" />
                  <img src="./images/logo-vade.png"
                       alt="logo_vade" />
                </div>
            </div>

            <img className="close-popup"
                 data-control={ JSON.stringify({
                     render_name: '#menu',
                     command: 'close',
                     active_class: 'menu-visible',
                     without_ele: null
                 }) }
                 src="./images/close_icon.png"
                 alt="close_icon" />
            </div>
            <IframeGame ref={game1Ref} src={URL_GAME_1} />
            <IframeGame ref={game2Ref} src={URL_GAME_2} />
       </div>
    );
};

const domContainer = document.querySelector('#global-menu');
ReactDOM.render(<Menu />, domContainer);
