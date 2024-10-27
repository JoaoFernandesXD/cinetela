
/* import styles */
import './SideBar.css'

/* import components */
import Button from '../button/button';

function Sidebar(){
    return(
        <aside className='container__sidebar'>
            <div className='container__logo'>
                <h1>cnt.</h1>
            </div>
            <div className='container__menu'>
                <div className='container__login'>
                    <Button name='Entrar'></Button>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">FILMES</a></li>
                        <li><a href="#about">SERIES</a></li>
                    </ul>
                    <ul>
                        <li><a href="#home">RECENTES</a></li>
                        <li><a href="#about">POPULARES</a></li>
                        <li><a href="#about">MAIS AVALIADOS</a></li>
                    </ul>
                </nav>

            </div>
        </aside>
    )
}

export default Sidebar;