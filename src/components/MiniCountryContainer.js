import CountryInfo from './CountryInfo'
import Flag from './Flag';
import './MiniCountryContainer.css'

function MiniCountryContainer(props) {
    return (
        <div className="MiniCountryContainer">
            <Flag />
            <CountryInfo />
        </div>
    );
}

export default MiniCountryContainer;