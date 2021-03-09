import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    let theme_switch;
    if (!props.darkMode) {
        theme_switch = (
            <div id="theme-switch" onClick={props.callback}>
                <FontAwesomeIcon icon={faMoon} />
                &nbsp;
                Dark Mode
            </div>
        );
    }
    else {
        theme_switch = (
            <div id="theme-switch" onClick={props.callback}>
                <FontAwesomeIcon icon={faSun} />
                &nbsp;
                Light Mode
            </div>
        );
    }

    return (
        <header className="element" id="header">
            <div id="header-title">Where in the world?</div>
            {theme_switch}
        </header>
    );
}

export default Header;