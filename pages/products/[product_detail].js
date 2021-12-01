import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import USER_IMAGES from '../../src/user_image'
import PRODUCT_IMAGES from "../../src/product_images"

export default function ProductDetail(){
    return (
        <>
            <Head>
                <title>Product Detail</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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
                        <div className="bg-white py-10 px-3">
                            <div className="supplier-profile">
                                <div className="w-28 h-28 overflow-hidden border-2 rounded-full m-auto">
                                    <Image src={USER_IMAGES['mol-saphat']} className="rounded"/>
                                </div>
                                <div className="my-3 text-center">
                                    <p>MOL Saphat</p>
                                    <small className="text-gray-400 text-xs">Freelance Web Developer at SmartDev KH</small>
                                </div>
                                <div className="text-center items-center">
                                    <a className="px-5 py-1 pt-2 border border-gray-300 hover:border-gray-500 rounded-full text-sm text-gray-500 cursor-pointer">Call Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}