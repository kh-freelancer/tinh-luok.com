import Head from "next/head"
import Image from "next/image"
import ADS_IMAGES from "../../src/advertising_images"
import NEWS_IMAGES from "../../src/news_images"
import USER_IMAGES from '../../src/user_image'
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
export default function Slug() {
    return (
        <>
            <Head>
                <title>Slug</title>
            </Head>
            <div className="mt-2 container max-w-screen-xl m-auto">
                <div className="flex justify-center pb-5">
                   <Image className="w-full object-cover" src={ADS_IMAGES['top-banner-1']} alt="top banner"/>
                </div>
                <div className="my-6 flex gap-6">
                    <div className="w-2/3">
                        <div>
                            <h1 className="text-2xl font-bold">
មិនខ្វល់ប្រើរបស់ Fake ឬអត់ Ji A នៅតែទទួលបានលេខ ១ ជាអ្នក​បង្អួត​ទ្រព្យខ្លាំងជាងគេ​</h1>
                            <div className="my-5 flex justify-between">
                                <div>
                                    <div className="mt-2 flex items-center">
                                        <div className="rounded-full w-8 h-8 overflow-hidden border-2 border-yellow-600">
                                            <Image src={USER_IMAGES['khmerload']} className="w-8 h-8 rounded-full object-cover" alt="user"/>
                                        </div>
                                        <span className="px-1 text-sm font-bold text-gray-500">Chan Dara</span>
                                        <span className="text-sm">Today at 07:25 AM</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-1 flex justify-start items-center gap-2 p-1 border-2 rounded border-yellow-600 bg-gray">
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
                                </div>
                            </div>
                            <div className="py-1">
                                <Image src={NEWS_IMAGES['news-b3']} alt=""/>
                                <p>
                                <b>កម្សាន្ត៖</b> ជាការពិតណាស់ តារាចម្រៀង Kpop ភាគច្រើន មិនសូវមានបងប្អូននឹងគ្នាទេ ព្រោះពួកគេ សុទ្ធតែមកពីតំបន់ខុសគ្នា អ្នកខ្លះមានសញ្ជាតិមិនមែនជាជនជាតិកូរ៉េទៀតផង។ ដោយឡែក មានតារាមួយចំនួន ដែលជាសាច់ញាតិនឹងគ្នា​ ហើយបានក្លាយជា តារាចម្រៀង មានសមត្ថភាពសិល្បៈដូចគ្នា។ 
                                </p>
                                <p>
                                ជាមួយគ្នានេះដែរ តារាចម្រៀង Kpop ប្រុសស្រីល្បីឈ្មោះ២គូខាងក្រោមនេះ ប្រហែលជាហ្វេនមិនទាន់ដឹងទេថា ពួកគេគឺជាបងប្អូនខ្សែស្រឡាយនឹងគ្នា។ ទន្ទឹមនឹងនោះ បងប្អូនតារាទាំងនេះ មិនដែលបង្ហាញទំនាក់ទំនងរបស់ពួកគេដល់សាធារណៈជនឲ្យដឹងនោះទេ។
                                </p>
                                <p>
                                ជាពិសេស តារាទាំងប៉ុន្មានដួងនេះ ទោះបីជាពួកគេមានជាប់សាច់ញាតិគ្នាមែន ប៉ុន្ដែមុខមាត់គឺខុសគ្នាស្រឡះ ដែលជាមូលហេតុធ្វើឲ្យហ្វេនមិនបានចាប់អារម្មណ៍សោះ។ លើសពីនោះ អ្នកគាំទ្រដែលបានដឹងហើយ ប្រាកដជាមានការភ្ញាក់ផ្អើលនឹកស្មានមិនដល់ថា តារាប្រុសស្រីទាំងនេះ ជាបងប្អូនជីដូនមួយនឹងគ្នាជាមិនខាន៕


                                </p>
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
                            <Image className="w-full object-fill" src={ADS_IMAGES['Figtree-min']} alt="ads 2"/>
                        </div>
                        <div className="w-full object-fill cursor-pointer">
                            <Image className="w-full object-fill" src={ADS_IMAGES['8-min']} alt="ads 3"/>
                        </div>
                        <div className="w-full object-fill cursor-pointer">
                            <Image className="w-full object-fill" src={ADS_IMAGES['news-right-1']} alt="ads 1"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}