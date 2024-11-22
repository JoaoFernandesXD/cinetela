/* styles */
import './button.css'


function Button(props){
    return(
       <button className='ButtonLogin'>{props.name}</button>
    )
}

export default Button;