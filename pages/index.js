import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ImageAds from '../public/images/advertisings/its_banner-02.png'
import TopSlider from '../components/TopSlider'
import LSlider from '../components/LeftSlider'
import RSlider from '../components/RightSlider'

export default function Home() {
  
  return (
      <div>
        <Head>
          <title>Home Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
          <div className="mt-2 container max-w-screen-xl m-auto">
            <div className="flex justify-items-start">
              <div className="hidden md:block w-1/2 md:w-1/5 bg-white">
                <ul>
                  <li className="cursor-pointer hover:shadow-md">
                    <Link href="/" passHref>
                      <div className="flex justify-between px-2 py-2">
                        អេឡិចត្រូនិច
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="leading-8 cursor-pointer hover:shadow-md">
                    <Link href="/" passHref>
                      <div className="flex justify-between px-2 py-2">
                      សំភារៈកីឡា និង កម្សាន្ត
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-4/5">
                <TopSlider/>
              </div>
            </div>
          </div>
          <div className="mt-4 container max-w-screen-xl m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mx-4 md:mx-0 p-1 bg-white border rounded-md">
                <div className="flex justify-between p-2">
                  <h5 className="font-bold text-lg">មកដល់ថ្មីៗ</h5>
                  <a className="text-base cursor-pointer text-red-500 hover:underline">មើល​ច្រើន​ទៀត</a>
                </div>
                <LSlider/>
              </div>
              <div className="mx-4 md:mx-0 p-1 bg-white border rounded-md">
                <div className="flex justify-between p-2">
                  <h5 className="font-bold text-lg">ការបញ្ចុះតម្លៃ</h5>
                  <a className="text-base cursor-pointer text-red-500 hover:underline">មើល​ច្រើន​ទៀត</a>
                </div>
                <RSlider/>
              </div>
            </div>
            <div className="mx-4 md:mx-0 mt-5 mb-5 object-cover">
              <Image className="w-full" src={ImageAds} width="1500" height="180"/>
            </div>
            
            <div className="mx-4 md:mx-0 p-2 mb-3 bg-white border">
              <h1 className="ml-2 text-lg font-bold text-black">ផលិតផល លក់ដាច់ជាងគេ</h1>
            </div>
            <div className="py-2 mb-7">
              <div className="mx-4 md:mx-0 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                <div className="web-card mb-1 pb-1 relative cursor-pointer rounded-md shadow-sm bg-white hover:shadow-xl">
                  <div className="saleOff">
                    <span className="font-mono inline-block">
                      <label>ថ្មី</label>
                    </span>
                  </div>
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/14.jpg"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/2.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                      <label>Second Hand</label>
                    </span>
                  </div>
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/3.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/4.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/5.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/6.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/7.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/8.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/9.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/10.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/11.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
                  <div className="p-2 overflow-hidden">
                    <img src="images/products/12.png"/>
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
                            <img src="images/users/sron-chhitly.jpeg" className="w-6 h-6 rounded-full object-cover"/>
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
          <div className="bg-white">
            <div className="md:ml-auto md:mr-auto max-w-screen-xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div className="py-5 border-l">
                  <img className="w-20 mx-auto" src="images/brand/value_icon.png"/>
                    <div className="mx-auto text-center leading-10">
                      <h5 className="font-bold text-center">តម្លៃដ៏អស្ចារ្យ</h5>
                      <p className="px-5 text-base leading-6">
                      ហាងអាណាចក្រស៊បភីង យើងផ្ដល់ជូននៅផលិតផលដែលមានគុណភាព ទំនួលខុសត្រូវខ្ពស់ នឹងតម្លៃសមរម្យសម្រាប់ប្រជាជនកម្ពុជា
                    </p>
                    </div>
                  </div>
                  <div className="py-5 border-l">
                  <img className="w-32 mx-auto" src="images/brand/anachak_delivery_icon.png"/>
                    <div className="mx-auto text-center leading-10">
                      <h5 className="font-bold text-center">ការដឹកជញ្ជូន</h5>
                      <p className="px-5 text-base leading-6">
                      ការដឹកជញ្ជូនចាប់ពីរម៉ោង 9:30AM-12:00PM ពេលថ្ងៃ 2:00PM-5:30PM សម្រាប់អតិថិជនដែលនៅក្នុងក្រុងភ្នំពេញ សម្រាប់អតិថិជននៅតាមខេត្តយើងមានសេវាដាក់តាមក្រុមហ៊ុនដៃគូរ
                      </p>
                    </div>
                  </div>
                  <div className="py-5 border-l">
                  <img className="w-20 mx-auto" src="images/brand/safe_payment.png"/>
                    <div className="mx-auto text-center leading-10">
                      <h5 className="font-bold text-center">ការទូទាត់ដោយសុវត្ថិភាព</h5>
                      <p className="px-5 text-base leading-6">
                    ចំពោះការទូទាត់ប្រាក់អតិថិនអាចបង់ប្រាក់ទៅតាមក្រុមហ៊ុនដឹកជញ្ជូនក៏បាន សម្រាប់តែអតិថិនជនដែលនៅក្នុងក្រុងភ្នំពេញ ចំពោះអតិថិនជនដែលនៅតាមខេត្តត្រូវតែបង់ប្រាក់ជាមុខ
                    </p>
                    </div>
                  </div>
                  <div className="py-5 border-l border-r">
                    <img className="w-20 mx-auto" src="images/brand/icon_help_center.png"/>
                    <div className="mx-auto leading-10">
                      <h5 className="font-bold font-sans text-center">24/7 Help Center</h5>
                      <p className="px-5 text-base leading-6">
                    ជំនួយពេញម៉ោងសម្រាប់បទពិសោធន៍នៃការទិញទំនិញដោយរលូន។ ទំនាក់ទំនងគ្រប់ពេលវេលា ០១០ ៩៩ ៧៣ ៤០
                    </p>
                    </div>
                    
                  </div>
                </div>
              </div>
          </div>
        </main>
      </div>
  )
}