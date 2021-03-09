import './DetailView.css'
import BorderCountries from './BorderCountries'
import CountryInfoStat from './CountryInfoStat'
import Flag from './Flag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function DetailView(props) {
    const countryData = props.countryData;
    let stats = [];
    for (const key in countryData.stats) {
        stats.push(
            <CountryInfoStat key={key} tag={key} data={countryData.stats[key]} />
        );
        if (key === 'Capital') {
            stats.push(
                <p key="blankspace" className="blankspace">&nbsp;</p>
            )
        }
    }

    return (
        <div className="DetailView">
            <div className="element back-button shadow" onClick={props.callback}>
                <FontAwesomeIcon icon={faArrowLeft} />
                &nbsp;
            Back
            </div>
            <div className="country-info">
                <Flag flag={countryData.flag} />
                <div className="country-stats">
                    <h1>{countryData.countryname}</h1>
                    <div className="secondary-stats">
                        {stats}
                    </div>
                    <p>&nbsp;</p>
                    <BorderCountries data={countryData.bordercountries} />
                </div>
            </div>
        </div>
    );
}

export default DetailView;