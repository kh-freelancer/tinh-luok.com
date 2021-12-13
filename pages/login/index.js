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
                <div className="flex gap-2 w-4/5 m-auto">
                    <div className="w-1/2 bg-white border overflow-hidden">
                        
                    </div>
                    <div className="w-1/2 leading-10 wrapper-login pt-5 px-8 pb-10 h-auto m-auto bg-white shadow-md border">
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
                        <div className="mt-5 w-full border text-center bg-primary text-white">
                            ចូលគណនី
                        </div>
                        <Link href="/">
                            <a className="text-yellow-600 text-sm">ភ្លេចលេខសំងាត់</a>
                        </Link>
                        <div class="or"><div>ឬ</div></div>
                        <div className="mt-5 w-full border text-center bg-facebook text-white">
                            ចូលគណនីជាមួយហ្វេសប៊ុក
                        </div>
                        <div className="mt-3 flex items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <div className="text-sm">
                                <label>មិនទាន់មានគណនីទឬ?</label>
                                <Link href="/">
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