import { SiFireship } from "react-icons/si";
import { IoIosCalendar } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

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
                    <div className="divisor__side"></div>
                    <ul className="list_item_icon">
                        <li><SiFireship /><a href="#about">POPULARES</a></li>
                        <li><IoIosCalendar /><a href="#home">RECENTES</a></li>
                        <li><FaStar /><a href="#about">MAIS AVALIADOS</a></li>
                    </ul>
                </nav>
            <div className="container__sociais">
                <div className="social"><FaFacebookF style={{color:'white'}}/></div>
                <div className="social"><FaXTwitter style={{color:'white'}}/></div>
                <div className="social"><FaYoutube style={{color:'white'}}/></div>
            </div>
            </div>
        </aside>
    )
}

export default Sidebar;