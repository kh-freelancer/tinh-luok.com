import Head from "next/head"
import Image from "next/image"
import ADS_IMAGES from "../../src/advertising_images"
import NEWS_IMAGES from "../../src/news_images"
import USER_IMAGES from '../../src/user_image'
export default function News() {
    return (
        <>
            <Head>
                <title>News</title>
            </Head>
            <div className="mt-2 container max-w-screen-xl m-auto">
                <div className="flex justify-center pb-5">
                   <Image className="w-full object-cover" src={ADS_IMAGES['top-banner-1']} alt="top banner"/>
                </div>
                <div className="flex gap-6">
                    <div className="w-2/3 relative">
                        <div className="absolute w-full bottom-0 bg-gradient-to-t from-gray-900 to-transparent p-5  z-50 text-white">
                            <div className="bottom-0">
                                <h1 className="text-2xl font-semibold">
                                    <a className="text-shadow text-white hover:text-yellow-600 cursor-pointer">
                                    តារាប្រុសទាំង៣រូបនេះ បានធ្វើឲ្យហ្វេន sad ព្រោះតែមានម្ចាស់បេះដូងរួចហើយ
                                    </a>
                                </h1>
                                <div className="pt-3 flex items-center gap-2">
                                    <div className="bg-primary px-1 rounded items-center">
                                        <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                            <Image src={USER_IMAGES['sron-chhitly']} className="w-8 h-8 rounded-full object-cover" alt="User"/>
                                        </div>
                                        <span className="px-1 text-xs font-semibold text-white">S.C</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-news img-hover-zoom cursor-pointer overflow-hidden bg-gradient-to-t from-current to-transparent">
                            <Image src={NEWS_IMAGES['news-top-left']} alt="News top left"/>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="h-news rounded overflow-hidden">
                            <div className="h-48 img-hover-zoom overflow-hidden cursor-pointer">
                                <Image className="w-full h-full object-contain" src={NEWS_IMAGES['news-top-right']} alt="new top right"/>
                            </div>
                            <div className="p-5 bg-gray">
                                <span className="text-md font-bold text-black">
                                    <a className="cursor-pointer hover:text-yellow-600">
                                    ពរពោះកូនភ្លោះឡើងប៉ុន្មានខែហើយ វីរៈនិច នៅលេងខ្លួនខោខៅប៊យរឹបៗទៀត
                                    </a>
                                </span>
                                <p className="pt-3 italic">ស្អាតណាស់ម៉ាក់ វិរៈនិច ពោពោះកូនភ្លោះឡើងជាង៣ខែហើយ នៅលេងខ្លួន ខោអាវរឹបរាងទៀត។</p>
                                <div className="pt-3 flex items-center gap-2">
                                    <div className="bg-primary px-1 rounded items-center">
                                        <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                            <Image src={USER_IMAGES['sron-chhitly']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                        </div>
                                        <span className="px-1 text-xs font-bold text-gray-500">S.C</span>
                                    </div>
                                </div>
                                <div className="mt-2 flex text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="ml-1">01-Feb-2022</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="ml-1">2pm · 3 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6 flex gap-6">
                    <div className="w-2/3">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="h-news rounded overflow-hidden bg-gray">
                                <div className="h-48 img-hover-zoom overflow-hidden cursor-pointer">
                                    <Image className="w-full h-full object-contain" src={NEWS_IMAGES['news-l01']} alt="news left 01"/>
                                </div>
                                <div className="p-5">
                                    <span className="text-md font-bold text-black">
                                        <a className="cursor-pointer hover:text-yellow-600">
                                        ហ្វេនភាគច្រើនមិនដឹង! តាមពិត តារា Kpop ទាំងនេះ ជាបងប្អូនគ្នា
                                        </a>
                                    </span>
                                    <p className="pt-3 italic">តារាចម្រៀង Kpop ទាំងប៉ុន្មានគូនេះ មិនសូវមានហ្វេនចាប់អារម្មណ៍ដឹងនោះទេ ថាពួកគេគឺជាបងប្អូនមានជាប់</p>
                                    <div className="pt-3 flex items-center gap-2">
                                        <div className="bg-primary px-1 rounded items-center">
                                            <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                                <Image src={USER_IMAGES['khmerload']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                            </div>
                                            <span className="px-1 text-xs font-bold text-gray-500">S.C</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-1">01-Feb-2022</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-1">2pm · 3 hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-news rounded overflow-hidden bg-gray">
                                <div className="h-48 img-hover-zoom overflow-hidden cursor-pointer">
                                    <Image className="w-full h-full object-contain" src={NEWS_IMAGES['news-l02']} alt="news left 02"/>
                                </div>
                                <div className="p-5">
                                    <span className="text-md font-bold text-black">
                                        <a className="cursor-pointer hover:text-yellow-600">
                                        Rashford ផ្ញើសារទៅកាន់ Van de Beek បែបនេះក្រោយគេសម្រេចចិត្តផ្លា
                                        </a>
                                    </span>
                                    <p className="pt-3 italic">Rashford ផ្ញើសារលើកទឹកចិត្ត Van de Beek</p>
                                    <div className="pt-3 flex items-center gap-2">
                                        <div className="bg-primary px-1 rounded items-center">
                                            <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                                <Image src={USER_IMAGES['kl1']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                            </div>
                                            <span className="px-1 text-xs font-bold text-gray-500">S.C</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-1">01-Feb-2022</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-1">2pm · 3 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <div className="w-1/3">
                                <div className="rounded overflow-hidden img-hover-zoom">
                                    <a className="cursor-pointer">
                                    <Image className="rounded w-full object-cover" src={NEWS_IMAGES['news-b1']} alt="news body 1"/>
                                    </a>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="pb-3">
                                    <span className="text-md font-bold text-black">
                                        <a className="cursor-pointer hover:text-yellow-600">
                                        មិនឲ្យហ្វេនផ្សំផ្គុំយ៉ាងម៉េច បើ Hae-in និង Jisoo លេងរឿង «Snowdrop» សមគ្នាយ៉ាងនេះ!
                                        </a>
                                    </span>
                                    <p className="pt-3 italic">ក្រោមហេតុផល ដែលរឿង «Snowdrop» មានការគាំទ្រច្រើន ដោយសារតែតួអង្គឯកប្រុសស្រីអាចសម្ដែងស្ទើរគ្រប់ឈុតឆាកជាមួយគ្នា មើលទៅមានស្និទ្ធស្នាលដាក់អារម្មណ៍បាន</p>
                                    <div className="pt-3 flex items-center gap-2">
                                        <div className="bg-primary px-1 rounded items-center">
                                            <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                                <Image src={USER_IMAGES['agents']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                            </div>
                                            <span className="px-1 text-xs font-bold text-gray-500">S.C</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-1">01-Feb-2022</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-1">2pm · 3 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <div className="w-1/3">
                                <div className="rounded overflow-hidden img-hover-zoom">
                                    <a className="cursor-pointer">
                                    <Image className="rounded w-full object-cover" src={NEWS_IMAGES['news-b2']} alt="new body 2"/>
                                    </a>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="pb-3">
                                    <span className="text-md font-bold text-black">
                                        <a className="cursor-pointer hover:text-yellow-600">
                                        Lee Yoo Mi ក្នុងរឿង Squid Game គេស្រលាញ់គ្រប់គ្នា ដល់ក្នុងរឿងថ្មីនេះ គេជេគ្រប់គ្នាទៅវិញ
                                        </a>
                                    </span>
                                    <p className="pt-3 italic">តួអង្គរបស់ Lee Yoo Mi គឺផ្ទុយទាំងស្រុង ពីក្នុងរឿង Squid Game និងរឿង All Of Us Are Dead កំពុងធ្វើឲ្យអ្នកគាំទ្រឈ្លក់វង្វេង</p>
                                    <div className="pt-3 flex items-center gap-2">
                                        <div className="bg-primary px-1 rounded items-center">
                                            <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                                <Image src={USER_IMAGES['kl1']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                            </div>
                                            <span className="px-1 text-xs font-bold text-gray-500">S.C</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-1">01-Feb-2022</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-1">2pm · 3 hours ago</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <div className="w-1/3">
                                <div className="rounded overflow-hidden img-hover-zoom">
                                    <a className="cursor-pointer">
                                    <Image className="rounded w-full object-cover" src={NEWS_IMAGES['news-b3']} alt="news body 3"/>
                                    </a>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="pb-3">
                                    <span className="text-md font-bold text-black">
                                        <a className="cursor-pointer hover:text-yellow-600">
                                        មិនខ្វល់ប្រើរបស់ Fake ឬអត់ Ji A នៅតែទទួលបានលេខ ១ ជាអ្នក​បង្អួត​ទ្រព្យខ្លាំងជាងគេ​
                                        </a>
                                    </span>
                                    <p className="pt-3 italic">តារា​ល្បី​ៗ​ប៉ុន្មានដួងនេះ ​បាន​ឈរ​នៅលើ​គេ​ក្នុង​ការ​បោះ​ឆ្នោត​បង្អួត​ទ្រព្យ​សម្បត្តិ​របស់​ពួក​គេ​ខ្លាំង​ពេក ហើយចំណាត់ថ្នាក់លេខ ១បានទៅលើ</p>
                                    <div className="pt-3 flex items-center gap-2">
                                        <div className="bg-primary px-1 rounded items-center">
                                            <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                                <Image src={USER_IMAGES['sron-chhitly']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                            </div>
                                            <span className="px-1 text-xs font-bold text-gray-500">S.C</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-1">01-Feb-2022</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-1">2pm · 3 hours ago</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <div className="w-1/3">
                                <div className="rounded overflow-hidden img-hover-zoom">
                                    <a className="cursor-pointer">
                                    <Image className="rounded w-full object-cover" src={NEWS_IMAGES['news-b4']} alt="news body 4"/>
                                    </a>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="pb-3">
                                    <span className="text-md font-bold text-black">
                                        <a className="cursor-pointer hover:text-yellow-600">
                                        និយាយខុសមួយម៉ាត់ចាំមួយជីវិត! Justin Bieber រម្លឹកអតីតកាល Charlie Puth ធ្លាប់ធ្វើបា.បផ្លូវចិត្តខ្លួន កាលពី៦ឆ្នាំមុន
                                        </a>
                                    </span>
                                    <p className="pt-3 italic">Justin Bieber បានទម្លាយរឿងចាស់ៗ ដែលខ្លួនមិនដែលបានលើកឡើង កាលពី៦ឆ្នាំមុន ដែលCharlie Puth បាននិយាយពាក្យថា F**k You Justin Bieber នៅលើឆាក។</p>
                                    <div className="pt-3 flex items-center gap-2">
                                        <div className="bg-primary px-1 rounded items-center">
                                            <small className="text-white text-xs">តារា & កម្សាន្ដ</small>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                                <Image src={USER_IMAGES['khmerload']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                            </div>
                                            <span className="px-1 text-xs font-bold text-gray-500">S.C</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-1">01-Feb-2022</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-1">2pm · 3 hours ago</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-1/3">
                        <div className="w-full object-fill cursor-pointer">
                            <Image className="w-full object-fill" src={ADS_IMAGES['news-right-1']} alt="ads 1"/>
                        </div>
                        <div className="w-full object-fill cursor-pointer">
                            <Image className="w-full object-fill" src={ADS_IMAGES['Figtree-min']} alt="ads 2"/>
                        </div>
                        <div className="w-full object-fill cursor-pointer">
                            <Image className="w-full object-fill" src={ADS_IMAGES['8-min']} alt="ads 3"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}