const { useEffect } = React;

const Menu = () => {

    const handleToggleMenu = () => {
        const _menu = document.querySelector('#menu')
        const element = document.querySelectorAll('[data-control-menu]')

        element && element.forEach(ele => {
            ele.addEventListener('click', (evt) => {
                const command = evt.target.dataset['controlMenu']
                // Force check class exists
                _menu.classList.toggle('menu-visible', command === 'open')
            })
        })
    };

    const handleToggleSubMenu = () => {
        const subMenu = document.querySelectorAll('#menu .menu-submenu')

        subMenu && subMenu.forEach(ele => {
            ele.previousElementSibling.addEventListener('click', (evt) => {
                const parentElement = evt.target.closest('.menu-item')
                // Close all submenu is opened
                const menuItemHaveVisible = document.querySelectorAll('#menu .submenu-visible')
                menuItemHaveVisible && menuItemHaveVisible.forEach(ele => {
                    if (parentElement === ele) return
                    ele.classList.toggle('submenu-visible', false)
                })
                // Force check class exists
                parentElement.classList.toggle('submenu-visible')
            })
        })
    };

    useEffect(() => {
        handleToggleMenu();
        handleToggleSubMenu();
    }, []);

    return (
       <div>
            <div id="menu-icon" className="menu-icon">
                <img src="./images/menu.png"
                     alt="menu_icon"
                     data-control-menu="open"
                />
            </div>
            <img src="./images/background-menu.png" alt="" />
            <div id="menu">
            <div data-control-menu="close" className="menu-overlay"></div>
            <div className="menu-container">
                <h5 className="menu-greeting">
                    Kính chào Quý Chuyên viên Y tế
                    <span id="user_name" className="d-block">-Tên khách tham dự-</span>
                </h5>
                <ul className="menu-root">
                    <li className="menu-item">
                        <a href="javascript:void(0)">Hội thảo</a>
                    </li>
                    <li className="menu-item">
                        <p className="submenu-title">
                            Phòng trải ngiệm
                            <i className="icon"></i>
                        </p>
                        <ul className="menu-submenu">
                            <li className="menu-item submenu-item">
                                <a href="javascript:void(0)">Trải ngiệm 2</a>
                            </li>
                            <li className="menu-item submenu-item">
                                <a href="javascript:void(0)">Trải ngiệm 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <p className="submenu-title">
                            Thử thách
                            <i className="icon"></i>
                        </p>
                        <ul className="menu-submenu">
                            <li className="menu-item submenu-item">
                                <a href="javascript:void(0)">Thử thách 2</a>
                            </li>
                            <li className="menu-item submenu-item">
                                <a href="javascript:void(0)">Thử thách 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="javascript:void(0)">bảng xếp hạng</a>
                    </li>
                </ul>

                <div className="menu-logo">
                    <img src="./images/logo-abbott.png"
                         alt="logo_abbott" />
                        <img src="./images/logo-vade.png"
                             alt="logo_vade" />
                </div>
            </div>

            <img className="close-menu"
                 data-control-menu="close"
                 src="./images/close_icon.png"
                 alt="close_icon" />
            </div>
       </div>
    );
};

const domContainer = document.querySelector('#global-menu');
ReactDOM.render(<Menu />, domContainer);
