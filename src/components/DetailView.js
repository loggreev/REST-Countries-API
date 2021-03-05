import './DetailView.css'
import CountryInfo from './CountryInfo'
import Flag from './Flag';

function DetailView(props) {

    return (
        <div className="DetailView">
            <button className="back-button">
                {/* back arrow */}
            Back
            </button>
            <Flag />
            <CountryInfo />
        </div>
    );
}

export default DetailView;