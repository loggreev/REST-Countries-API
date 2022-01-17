import './BorderCountries.css'

function BorderCountries(props) {
    const borderCountries = props.data;
    try {
        if (borderCountries.length > 0) {
            const borderCountryItems = borderCountries.map(country =>
                <div key={country} className="item element shadow">
                    {country}
                </div>
            );

            return (
                <div className="BorderCountries">
                    <p><b>Border Countries:</b></p>
                    <div className="flex-container">
                        {borderCountryItems}
                    </div>
                </div>
            );
        }
        else
            return null;
    }
    catch {
        return null;
    }
}

export default BorderCountries;