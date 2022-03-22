const VideoJS = ( props ) => {

    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { src, options, onReady, onEnded, isLive, keep, thumbnail = null } = props;

    const defaultOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        muted: false,
        sources: [{
            src,
            type: 'application/x-mpegURL'
        }]
    };

    const addQueryParam = (key, value) => {
        const url = new URL(window.location.href)
        url.searchParams.set(key, value)
        window.history.pushState({}, '', url.toString())
    }

    const deleteQueryParam = (key) => {
        const url = new URL(window.location.href)
        url.searchParams.delete(key)
        window.history.pushState({}, '', url.toString())
    }

    const getQueryParam = (key) => {
        const url = new URL(window.location.href);
        return url.searchParams.get(key);
    }

    React.useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, {...defaultOptions, ...options}, function (){
                let trackingTimeInterval;
                // console.log("player is ready");

                onReady && onReady(player);
                player.playsinline();

                if (keep) {
                    // Check have currentTime to restore video
                    // const currentTime = getQueryParam('currentTime');
                    const currentTime = localStorage.getItem('currentTime');
                    if (currentTime) playerRef.current.currentTime(currentTime);

                    this.on('play', () => {
                        // Tracking time
                        trackingTimeInterval = setInterval(() => {
                            const currentTime = playerRef.current.currentTime();
                            // addQueryParam('currentTime', currentTime);
                            localStorage.setItem('currentTime', currentTime);
                        }, 1000);
                    });
                    this.on('pause', () => clearInterval(trackingTimeInterval));
                }

                //playerRef.current.controlBar.progressControl.disable(); // TODO
                this.on('ended', () => {
                    clearInterval(trackingTimeInterval);
                    // deleteQueryParam('currentTime');
                    localStorage.removeItem('currentTime');
                    onEnded && onEnded()
                });
            });
        } else {
            // you can update player here [update player through props]
            const video = videoRef.current;
            video.muted = options.muted;
            // const player = playerRef.current;
            // player.autoplay(options.autoplay);
            // player.src(options.sources);
        }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player className='live-btn'>
            {
                isLive && (
                    <div className='live-btn'>
                        Live <span className='circle'></span>
                    </div>
                )
            }
            <video poster={thumbnail} ref={videoRef} className="video-js vjs-big-play-centered" playsInline/>
        </div>
    );
}