import './DetailView.css'
import CountryInfo from './CountryInfo'
import Flag from './Flag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function DetailView(props) {

    return (
        <div className="DetailView">
            <button className="back-button">
                <FontAwesomeIcon icon={faArrowLeft} />
            Back
            </button>
            <Flag />
            <CountryInfo />
        </div>
    );
}

export default DetailView;