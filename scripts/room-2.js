const btnRoom2Left = document.querySelector('.room-2__btn-left')
const btnRoom2Right = document.querySelector('.room-2__btn-right')
const elEventRoom2PopupLeft = document.getElementById('event-room-2-left')
const elEventRoom2PopupRight = document.getElementById('event-room-2-right')
const eventCloseSlide = document.getElementById('event-close-slide')
const btnDownload = document.getElementById('download')

btnDownload.addEventListener('click', async (e) => {
    // api down tài liệu
    // const endPoint = '/api/topic_2_download_document_count'
    // const user = JSON.parse(localStorage.getItem('user'))
    // const payload = {
    //     access_token: user.access_token,
    //     user_id: user.id
    // }

    // try {
    //     const rs = await fetchData(endPoint, 'POST', payload)
    // } catch (error) {
    // }

    e.preventDefault()
    const aTag = document.createElement('a')
    aTag.download = 'Tài liệu'
    aTag.href = 'https://drive.google.com/u/0/uc?id=1SCx4Y2Qn0K_hXOeoA58FpPMU1oD0Dm11&export=download'
    aTag.click()
    aTag.remove()
})

const showPopup = async (event) => {
    // event.preventDefault();

    // api tDnA
    // const endPoint = '/api/topic_2_tdna_count'
    // const user = JSON.parse(localStorage.getItem('user'))
    // const payload = {
    //     access_token: user.access_token,
    //     user_id: user.id
    // }

    // try {
    //     const rs = await fetchData(endPoint, 'POST', payload)
    // } catch (error) {
    // }


    let showEventPopup = event.target.getAttribute('data-toggle');
    let elEventLibrePopup = document.getElementById(showEventPopup)
    elEventLibrePopup.classList.add('open', 'overlay')
}

const hidePopup = (event) => {
    event.target.classList.remove('open', 'overlay')
}

btnRoom2Left.addEventListener('click', showPopup)

// btnRoom2Right.addEventListener('click', showPopup)

elEventRoom2PopupLeft.addEventListener('click', hidePopup)

// elEventRoom2PopupRight.addEventListener('click', hidePopup)

eventCloseSlide.addEventListener('click', function () {
    elEventRoom2PopupLeft.classList.remove('open', 'overlay')
})

// Slider
const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    spaceBetween: 120,
    // autoplay: {
    //     delay: 2500
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const openIframeGame = () => {
    const element = document.querySelector('.shield')

    element && element.addEventListener('click', async (evt) => {
        const containIframeGame = document.querySelector('.sec-iframe')
        const iframeGame = containIframeGame.querySelector('.iframe-game')

        // BLock action user click without shield element
        if (evt.target.localName === 'span') return
        // const isShow = containIframeGame?.classList.contains('open-iframe')
        // if(!isShow) {
        //   const endpoint = '/api/user_click_game'
        //   const user = JSON.parse(localStorage.getItem('user'))
        //   const payload = {
        //     access_token: user.access_token,
        //     user_id: user.id,
        //     game_number: 1
        //   }
        //   await fetchData(endpoint, 'POST', payload)
        // }

        iframeGame.setAttribute('src', evt.target.dataset['source'])
        containIframeGame?.classList?.toggle('open-iframe')
    })
}

window.addEventListener('load', () => {
    openIframeGame()
});
