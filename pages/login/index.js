import Head from "next/head"
import Link from "next/link"
export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="mt-16 mb-16 container max-w-screen-xl m-auto">
                <div className="flex w-4/5 m-auto">
                    <div className="pt-5 pl-5 w-1/2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-login m-auto h-28 w-28 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <ul className="mt-5 leading-9 text-base">
                            <li className="text-brand flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">ចូលគណនីដោយប្រើលេខទូរស័ព្ទ, អ៊ីម៉ែល ឬឈ្មោះអ្នកប្រើប្រាស់</span>
                            </li>
                            <li className="text-brand flex justify-start items-stretch">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-1 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">កំណត់ឲ្យមានការជូនដំណឹងនៅពេលអចលនទ្រព្យត្រូវជាមួយលក្ខខណ្ឌរបស់អ្នករកតាមតម្លៃទីផ្សារ</span>
                            </li>
                            <li className="text-brand flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">លក់ ឬជួល អចលនទ្រព្យនិងសេវាកម្មផ្សេងៗ របស់អ្នក ដោយឥតគិតថ្លៃ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 leading-10 wrapper-login pt-5 px-8 pb-10 h-auto m-auto bg-white">
                        <div className="pb-3 my-3 border-b">
                            <h1 className="text-lg font-bold">ចូលគណនីជាមួយពាក្យសម្ងាត់</h1>
                        </div>
                        <div className="w-full inline-block">
                            <label className="text-base">អ៊ីមែល:</label>
                            <input type="text" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                        </div>
                        <div className="w-full inline-block">
                            <label className="text-base">ពាក្យសម្ងាត់:</label>
                            <input type="password" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                        </div>
                        <div className="mt-5 w-full border text-center bg-primary hover:bg-secondaray text-white cursor-pointer">
                            ចូលគណនី
                        </div>
                        <Link href="/reset-password" passHref>
                            <a className="text-yellow-600 text-sm">ភ្លេចលេខសំងាត់</a>
                        </Link>
                        <div className="or"><div>ឬ</div></div>
                        <div className="mt-5 w-full border text-center bg-facebook text-white cursor-pointer">
                            ចូលគណនីជាមួយហ្វេសប៊ុក
                        </div>
                        <div className="mt-3 flex items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <div className="text-sm">
                                <label>មិនទាន់មានគណនីទេឬ?</label>
                                <Link href="/register">
                                    <a className="ml-1 text-yellow-600">ចុះឈ្មោះទីនេះ</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}