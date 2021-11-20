import Image from "next/image"
import PRODUCT_IMAGES from "../product_images"

export default function Product(){
    return (
        <>
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
                    <div className="w-4/5">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                    <Image src={PRODUCT_IMAGES["1-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg  cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["2-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["3-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["4-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>

                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                    <Image src={PRODUCT_IMAGES["5-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                    <Image src={PRODUCT_IMAGES["6-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["7-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["8-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>


                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["9-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["10-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["11-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["12-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["13-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["14-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>
                            <div className="bg-white p-3 shadow-md hover:shadow-lg cursor-pointer">
                                <div className="w-full text-center">
                                <Image src={PRODUCT_IMAGES["15-web"]} className="w-40 h-40 object-container m-auto"/>
                                </div>
                                <div className="h-10 overflow-hidden">
                                    <p className="inline-block line-clamp-2 overflow-hidden">workwell comfortable home fabric medical swivel chair office furniture gas spring roating office chair</p>
                                </div>
                                <div className="mt-4 text-xl font-bold">$6.99 - $14.99</div>
                                <small className="text-gray-600">
                                    10.0 Pieces
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}