import Head from "next/head"
import Link from "next/link"
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
export default function Register() {
    return (
        <>
            <Head>
                <title>Register</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="mt-16 mb-16 container max-w-screen-xl m-auto">
                <div className="flex w-4/5 m-auto">
                    <div className="pt-10 pl-5 w-1/2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-28 w-28 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <ul className="mt-5 leading-9 text-base">
                            <li className="text-brand flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">តាមដាននិងរក្សាទុកពត៍មាន ឬទិន្ន័យរបស់លោកអ្នក</span>
                            </li>
                            <li className="text-brand flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">កំណត់ឲ្យមានការជូនដំណឹងនៅពេល សេវាកម្មរបស់លោកអ្នក រកតាមតម្លៃទីផ្សារ</span>
                            </li>
                            <li className="text-brand flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">លក់ ឬជួល អចលនទ្រព្យ នឹងសេវាកម្ម របស់អ្នក ដោយឥតគិតថ្លៃ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 leading-10 wrapper-login pt-5 px-8 pb-10 h-auto m-auto bg-white">
                        <div className="pb-3 my-3 border-b">
                            <h1 className="text-lg font-bold">ចុះឈ្មោះបង្កើតគណនី</h1>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-full inline-block">
                                <label className="text-base">ត្រកូល:</label>
                                <input type="text" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                            </div>
                            <div className="w-full inline-block">
                                <label className="text-base">នាមខ្លួន:</label>
                                <input type="text" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-full inline-block">
                                <label className="text-base">អ៊ីមែល:</label>
                                <input type="text" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                            </div>
                            <div className="-mt-1 w-full inline-block">
                                <label className="text-base">ទូរសព្ទ:</label>
                                <IntlTelInput preferredCountries={['kh']} inputClassName="h-9 border border-gray-400 w-full text-sm"/>
                            </div>
                        </div>
                        <div className="w-full inline-block">
                            <label className="text-base">តំណត់ពាក្យសម្ងាត់:</label>
                            <input type="password" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                        </div>
                        <div className="w-full inline-block">
                            <label className="text-base">កំណត់ពាក្យសម្ងាត់ឡើងវិញ:</label>
                            <input type="password" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                        </div>
                        <div className="mt-5 w-full border text-center bg-primary hover:bg-secondaray text-white cursor-pointer">
                            ចូលគណនី
                        </div>
                        <div className="or mt-10"><div>ឬ</div></div>
                        <div className="mt-5 w-full border text-center bg-facebook text-white cursor-pointer">
                            ចុះឈ្មោះជាមួយហ្វេសប៊ុក
                        </div>
                        <div className="mt-3 flex items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <div className="text-sm">
                                <label>មានគណនីហើយឬ?</label>
                                <Link href="/login">
                                    <a className="ml-1 text-yellow-600">ចូលទៅគណនីរបស់អ្នកនៅទីនេះ</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}