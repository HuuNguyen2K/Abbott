const handleCheck = setInterval(() => {
    handleDevice();
}, 10000);

const handleDevice = () => {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
        if(window.innerWidth < window.innerHeight) {
            alert('Vui lòng xoay ngang!');
        }
    } else clearTimeout(handleCheck);
};

window.addEventListener('load', () => {
    handleDevice();
});