const VideoJS = ( props ) => {

    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { src, options, onReady, onEnded, isLive } = props;

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

    React.useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, {...defaultOptions, ...options}, function (){
                // console.log("player is ready");
                onReady && onReady(player);
                player.playsinline();
                //playerRef.current.controlBar.progressControl.disable(); // TODO
                this.on('ended', () => { onEnded && onEnded()});
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
            <video ref={videoRef} className="video-js vjs-big-play-centered" playsInline/>
        </div>
    );
}