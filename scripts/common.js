/**
 * Expect object: {
 *                  render_name: '...selected wanna render',
 *                  command: 'open' || 'close',
 *                  active_class: '...class name',
 *                  without_ele: '...tag name' || null
 *                 }
 */
const handleToggleByIssue = () => {
  const elementControl = document.querySelectorAll('[data-control]')

  elementControl.length && elementControl.forEach(ele => {
    ele.addEventListener('click', (evt) => {
      const objControl = JSON.parse(evt.target.dataset['control'])
      if (Object.keys(objControl).length) {
        const renderEle = document.querySelector(objControl.render_name)
        // BLock action user click with assign element
        if (objControl.without_ele && evt.target.localName === objControl.without_ele) return
        // Force check class exists
        renderEle.classList.toggle(objControl.active_class, objControl.command === 'open')
      }
    })
  })
};

window.addEventListener('load', () => {
  handleToggleByIssue()
});
