const BackComponent = () => {
    return (
        <a className="back-home" href="event/lobby.html?welcome=false">
            <img src="./images/btn-back-home.png" alt="btn-back-home" />
        </a>
    );
};

const domContainer = document.querySelector('#back-home');
ReactDOM.render(<BackComponent/>, domContainer);