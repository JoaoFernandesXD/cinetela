/* styles import */
import './slide.css';

/* imports Components */
import ButtonQuality from '../ButtonQuality/ButtonQuality';



function Slide(){
    return(

        <div className='container__slide'>
            <div className='container__info'>
                <div className='info_movies'>
                    <ButtonQuality />
                </div>
            </div>
            <img src='https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg'></img>
        </div>

    );
}

export default Slide