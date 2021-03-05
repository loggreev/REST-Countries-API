import './Home.css'
import MiniCountryContainer from './MiniCountryContainer'

function Home(props) {
    return (
        <div className="Home">
            <div className="filter-container">
                <div className="search-input">
                    {/* icon */}
                    <input type="text" placeholder="Search for a country..." />
                </div>
                <div className="filter-dropdown">
                    <select name="filter" id="filter">
                        <option value="Country name">Country name</option>
                    </select>
                </div>
                <MiniCountryContainer />
            </div>
        </div>
    );
}

export default Home;