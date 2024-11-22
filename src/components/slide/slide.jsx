/* styles import */
import SlideShow from '../SlideShow/SlideShow';
import './slide.css';


function Slide(){
    return(

        <div className='container__slide'>
           <SlideShow quality="4K" name="The Last Of Us" nota="4/5" categoria="Drama" duracao="1h 35min" ano="2019" sinopse="Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie..." background="https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg" />
        </div>
    );
}

export default Slide