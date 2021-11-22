import Image from 'next/image';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SLIDER_IMAGES from '../src/slider_image';

export default function TopSlider(){
    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
    return (
        <>
            <div className="w-full bg-white border-b">
                <Slider {...settings}>
                  <div className="max-h-80 overflow-hidden">
                    <Image src={SLIDER_IMAGES['slider-1']} className="w-full object-contain" alt=""/>
                  </div>
                  <div className="max-h-80 overflow-hidden">
                  <Image src={SLIDER_IMAGES['slider-2']} className="w-full object-contain" alt=""/>
                  </div>
                  <div className="max-h-80 overflow-hidden">
                  <Image src={SLIDER_IMAGES['slider-3']} className="w-full object-contain" alt=""/>
                  </div>
                  <div className="max-h-80 overflow-hidden">
                  <Image src={SLIDER_IMAGES['slider-4']} className="w-full object-contain" alt=""/>
                  </div>
                </Slider>
            </div>
        </>
    )
}