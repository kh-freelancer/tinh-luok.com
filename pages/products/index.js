import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import ALIBABA_IMAGES from '../../src/alibaba_images'
import USER_IMAGES from '../../src/user_image'

export default function Product(){
    return (
        <>
            <Head>
                <title>Product</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="mt-3 container max-w-screen-xl m-auto">
                <div className="flex gap-4 mb-4">
                    <div className="w-1/5 hidden md:block">
                        <div className="px-5 pb-3 rounded-lg bg-white shadow-md">
                            <div className="flex justify-start items-center gap-2 py-3 mb-3 border-b-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                                <h2 className="text-lg">ស្វែងរក</h2>
                            </div>
                            <ul className="px-2 mb-5">
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>ទាំងអស់</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>ឡាន</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>ម៉ូតូ</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>កង់</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>កុំព្យូទ័រ</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>គ្រឿងសង្ហារឹម</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>គ្រឿងបរិក្ខា</label>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex justify-start items-center gap-2 py-3 mb-3 border-t-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <h2 className="text-lg">ប្រភេទផលិតផល</h2>
                            </div>
                            <ul className="mx-2 mb-5">
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>ទាំងអស់</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>Honda</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>Toyota</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>Tesla</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>Ford</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="radio" name="filter_check" className="w-4 h-4"/>
                                        <label>BMW</label>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex justify-start items-center gap-2 py-3 mb-3 border-t-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h2 className="text-lg">ទីតាំង</h2>
                            </div>
                            <ul className="mx-2 mb-5">
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="checkbox" name="filter_check"/>
                                        <label>Phnom Penh</label>
                                    </div>
                                </li>
                                <li className="text-base">
                                    <div className="flex justify-start items-center gap-2">
                                        <input type="checkbox" name="filter_check"/>
                                        <label>Kandal</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-4/5 pt-3">
                        <div className="mx-4 md:mx-0 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["1-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["2-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["3-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["4-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["5-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["6-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["7-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["8-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["9-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["10-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["11-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["12-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["13-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["14-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["15-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                                <div className="saleOff">
                                <span className="font-mono inline-block">
                                    <label>ថ្មី</label>
                                </span>
                                </div>
                                <div className="img-hover-zoom p-2 overflow-hidden">
                                <Image src={ALIBABA_IMAGES["2-web"]} alt=""/>
                                </div>
                                <div className="py-2 font-sans text-center">
                                <div className="px-3">
                                    <span className="web-title text-sm">ស្រោមដៃលេងហ្គេម (Gaming Gloves.</span>
                                    <span className="flex justify-between items-center my-1 mx-3">
                                    <span className="text-red-500 font-medium text-sm">$2.50</span>
                                    <del className="text-sm ml-2">$5.00</del>
                                    </span>
                                </div>
                                <div className="px-1  items-center mt-3 border-t border-gray-200 pt-2">
                                    <div className="px-3 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="rounded-full w-6 h-6 items-center overflow-hidden">
                                        <Image src={USER_IMAGES['sron-chhitly']} className="w-6 h-6 rounded-full object-cover" alt=""/>
                                        </div>
                                        <span className="px-1 text-xs text-gray-500">Sron Chhitly</span>
                                    </div>
                                    <div className="flex text-gray-500 text-xs items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="item-center h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <label className="ml-1">9.5K</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}