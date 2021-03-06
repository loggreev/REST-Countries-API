import './Home.css'
import MiniCountryContainer from './MiniCountryContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

function Home(props) {
    const [region, setRegion] = useState("All");
    const [displayDropdown, setDisplayDropdown] = useState(false);

    const dropdown_items = (
        <div className="dropdown-items element">
            {regions.map((r) =>
                <div key={r} className="option" onClick={() => {
                    setRegion(r);
                    props.callRegion(r);
                }}>{r}</div>
            )}
        </div>
    );

    function toggleDropdown(event) {
        if (!displayDropdown)
            setDisplayDropdown(true);
        else {
            // TODO: Implement filtering
            setDisplayDropdown(false);
        }
    }

    // display countriesData based on whether or not it has loaded
    const countries = props.countriesData ?
        props.countriesData.map((country) => (
            <MiniCountryContainer key={country.countryname} countryData={country} onClick={() => { props.viewCountryDetails(country) }} />
        ))
        :
        <div>Loading...</div>;

    const dropdown_text = (region === "All") ? "Filter by Region" : "Region: " + region;

    return (
        <div className="Home">
            <div className="search-filter-container">
                <div className="search-input element shadow">
                    <FontAwesomeIcon icon={faSearch} onClick={() => {
                        props.callName(document.getElementById('search').value);
                    }} />
                    <input type="text" id="search" placeholder="Search for a country..." />
                </div>
                <div className="filter-dropdown element shadow" onClick={(e) => {
                    // e.stopPropagation();
                    toggleDropdown(e);
                }}>
                    <div className="filter-dropdown-text">
                        {dropdown_text}
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} />
                    {displayDropdown && dropdown_items}
                </div>
            </div>
            <div className="countries-container">
                {countries}
            </div>
        </div>
    );
}

export default Home;