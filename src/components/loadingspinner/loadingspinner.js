import "./loadingspinner.scss";

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
