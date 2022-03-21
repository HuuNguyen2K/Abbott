const BackComponent = () => {
    return (
        <a className="back-home" href="./lobby.html">
            <img src="./images/btn-back-home.png" alt="btn-back-home" />
        </a>
    );
};

const domContainer = document.querySelector('#back-home');
ReactDOM.render(<BackComponent/>, domContainer);