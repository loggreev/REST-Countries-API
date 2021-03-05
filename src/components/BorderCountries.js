import './BorderCountries.css'
import BorderCountriesItem from './BorderCountriesItem'

function BorderCountries(props) {

    return (
        <div className="BorderCountries">
            <h2>Border Countries:</h2>
            <div className="container">
                <BorderCountriesItem />
                <BorderCountriesItem />
                <BorderCountriesItem />
            </div>
        </div>
    );
}

export default BorderCountries;