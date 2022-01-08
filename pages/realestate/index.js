import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'
import PRODUCT_IMAGES from '../../src/product_images'
import MENU_IMAGES from '../../src/menu_categoy'

export default function Realesate(){
    return (
        <>
            <Head>
                <title>Realesate</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="mb-16 container max-w-screen-xl m-auto">
                <div className="flex gap-4 my-5 justify-end items-center">
                    <div className="w-5/6">
                        <div className="flex justify-between items-center search-wrapper rounded-full border-2 bg-white border-yellow-500 h-12">
                            <div className="w-24 h-8 border-r-2">
                                <select className="ml-3 w-20 h-8 cursor-pointer focus:outline-none">
                                    <option>ទិញ</option>
                                    <option>លក់</option>
                                    <option>ជួល</option>
                                </select>
                            </div>
                            <div className="pl-3 flex justify-between items-center w-96 h-8 border-r-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                <input type="text" className="w-full h-8 px-3 text-base focus:outline-none" placeholder="បញ្ចូលទីតាំង, គ្រោង,​ ឬឈ្មោះភ្នាក់ងារ"/>
                            </div>
                            <div className="pl-3 flex justify-between items-center w-52 h-8 border-r-2">
                                <div className="leading-5 text-sm">
                                    <div>ប្រភេទអចលទ្រព្យ</div>
                                    <div>វិឡា​ភ្លោះ +3</div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="pl-3 flex justify-between items-center w-36 h-8 border-r-2">
                                <div className="leading-5 text-sm">
                                    <div>តម្លៃ</div>
                                    <div>មិនកំណត់</div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="pl-3 flex justify-between items-center w-36 h-8">
                                <div className="leading-5 text-sm">
                                    <div>បន្ទប់គេង</div>
                                    <div>មិនកំណត់</div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="h-8">
                                <div className="flex justify-center items-center -mt-1 w-10 h-10 rounded-full bg-primary text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/6">
                        <div className="flex justify-between items-center pl-3 border-2 h-12 rounded-full border-yellow-500 bg-white">
                            <div>Filters</div>
                            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-primary hover:bg-secondaray p-2 cursor-pointer text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mb-5">
                    <div className="w-1/5">
                        <div className="shadow-md">
                            <ul className="py-3 text-sm">
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span className="ml-2">Popular Categories</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <span className="ml-2">House</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="ml-2">Lands</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="ml-2">Apartment & Condo</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="ml-2">Commercial Properties</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="ml-2">Resort</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="ml-2">Borys</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="ml-2">Room</span>
                                </li>
                                <li className="flex py-1 px-2 justify-start items-center cursor-pointer hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="ml-2">News</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-4/5 bg-white">
                        <div className="grid grid-cols-4 justify-between">
                            <div className="border text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-house']}/>
                                </div>
                                <div>House</div>
                            </div>
                            <div className="border  text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-car']}/>
                                </div>
                                <div>Lands</div>
                            </div>
                            <div className="border text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-moto']}/>
                                </div>
                                <div>Apartment & Condo</div>
                            </div>
                            <div className="border text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-handset']}/>
                                </div>
                                <div>Commercial Properties</div>
                            </div>
                            <div className="border text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-house']}/>
                                </div>
                                <div>Resort</div>
                            </div>
                            <div className="border text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-car']}/>
                                </div>
                                <div>Borys</div>
                            </div>
                            <div className="border text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-phone']}/>
                                </div>
                                <div>Room</div>
                            </div>
                            <div className="border text-center">
                                <div>
                                    <Image className="h-12" src={MENU_IMAGES['menu-phone']}/>
                                </div>
                                <div>News</div>
                            </div>
                        </div>
                        <div className="m-2 grid grid-cols-2 gap-2">
                            <div className="h-24 overflow-hidden">
                                <img src="https://rentkh.com/uploads/advertise/202106/397cb191961dd00f778bf18d3ba1c7b4.jpg"/>
                            </div>
                            <div className="h-24 overflow-hidden">
                                <img src="https://rentkh.com/uploads/advertise/202106/aa1a084ab3aee662cbe88b4ed358e8ab.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="shadow-md bg-white mb-2">
                        <div className="w-full h-72 img-hover-zoom overflow-hidden cursor-pointer">
                            <img src="https://rentkh.com/thumbnail/medium/uploads/202112/695733c516fa0518fbe4a82c01455631.jpeg"/>
                        </div>
                        <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>19</span>
                            </div>
                            <div className="flex">
                                <span>2 Beds</span>
                            </div>
                            <div className="flex">
                                <span>3 Baths</span>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <span>096 36 999 02</span>
                            </div>
                        </div>
                        <div className="p-5 border-b">
                            <h4 className="truncate">វីឡានៅបុរីប៉េងហួតដឹស្តាជូមីរ៉ាស់</h4>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <span className="text-red-500 font-semibold">$57000</span>
                            <a href="#" className="bg-blue text-white px-5 py-2">View Details</a>
                        </div>
                    </div>
                    <div className="shadow-md bg-white mb-2">
                        <div className="w-full h-72 img-hover-zoom overflow-hidden cursor-pointer">
                            <img src="	https://rentkh.com/thumbnail/medium/uploads/202112/e8045718952f6bde04998ac8760a7783.jpeg"/>
                        </div>
                        <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>19</span>
                            </div>
                            <div className="flex">
                                <span>2 Beds</span>
                            </div>
                            <div className="flex">
                                <span>3 Baths</span>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <span>096 36 999 02</span>
                            </div>
                        </div>
                        <div className="p-5 border-b">
                            <h4 className="truncate">វីឡាភ្លោះនៅបុរីប៉េងហួតដឹស្តាជូមីរ៉ាស់</h4>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <span className="text-red-500 font-semibold">$57000</span>
                            <a href="#" className="bg-blue text-white px-5 py-2">View Details</a>
                        </div>
                    </div>
                    <div className="shadow-md bg-white mb-2">
                        <div className="w-full h-72 img-hover-zoom overflow-hidden cursor-pointer">
                            <img src="https://rentkh.com/thumbnail/medium/uploads/202111/9291d4f739cdc033614387dbe34a2250.jpeg"/>
                        </div>
                        <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>19</span>
                            </div>
                            <div className="flex">
                                <span>2 Beds</span>
                            </div>
                            <div className="flex">
                                <span>3 Baths</span>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <span>096 36 999 02</span>
                            </div>
                        </div>
                        <div className="p-5 border-b">
                            <h4 className="truncate">OF-102-OFFICE SPACE BUILDING, INSPECT TODAY</h4>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <span className="text-red-500 font-semibold">$57000</span>
                            <a href="#" className="bg-blue text-white px-5 py-2">View Details</a>
                        </div>
                    </div>
                    <div className="shadow-md bg-white mb-2">
                        <div className="w-full h-72 img-hover-zoom overflow-hidden cursor-pointer">
                            <img src="https://rentkh.com/thumbnail/medium/uploads/202112/d8ac01dd6154cda8a2e62c67452ddc77.jpeg"/>
                        </div>
                        <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>19</span>
                            </div>
                            <div className="flex">
                                <span>2 Beds</span>
                            </div>
                            <div className="flex">
                                <span>3 Baths</span>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <span>096 36 999 02</span>
                            </div>
                        </div>
                        <div className="p-5 border-b">
                            <h4 className="truncate">វីឡាកូនកាត់នៅបុរីប៉េងហួតដឹស្តាជូមីរ៉ាស់</h4>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <span className="text-red-500 font-semibold">$57000</span>
                            <a href="#" className="bg-blue text-white px-5 py-2">View Details</a>
                        </div>
                    </div>
                    <div className="shadow-md bg-white mb-2">
                        <div className="w-full h-72 img-hover-zoom overflow-hidden cursor-pointer">
                            <img src="https://rentkh.com/thumbnail/medium/uploads/202111/427ddf5b997cf854edeb2177aa701df4.jpeg"/>
                        </div>
                        <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>19</span>
                            </div>
                            <div className="flex">
                                <span>2 Beds</span>
                            </div>
                            <div className="flex">
                                <span>3 Baths</span>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <span>096 36 999 02</span>
                            </div>
                        </div>
                        <div className="p-5 border-b">
                            <h4 className="truncate">OF-159-NEWLY OFFICE SPACE IN CHROY CHANGVAR</h4>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <span className="text-red-500 font-semibold">$57000</span>
                            <a href="#" className="bg-blue text-white px-5 py-2">View Details</a>
                        </div>
                    </div>
                    <div className="shadow-md bg-white mb-2">
                        <div className="w-full h-72 img-hover-zoom overflow-hidden cursor-pointer">
                            <img src="https://rentkh.com/thumbnail/large/uploads/202112/f19056c3f7aa0ee54f1018c96ab2e3c3.jpeg"/>
                        </div>
                        <div className="p-3 flex justify-between items-center border-b">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>19</span>
                            </div>
                            <div className="flex">
                                <span>2 Beds</span>
                            </div>
                            <div className="flex">
                                <span>3 Baths</span>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <span>096 36 999 02</span>
                            </div>
                        </div>
                        <div className="p-5 border-b">
                            <p>Link Villa LC2 at Borey PH6A</p>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <span className="text-red-500 font-semibold">$57000</span>
                            <a href="#" className="bg-blue text-white px-5 py-2">View Details</a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <a href="#" className="m-auto px-5 py-2 border-2  border-yellow-500 font-bold rounded">Load More</a>
                </div>
            </div>
        </>
    );
}