/* styles import */
import './slide.css';

/* imports Components */
import ButtonQuality from '../ButtonQuality/ButtonQuality';


/* imports icons */
import { IoMdStar } from "react-icons/io";
import { FaPlay } from "react-icons/fa";


function Slide(){
    return(

        <div className='container__slide'>
            <div className='container__info'>
                <div className='info_movies'>
                    <ButtonQuality quality="4K"/>
                    <p>FILME DESTAQUE</p>
                    <h2>The Last Of Us</h2>
                    <div className='container__avaliacao'>
                        <div className='container_star'>
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-red)'}} />
                            <IoMdStar style={{color:'var(--color-gray)'}} />
                        </div>
                        <p>4/5</p>
                        <p>Drama • 1h 35min • 2019</p>
                    </div>
                    <div className='Container__text_info'>
                        <p>Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie...</p>
                    </div>
                    <div className='containner__button__slide'>
                        <button className='watch'><FaPlay />Assistir</button>
                        <button className='trailer'>Ver Trailer</button>
                    </div>
                </div>
            </div>
            <img src='https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg'></img>
        </div>

    );
}

export default Slide