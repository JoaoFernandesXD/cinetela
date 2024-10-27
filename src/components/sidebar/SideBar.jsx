/* import styles */
import './SideBar.css'

/* import components */
import Button from '../button/button';

function Sidebar(){
    return(
        <div className='container__sidebar'>
            <div className='container__logo'>
                <h1>cnt.</h1>
            </div>
            <div className='container__menu'>
                <Button name='Entrar'></Button>

            </div>
        </div>
    )
}

export default Sidebar;