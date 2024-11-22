import './SlideShow.css';

/* imports Components */
import ButtonQuality from '../ButtonQuality/ButtonQuality';


/* imports icons */
import { IoMdStar } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function SlideShow(props){
    return(
            <>
            <div className='container__info'>
                <div className='info_movies'>
                    <ButtonQuality quality={props.quality}/>
                    <p>FILME DESTAQUE</p>
                    <h2>{props.name}</h2>
                    <div className='container__avaliacao'>
                        <div className='container_star'>
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-gray)'}} />
                        </div>
                        <p>{props.nota}</p>
                        <p>{props.categoria} • {props.duracao} • {props.ano}</p>
                    </div>
                    <div className='Container__text_info'>
                        <p>{props.sinopse}</p>
                    </div>
                    <div className='containner__button__slide'>
                        <button className='watch'><FaPlay />Assistir</button>
                        <button className='trailer'>Ver Trailer</button>
                    </div>
                </div>
            </div>
            <img src={props.background}></img>
            </>
    );
}
  
export default SlideShow;