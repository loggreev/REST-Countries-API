import CountryInfoStat from './CountryInfoStat';
import Flag from './Flag';
import './MiniCountryContainer.css'

function MiniCountryContainer(props) {
    const countryData = props.countryData;
    return (
        <div className="MiniCountryContainer element">
            <Flag flag={countryData.flag} />
            <div className="bottom">
                <h1>{countryData.countryname}</h1>
                <CountryInfoStat tag={"Population"} data={countryData.stats["Population"]} />
                <CountryInfoStat tag={"Region"} data={countryData.stats["Region"]} />
                <CountryInfoStat tag={"Capital"} data={countryData.stats["Capital"]} />
            </div>
        </div>
    );
}

export default MiniCountryContainer;