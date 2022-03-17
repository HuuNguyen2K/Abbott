const trackRoomTime = (room) => {
  let startTime = moment()

  window.addEventListener('beforeunload', async () => {
    const timeScreen = moment().subtract(startTime).seconds()
    if (['1', '2', '3'].includes(room)) {
      const endPoint = '/api/store_topic_1_2_3_duration'
      const user = JSON.parse(localStorage.getItem('user'))
      const payload = {
        access_token: user.access_token,
        user_id: user.id,
        direction: 'middle',
        duration: timeScreen / 60,
      }
      const rs = await fetchData(endPoint, 'POST', payload)
      debugger
      console.log(rs)
    //   try {
    //   } catch (error) {
    //     console.log(error)
    //     debugger
    //   }
    }
  })
}

// const { useEffect, useState } = React

// const TrackRoomTime = (room) => {
//   const [time, setTime] = useState(null)
//   useEffect(() => {
//     const now = moment()
//     setTime(now)

//      window.addEventListener('beforeunload', async (e) => {
//       debugger
//       const timeScreen = moment().subtract(time).seconds()
//       if (['1', '2', '3'].includes(room)) {
//         const endPoint = '/api/store_topic_1_2_3_duration'
//         const user = JSON.parse(localStorage.getItem('user'))
//         const payload = {
//           access_token: user.access_token,
//           user_id: user.id,
//           direction: 'middle',
//           duration: timeScreen / 60,
//         }

//         try {
//           const rs = await fetchData(endPoint, 'POST', payload)
//           console.log(rs)
//         } catch (error) {}
//       }
//     })
//   }, [])

//   return null
// }

// const domContainer = document.querySelector('#track-room-time')
// ReactDOM.render(<TrackRoomTime />, domContainer)
