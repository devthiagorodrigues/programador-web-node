import './style.css'

import IconesHeader from '../IconesHeader';
import LogoHeader from '../LogoHeader';
import OpcoesHeader from '../OpcoesHeader';

function Header() {
    return (
        <header className="App-header">
            <div className='App-header-content'>
                <LogoHeader />
                <OpcoesHeader />
                <IconesHeader />
            </div>
        </header>
    )
}

export default Header;