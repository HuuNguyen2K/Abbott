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

        if (objControl.iframe) { managementSourceIframe(objControl, renderEle) }
        // Force check class exists
        renderEle.classList.toggle(objControl.active_class, objControl.command === 'open')
      }
    })
  })
};

/**
 * Control toggle source game of iframe
 *
 * @param {Object} objControl
 * @param {Node} renderEle
 */
const managementSourceIframe = (objControl, renderEle) => {
  const iframeGame = renderEle.querySelector('.iframe-game')
  // Stop game from playing
  if (objControl.command === 'close') {
    stopSourceIframe(iframeGame)
    return
  }

  iframeGame.setAttribute('src', objControl.source)
}

/**
 * Stop iframe game || google form
 *
 * @param {Node} iframe
 */
const stopSourceIframe = (iframe) => {
  const url = iframe.getAttribute('src');
  const urlCache = sessionStorage.getItem('url_game')
  // Save url to storage
  sessionStorage.setItem('url_game', url)
  iframe.setAttribute('src', '');
  // Restore url game for iframe
  // Use 'setTimeout - 50ms' because wanna completely remove the dom inside the iframe
  setTimeout(() => {
    iframe.setAttribute('src', urlCache);
    sessionStorage.removeItem('url_game')
  }, 50)
}
