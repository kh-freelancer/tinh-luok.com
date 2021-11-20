import Image from "next/image"
import PRODUCT_IMAGES from "../product_images"

export default function ProductDetail(){
    return (
        <>
            <div className="mt-2 container max-w-screen-xl m-auto">
                <div className="flex">
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
                                <h6 className="text-base">ឩបករណ៍រុញយកក្បាលពោះ 6-Pack</h6>
                                <div className="mt-3 mb-3 pb-3 border-b">
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
                                        <label>ពណ៌:</label>
                                    </div>
                                    <div>
                                        <label>ទំហំ:</label>
                                    </div>
                                    <div>
                                        <label>Shipping: Support Express</label>
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
                    <div className="w-1/4"></div>
                </div>
            </div>
        </>
    )
}