const TrackRoomTime = () => {
    debugger
    let startTime = moment();
    window.addEventListener('load', () => {
        debugger
        startTime = moment();
    });
    window.addEventListener('beforeunload', async () => {
        const endTime = moment();
        console.log(startTime, endTime);
        debugger
        // Call api
        // await
    });
};

TrackRoomTime();

