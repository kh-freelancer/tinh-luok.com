import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import USER_IMAGES from '../../src/user_image'
import PRODUCT_IMAGES from "../../src/product_images"
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
  } from 'next-share';
  
  import IntlTelInput from 'react-intl-tel-input';
  import 'react-intl-tel-input/dist/main.css';

export default function ProductDetail(){
    return (
        <>
            <Head>
                <title>Product Detail</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
            <div className="mt-2 px-3 py-3 container max-w-screen-xl m-auto bg-white rounded border">
                <p className="text-lg">
                    
                        <strong className="text-red-600">
                        <Link href="/products">ផលិតផល​ &gt; </Link> 
                        </strong> 
                    <small className="text-base">ឧបករណ៍ឈុតហាត់ប្រាណពិសេសមាន ៦ មុខ</small>
                </p>
            </div>
            </div>
            <div className="mt-2 container max-w-screen-xl m-auto">
                <div className="flex gap-2">
                    <div className="w-3/4">
                        <div className="flex bg-white py-10 border-b">
                            <div className="w-2/4">
                                <div className="p-3">
                                    <Image src={PRODUCT_IMAGES["pro-27"]} className="w-full h-full object-cover" alt=""/>
                                </div>
                                <div>
                                    <div className="flex">
                                        <div className="w-24 border rounded p-3 m-2 cursor-pointer hover:border-red-500">
                                        <Image src={PRODUCT_IMAGES["pro-23"]} className="w-full h-full object-cover" alt=""/>
                                        </div>
                                        <div className="w-24 border rounded p-3 m-2 cursor-pointer hover:border-red-500">
                                        <Image src={PRODUCT_IMAGES["pro-25"]} className="w-full h-full object-cover" alt=""/>
                                        </div>
                                        <div className="w-24 border rounded p-3 m-2 cursor-pointer hover:border-red-500">
                                        <Image src={PRODUCT_IMAGES["pro-15"]} className="w-full h-full object-cover" alt=""/>
                                        </div>
                                        <div className="w-24 border rounded p-3 m-2 cursor-pointer hover:border-red-500">
                                        <Image src={PRODUCT_IMAGES["pro-4"]} className="w-full h-full object-cover" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/4 p-6">
                                <h6 className="text-base">606-1A chair massager mesh office rolling chair+mesh office chairs on sale</h6>
                                <div className="mt-3 mb-3 pt-3 pb-3 border-t border-b">
                                    <h3 className="items-baseline">
                                        <span className="text-3xl font-bold">$9.00</span>
                                        <span className="pl-4">
                                            <del>$13.00</del>
                                        </span>
                                        <span className="pl-2 text-xs text-red-500 -mt-5">-4$</span>
                                    </h3>
                                </div>
                                <div className="leading-9">
                                    <div>
                                        <label><strong>ពណ៌:</strong> Red, Blue, Green</label>
                                    </div>
                                    <div>
                                        <label><strong className="">ទំហំ:</strong> S, M, XL</label>
                                    </div>
                                    <div>
                                        <label>Shipping: Support Express · Sea freight · Land freight · Air freight</label>
                                    </div>
                                </div>
                                <div className="flex space-x-3 mb-4 text-sm font-medium">
                                    <div className="flex-auto flex space-x-3">
                                        <button className="w-1/2 flex items-center justify-center rounded-md bg-primary hover:bg-secondaray text-white" type="submit">Buy now</button>
                                        <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
                                    </div>
                                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                                        <svg width="20" height="20" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-10 flex justify-start items-center gap-2">
                                    <p className="font-bold text-gray-600">ចែករំលែក</p>
                                    <FacebookShareButton
                                    url={'https://github.com/next-share'}
                                    quote={'next-share is a social share buttons for your next React apps.'}
                                    hashtag={'#nextshare'}
                                    >
                                    <FacebookIcon size={24} round />
                                    </FacebookShareButton>

                                    <TelegramShareButton
                                    url={'https://github.com/next-share'}
                                    title={'next-share is a social share buttons for your next React apps.'}
                                    >
                                    <TelegramIcon size={24} round />
                                    </TelegramShareButton>

                                    <TwitterShareButton
                                    url={'https://github.com/next-share'}
                                    title={'next-share is a social share buttons for your next React apps.'}
                                    >
                                    <TwitterIcon size={24} round />
                                    </TwitterShareButton>

                                    <LinkedinShareButton url={'https://github.com/next-share'}>
                                    <LinkedinIcon size={24} round />
                                    </LinkedinShareButton>


                                    <WhatsappShareButton
                                    url={'https://github.com/next-share'}
                                    title={'next-share is a social share buttons for your next React apps.'}
                                    separator=":: "
                                    >
                                    <WhatsappIcon size={24} round />
                                    </WhatsappShareButton>

                                    <EmailShareButton
                                    url={'https://github.com/next-share'}
                                    subject={'Next Share'}
                                    body="body"
                                    >
                                    <EmailIcon size={24} round />
                                    </EmailShareButton>

                                </div>
                                <div className="page-section">
                                    <div className="flex">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white">
                            <h2 className="text-xl font-bold text-red-500">ការពិពណ៌នា</h2>
                            <div className="mt-5">
                                <p>
                                អ្វីដែលអ្នកត្រូវដឹងមុនពេលបញ្ជារទិញ
                                </p><br/>
                                <ul>
                                    <li>អំពីការបញ្ជារទិញ៖ លោកអ្នកត្រូវធ្វើការចុះឈ្មោះជាមុន Register ហើយធ្វើការ Login ចូលដើម្បីបញ្ជារទិញអីវ៉ាន់</li>
                                    <li>អំពីការដឹកជញ្ជូន៖ ទំនិញដែលលោកអ្នកបញ្ជារទិញនឹងត្រូវបានក្រុមការងាររៀបចំដឹកជញ្ចូនក្នុងថ្ងៃតែមួយ 24H</li>
                                    <li>រយៈពេលដឹកជញ្ជូនសរុប៖ ការដឹកជញ្ជូនចាប់ពីរម៉ោង 9:30AM-12:00PM ពេលថ្ងៃ 2:00PM-5:30PM ចំពោះការយឺតយ៉ាវក្នុងការដឹកជញ្ជូន សូមទំនាក់ទំនងសេវាកម្មអតិថិជន៖ 010 99 73 40</li>
                                </ul>
                                <br/>
                                <Image src={PRODUCT_IMAGES["pro-23"]} className="w-full h-full object-cover" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="bg-white py-10 px-3 border shadow-md">
                            <div className="supplier-profile">
                                <div className="w-28 h-28 overflow-hidden border-2 rounded-full m-auto">
                                    <Image src={USER_IMAGES['mol-saphat']} className="rounded"/>
                                </div>
                                <div className="my-3 text-center">
                                    <p>MOL Saphat</p>
                                    <small className="text-gray-400 text-xs">Freelance Web Developer at SmartDev KH</small>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <a className="gap-2 flex justify-center items-center px-5 py-1 pt-2 border border-gray-300 hover:border-gray-500 rounded-full text-sm text-gray-500 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 h-5 w-5" fill="none" viewBox="0 0 20 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                        <span>Add Me</span>
                                    </a>
                                    <a className="gap-2 flex justify-center items-center px-5 py-1 pt-2 border border-gray-300 hover:border-gray-500 rounded-full text-sm text-gray-500 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                        </svg>
                                        <span>Call Me</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 bg-white py-5 px-3 shadow-md border">
                            <h1 className="text-lg font-bold">Request Details</h1>
                            <hr className="mt-2"/>
                            <div className="mt-5">
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    <div className="flex items-center border">
                                        <div className="w-9 justify-center border-r">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 ml-1 py-1 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input type="text" className="w-full px-2 text-sm focus:outline-none" placeholder="Full Name"/>
                                    </div>
                                    <div className="flex items-center border">
                                        <IntlTelInput preferredCountries={['kh']} containerClassName="intl-tel-input" inputClassName="form-control w-full text-xs"/>
                                    </div>
                                </div>
                                <div className="flex items-center border mb-3">
                                    <div className="w-9 justify-center border-r">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 ml-1 py-1 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" className="w-full px-2 text-sm focus:outline-none" placeholder="Your email"/>
                                </div>
                                <div>
                                    <textarea className="tl-control Description w-full h-16 text-sm" placeholder="Write message to agent here"></textarea>
                                </div>
                                <div className="my-3 py-1 px-20 text-center cursor-pointer border bg-primary text-white">
                                    <a>Contact Agents</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}