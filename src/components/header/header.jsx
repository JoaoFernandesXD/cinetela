/* styles */
import './header.css';
import { IoLogoAndroid } from "react-icons/io";

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>Pagina Inicial</li>
                    <li>Contato</li>
                    <li>Ajuda</li>
                </ul>
                <div className='button_mobile'>Aplicativo <IoLogoAndroid style={{color:'white', margin:'5px'}}/></div>
            </nav>
        </header>
    )
}

export default Header;