import './style.css';
import Logo from '../../img/logo_beta.svg'

function LogoBeta() {
    return (
        <div className='container'>
            <img src={Logo}></img>
            <h1><strong>Beta</strong></h1>
        </div>
    )
}

export default LogoBeta;