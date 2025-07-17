import './style.css';

const opcoes = ["INÍCIO", "CATÁLOGO", "SOBRE"];

function OpcoesHeader() {
    return (
        <div>
            <ul className='opcoes'>
                { opcoes.map((opcao) => (
                    <li className='opcao'>
                        {opcao}
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default OpcoesHeader;