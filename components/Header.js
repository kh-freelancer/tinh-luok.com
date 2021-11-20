import Link from 'next/link'
import Image from 'next/image'
import langLogoKh from '../public/images/brand/flat-khmer-01.png'
import siteLogo from '../public/images/brand/tinh-luok-logo.png'

export default function Header() {
    return (
        <header className="bg-white">
            <div className="border-b bg-gray-50">
                <div className="container max-w-screen-xl m-auto">
                    <div className="flex">
                        <div className="w-1/2 md:w-4/5">
                        
                        </div>
                        <div className="w-1/2 md:w-1/5">
                            <ul className="flex justify-end items-center text-sm" >
                                <li className="px-2 py-1 border-l cursor-pointer hover:text-red-500" >
                                    <a className="flex align-center justify-end" >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor" >
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                                        </svg> 
                                        <span className="px-1" >ចូល </span> 
                                    </a> 
                                </li>
                                <li className="px-2 py-1 border-l cursor-pointer hover:text-red-500" >
                                    <a className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            className="h-4 w-4" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor">
                                            <path strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="px-1">ជំនួយ</span>
                                    </a> 
                                </li>
                                <li className="px-2 py-1 border-l cursor-pointer hover:text-red-500" >
                                    <a className="flex items-center">
                                        <div className="rounded-full w-4 h-4 items-center overflow-hidden" >
                                            <Image src={langLogoKh} alt="Khmer Flage" width={16} height={16}/>
                                        </div>
                                        <span className="px-1">ភាសាខ្មែរ</span>
                                    </a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 border-b bg-white">
                <div className="container max-w-screen-xl m-auto">
                    <div className="flex items-center">
                        <div className="w-1/5">
                            <Link href="/" passHref>
                                <Image src={siteLogo} alt="Logo" width={80} height={80}/>
                            </Link>
                        </div>
                        <div className="w-4/5">
                            <div className="flex">
                                <div className="w-3/4">
                                    <div className="flex justify-between items-center search-wrapper rounded-full border-2 border-yellow-500 h-10">
                                        <div className="w-36 pl-2 h-8 border-r-2">
                                            <select className="ml-3 w-28 h-8 cursor-pointer focus:outline-none">
                                                <option>ផលិតផល</option>
                                                <option>អចលទ្រព្យ</option>
                                                <option>ព័ត៌មាន</option>
                                            </select>
                                        </div>
                                        <div className="w-full">
                                            <input type="text" className="w-full h-8 px-3 text-base focus:outline-none" placeholder="ស្វែងរក..."/>
                                        </div>
                                        <div>
                                            <div className="px-5 -mr-1 h-10 flex justify-between items-center text-white rounded-r-full bg-primary cursor-pointer hover:bg-secondaray">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                                <span className="ml-3">ស្វែងរក</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/4 pl-5">
                                    <div className="flex justify-between items-center search-wrapper rounded-full border-2 border-yellow-500 h-10">
                                        <div className="flex justify-start items-center">
                                            <div className="px-4 -ml-1 h-10 flex justify-between items-center text-white rounded-l-full bg-primary cursor-pointer hover:bg-secondaray">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <div className="px-4">
                                                <small>0 ITEM(S) - <span className="text-red-500 font-bold">$0.00</span></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-md">
                <div className="container max-w-screen-xl m-auto">
                    <div className="flex justify-start text-lg items-center">
                        <div className="w-1/5">
                            <div className="flex justify-between items-center">
                                <div>
                                    តាមប្រភេទផលិតផល
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/5">
                            <ul className="flex justify-start items-center">
                                <li className="px-4 py-3 cursor-pointer hover:text-red-500">
                                    <Link href="/" passHref>ទំព័រដើម</Link>
                                </li>
                                <li className="px-4 py-3 cursor-pointer hover:text-red-500">
                                    <Link href="/products" passHref>ផលិតផល</Link>
                                </li>
                                <li className="px-4 py-3 cursor-pointer hover:text-red-500">
                                    <Link href="" passHref>អចលទ្រព្យ</Link>
                                </li>
                                <li className="px-4 py-3 cursor-pointer hover:text-red-500">
                                    <Link href="" passHref>ព័ត៌មាន</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}