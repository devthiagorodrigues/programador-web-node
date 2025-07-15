import './style.css'

const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTES']

function OptionsHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OptionsHeader;