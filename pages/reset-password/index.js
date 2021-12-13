import Head from "next/head"
import Link from "next/link"
export default function ResetPassword() {
    return (
        <>
            <Head>
                <title>Reset Password</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="mt-16 mb-16 container max-w-screen-xl m-auto">
                <div className="flex w-4/5 m-auto">
                    <div className="pt-5 pl-5 w-1/2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-28 w-28 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <ul className="mt-5 leading-9 text-base">
                            <li className="text-brand flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">សូមបំពេញព័ត៌មានរបស់លោកអ្នក ដើម្បីធ្វើផ្ទៀងផ្ទាត់ឡើងវិញ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 leading-10 wrapper-login pt-5 px-8 pb-10 h-auto m-auto bg-white">
                        <div className="pb-3 my-3">
                            <h1 className="text-lg font-bold">កំណត់លេខសង្ងាត់តាមរយៈអ៊ីមែល</h1>
                        </div>
                        <div className="w-full inline-block">
                            {/* <label className="text-base">អ៊ីមែល:</label> */}
                            <input type="text" className="login_account w-full border-gray-400 focus:border-gray-400" placeholder="អ៊ីមែលរបស់លោកអ្នក"/>
                        </div>
                        <div className="mt-5 w-full border text-center bg-primary hover:bg-secondaray text-white cursor-pointer">
                            កំណត់ពាក្យសង្ងាត់ឡើងវិញ
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}