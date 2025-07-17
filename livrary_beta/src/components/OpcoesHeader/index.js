import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
    list-style: none;
    gap: 32px;
    font-size: 16px;
    align-items: center;
`

const Opcao= styled.li`
    color: #7B5FFF;
    cursor: pointer;

    &:hover {
    border-bottom: 2px solid #7B5FFF;
    color: #5a3fc
}
`

const opcoes = ["INÍCIO", "CATÁLOGO", "SOBRE"];

function OpcoesHeader() {
    return (
        <div>
            <Opcoes>
                {opcoes.map((opcao) => (
                    <Opcao>
                        {opcao}
                    </Opcao>
                ))}
            </Opcoes>
        </div>
    )
}

export default OpcoesHeader;