import BorderCountries from './BorderCountries'
import './CountryInfo.css'
import CountryInfoStat from './CountryInfoStat'

function CountryInfo(props) {

    return (
        <div className="CountryInfo">
            <h1>Country name</h1>
            <CountryInfoStat />
            <BorderCountries />
        </div>
    );
}

export default CountryInfo;