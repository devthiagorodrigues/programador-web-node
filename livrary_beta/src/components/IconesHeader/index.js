import styled from "styled-components";

const Icones = styled.ul `
    display: flex;
    list-style: none;
    gap: 30px;
}
`

const Icone = styled.li `
    width: 10px;


    &:hover {
        cursor: pointer;
    }
`

const icones = ['https://img.icons8.com/?size=30&id=63485&format=png&color=7B5FFF', 'https://img.icons8.com/?size=30&id=98957&format=png&color=7B5FFF']

function IconesHeader() {
    return (
            <Icones>
                { icones.map((icone) => (
                    <Icone>
                        <img src={icone}></img>
                    </Icone>
                )) }
            </Icones>
    )
}

export default IconesHeader;