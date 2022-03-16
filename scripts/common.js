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
        // Stop game from playing
        objControl.iframe && stopIframeVideo(renderEle.querySelector('.iframe-game'))
        // Force check class exists
        renderEle.classList.toggle(objControl.active_class, objControl.command === 'open')
      }
    })
  })
};

/**
 * Stop iframe video
 *
 * @param {Node} iframe
 */
const stopIframeVideo = (iframe) => {
  const url = iframe.getAttribute('src');
  const urlCache = sessionStorage.getItem('url_game')
  // Save url to storage
  sessionStorage.setItem('url_game', url)
  iframe.setAttribute('src', '');
  // Restore url game for iframe
  // Use 'abc' because wanna completely remove the dom inside the iframe
  setTimeout(() => {
    iframe.setAttribute('src', urlCache);
    sessionStorage.removeItem('url_game')
  }, 50)
}
