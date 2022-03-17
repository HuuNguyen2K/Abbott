const trackRoomTime = (room) => {
    debugger
    let startTime = moment();
    window.addEventListener('load', () => {
        debugger
        startTime = moment();
    });
    window.addEventListener('beforeunload', async () => {
        const endTime = moment();
        console.log(startTime, endTime, room);
        debugger
        // Call api
        // await
    });
};

