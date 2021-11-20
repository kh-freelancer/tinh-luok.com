import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RSlider from 'react-slick'
import PRODUCT_IMAGES from '../pages/product_images'

export default function RightSlider(){
    var settings = {
        dots: false,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
    return (
        <>
            <RSlider {...settings}>
                <div className="cursor-pointer p-1 justify-center mb-1 shadow-sm hover:shadow-xl">
                <Image src={PRODUCT_IMAGES['pro-21']} alt=""/>
                <div className="py-1 px-2 font-sans text-center">
                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                    <span className="flex justify-between items-center my-1 mx-3">
                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                    <del className="text-sm ml-2">$5.00</del>
                    </span>
                </div>
                </div>
                <div className="cursor-pointer p-1 justify-center mb-2 shadow-sm hover:shadow-md">
                <Image src={PRODUCT_IMAGES['pro-20']} alt=""/>
                <div className="py-1 px-2 font-sans text-center">
                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                    <span className="flex justify-between items-center my-1 mx-3">
                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                    <del className="text-sm ml-2">$5.00</del>
                    </span>
                </div>
                </div>
                <div className="cursor-pointer p-1 justify-center mb-1 shadow-sm hover:shadow-xl">
                <Image src={PRODUCT_IMAGES['pro-20']} alt=""/>
                <div className="py-1 px-2 font-sans text-center">
                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                    <span className="flex justify-between items-center my-1 mx-3">
                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                    <del className="text-sm ml-2">$5.00</del>
                    </span>
                </div>
                </div>
                <div className="cursor-pointer p-1 justify-center mb-1 shadow-sm hover:shadow-xl">
                <Image src={PRODUCT_IMAGES['pro-18']} alt=""/>
                <div className="py-1 px-2 font-sans text-center">
                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                    <span className="flex justify-between items-center my-1 mx-3">
                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                    <del className="text-sm ml-2">$5.00</del>
                    </span>
                </div>
                </div>
                <div className="cursor-pointer p-1 justify-center mb-1 shadow-sm hover:shadow-xl">
                <Image src={PRODUCT_IMAGES['pro-17']} alt=""/>
                <div className="py-1 px-2 font-sans text-center">
                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                    <span className="flex justify-between items-center my-1 mx-3">
                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                    <del className="text-sm ml-2">$5.00</del>
                    </span>
                </div>
                </div>
                <div className="relative cursor-pointer p-1 justify-center mb-1 shadow-sm hover:shadow-xl">
                <Image src={PRODUCT_IMAGES['pro-16']} alt=""/>
                <div className="py-1 px-2 font-sans text-center">
                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                    <span className="flex justify-between items-center my-1 mx-3">
                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                    <del className="text-sm ml-2">$5.00</del>
                    </span>
                </div>
                </div>
            </RSlider>
        </>
    )
}