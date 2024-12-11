/* styles import */
import 'swiper/css';
import './slide.css';

import SlideShow from '../SlideShow/SlideShow';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Scrollbar, A11y } from 'swiper/modules';
function Slide() {
    return (
        <div className="container__slide">
            <Swiper
                spaceBetween={50}       
                slidesPerView={1}       
                loop={true}             
                autoplay={{
                    delay: 3000,         
                    disableOnInteraction: false, 
                }}
                modules={[Autoplay, Navigation]} 
            >
                <SwiperSlide>
                    <SlideShow quality="4K" name="The Last Of Us" nota="4/5" categoria="Drama" duracao="1h 35min" ano="2019" sinopse="Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie..." background="https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideShow quality="4K" name="Venom: A Última Rodada" nota="4/5" categoria="Drama" duracao="1h 35min" ano="2019" sinopse="Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie..." background="https://image.tmdb.org/t/p/original/caT5GXzR197UIW06f5wmZr3kC3Y.jpg" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Slide;
