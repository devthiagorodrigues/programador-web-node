import IconesHeader from '../IconesHeader';
import LogoHeader from '../LogoHeader';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const AppHeader = styled.header `
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
`

const AppHeaderContent = styled.div `
    width: 600px;
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;
    margin: 0 auto;
`


function Header() {
    return (
        <AppHeader>
            <AppHeaderContent>
                <LogoHeader />
                <OpcoesHeader />
                <IconesHeader />
            </AppHeaderContent>
        </AppHeader>
    )
}

export default Header;