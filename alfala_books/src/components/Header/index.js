import './style.css'
import LogoHeader from '../LogoHeader';
import OptionsHeader from '../OptionsHeader';
import IconesHeader from '../IconesHeader';

function Header() {
    return (
        <header className="App-header">
            <LogoHeader />
            <OptionsHeader />
            <IconesHeader />
        </header>
    )
}

export default Header;