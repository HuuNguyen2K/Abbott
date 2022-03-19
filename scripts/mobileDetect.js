// const handleCheck = setInterval(() => {
//     handleDevice();
// }, 10000);

// const handleDevice = () => {
//     var md = new MobileDetect(window.navigator.userAgent);
//     if (md.mobile()) {
//         if(window.innerWidth < window.innerHeight) {
//             alert('Vui lòng xoay ngang!');
//         }
//     } else clearTimeout(handleCheck);
// };

const handlePreventOrientation = () => {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
        new PreventOrientation({
            text: 'Vui lòng xoay ngang!',
            background: 'white',
            fontSize: '20px'
        }).preventOrientationToAngle(0);
    }
}

window.addEventListener('load', () => {
    // handleDevice();
    handlePreventOrientation();
});

