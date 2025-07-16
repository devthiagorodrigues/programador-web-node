import './style.css';

const opcoes = ['INÍCO', 'CATÁLOGO', 'SOBRE'];

function Navegacao() {
    return (
        <ul className='opcoes'>
            {opcoes.map((opcao)=> (
                <li className='opcao'><p>{opcao}</p></li>
            ))}
        </ul>
    )
}

export default Navegacao;