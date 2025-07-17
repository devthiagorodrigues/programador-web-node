import logo from '../../images/logo_beta.svg'


import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50px;
    }

    h1 {
        color: #7B5FFF;
    }
`



function LogoHeader() {
    return (
            <Container>
                <img src={logo}></img>
                <h1>Beta</h1>
            </Container>
    )
}

export default LogoHeader;