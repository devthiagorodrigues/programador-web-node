import logo from '../../img/logo.svg';
import styled from 'styled-components';


const LogoComponent = styled.div`
    display: flex;
    font-size: 30px;

    img {
        margin-right: 10px;
    }
`



function Logo () {
    return (
        <LogoComponent>
            <img src={logo} alt='Alfala books logo'></img>
            <p> <strong>Alfala</strong>Books</p>
      </LogoComponent>
    )
}
export default Logo;