import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

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
                    <img className="w-full object-contain" src="images/sliders/2020-11-30-15-15-30-wb_banner-13.png"/>
                  </div>
                  <div className="max-h-80 overflow-hidden">
                    <img className="w-full object-contain" src="images/sliders/2020-11-30-15-15-41-web_ank_e_cover-02.png"/>
                  </div>
                  <div className="max-h-80 overflow-hidden">
                    <img className="w-full object-contain" src="images/sliders/2020-11-30-15-16-28-wb_banner-11.png"/>
                  </div>
                  <div className="max-h-80 overflow-hidden">
                    <img className="w-full object-contain" src="images/sliders/2020-12-08-19-58-09-ank_e_cover-08.png"/>
                  </div>
                </Slider>
            </div>
        </>
    )
}