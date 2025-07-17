import './style.css';
import logo from '../../images/logo_beta.svg'

function LogoHeader() {
    return (
        <div className='container'>
            <img src={logo}></img>
            <h1>Beta</h1>

        </div>
    )
}

export default LogoHeader;