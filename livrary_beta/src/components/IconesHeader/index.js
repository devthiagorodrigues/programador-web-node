import './style.css';
import livro from '../../images/livro.png'
import user from '../../images/user.png'

const icones = ['https://img.icons8.com/?size=30&id=63485&format=png&color=7B5FFF', 'https://img.icons8.com/?size=30&id=98957&format=png&color=7B5FFF']

function IconesHeader() {
    return (
        <div>
            <ul className='icones'>
                { icones.map((icone) => (
                    <li className='icone'>
                        <img src={icone}></img>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default IconesHeader;