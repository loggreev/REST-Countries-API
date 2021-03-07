import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Header(props) {

    return (
        <header>
            <div id="header-title">Where in the world?</div>
            <div id="theme-switch">
                <FontAwesomeIcon icon={faMoon} />
            Dark Mode
            </div>
        </header>
    );
}

export default Header;