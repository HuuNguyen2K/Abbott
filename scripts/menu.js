const { useEffect } = React;

const Menu = () => {
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

    const handleRoom1Click = async (e) => {
        e.preventDefault()
        // const url = '/api/user_click_topic'
        // const user = JSON.parse(localStorage.getItem('user'))
        // const payload = {
        //   access_token: user.access_token,
        //   user_id: user.id,
        //   topic_number: 1,
        // }
        // try {
        //   await fetchData(url, 'POST', payload)
        // } catch (error) {}
        location.href = './immunity.html?welcome=true'
    }

    const handleRoom2Click = async (e) => {
        e.preventDefault()
        // const url = '/api/user_click_topic'
        // const user = JSON.parse(localStorage.getItem('user'))
        // const payload = {
        //   access_token: user.access_token,
        //   user_id: user.id,
        //   topic_number: 2,
        // }
        // try {
        //   await fetchData(url, 'POST', payload)
        // } catch (error) {}
        location.href = './room-2.html?welcome=true'
    }

    const handleRoom3Click = async (e) => {
        e.preventDefault()
        // const url = '/api/user_click_topic'
        // const user = JSON.parse(localStorage.getItem('user'))
        // const payload = {
        //   access_token: user.access_token,
        //   user_id: user.id,
        //   topic_number: 3,
        // }
    
        // try {
        //   await fetchData(url, 'POST', payload)
        // } catch (error) {}
        location.href = './room-3.html?welcome=true'
    }

    const handleRoom4Click = async (e) => {
        // e.preventDefault()
        // const url = '/api/user_click_topic'
        // const user = JSON.parse(localStorage.getItem('user'))
        // const payload = {
        //   access_token: user.access_token,
        //   user_id: user.id,
        //   topic_number: 4,
        // }
        //  try {
        //   await fetchData(url, 'POST', payload)
        // } catch (error) {}
        location.href = './room-4.html'
    }

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
                    {/* <span id="user_name" className="d-block">{ userName }</span> */}
                </h5>
                <ul className="menu-root">
                    <li className="menu-item">
                        {/*<WarningTimeBeforeEvent onEnd={() => { window.location = "./room-4.html" }}>*/}
                        {/*    <a href="#" onClick={(e) => e.propertyIsEnumerable()} id="menu-seminar">Chương trình hội thảo</a>*/}
                        {/*</WarningTimeBeforeEvent> */}
                        <SeminarProgram>
                            <a href="#" id="menu-seminar">Chương trình hội thảo</a>
                        </SeminarProgram>
                    </li>
                    <li className="menu-item">
                        <p className="submenu-title">
                            Phòng trải nghiệm
                          <img src="./images/dropdown-icon.png"
                               alt="dropdown_icon" />
                        </p>
                        <ul className="menu-submenu">
                            <li className="menu-item submenu-item">
                                <a onClick={handleRoom1Click}>Miễn dịch</a>
                            </li>
                            <li className="menu-item submenu-item">
                                <a onClick={handleRoom2Click}>Dinh Dưỡng Và<br/>Giải Pháp Đột Phá</a>
                            </li>
                            <li className="menu-item submenu-item">
                              <a onClick={handleRoom3Click}>theo dõi<br/>glucose liên tục</a>
                            </li>
                            <li className="menu-item submenu-item">
                                <WarningTimeBeforeEvent onEnd={handleRoom4Click}>
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
                                <a href="javascript:void(0)"
                                   data-control={ JSON.stringify({
                                     render_name: '.sec-iframe',
                                     command: 'open',
                                     active_class: 'open-iframe',
                                     without_ele: null,
                                     iframe: true,
                                     source: URL_GAME_1,
                                   }) }>
                                    ổn định đường huyết - tăng cường miễn dịch
                                </a>
                            </li>
                            <li className="menu-item submenu-item">
                                <a href="javascript:void(0)"
                                   data-control={ JSON.stringify({
                                     render_name: '.sec-iframe',
                                     command: 'open',
                                     active_class: 'open-iframe',
                                     without_ele: null,
                                     iframe: true,
                                     source: URL_GAME_2,
                                   }) }>
                                  dinh dưỡng tối ưu
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="menu-logo">
                  <img src="./images/logo-abbott.png"
                       alt="logo_abbott" />
                  <img className="big-size"
                       src="./images/logo-vade.png"
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
       </div>
    );
};

const domContainer = document.querySelector('#global-menu');
ReactDOM.render(<Menu />, domContainer);
