import Head from "next/head"
import Link from "next/link"
export default function NewPassword() {
    return (
        <>
            <Head>
                <title>New Password</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="mt-16 mb-16 container max-w-screen-xl m-auto">
                {/* <div className="mb-10 p-5 flex w-4/5 m-auto bg-green border rounded">
                    CAA
                </div> */}
                <div className="flex w-4/5 m-auto">
                    <div className="pt-5 pl-5 w-1/2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-28 w-28 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <ul className="mt-5 leading-9 text-base">
                            <li className="text-brand flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-5 font-bold h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">សូមបំពេញព័ត៌មានរបស់លោកអ្នក ដើម្បីធ្វើផ្ទៀងផ្ទាត់ឡើងវិញ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 leading-10 wrapper-login pt-5 px-8 pb-10 h-auto m-auto bg-white">
                        <div className="pb-3 my-3 border-b">
                            <h1 className="text-lg font-bold">កំណត់ពាក្យសម្ងាត់ថ្មីរបស់លោកអ្នក</h1>
                        </div>
                        <div className="w-full inline-block">
                            <label className="text-base">បញ្ចូលពាក្យសម្ងាត់ថ្មី:</label>
                            <input type="password" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                        </div>
                        <div className="w-full inline-block">
                            <label className="text-base">បញ្ចូលពាក្យសម្ងាត់ថ្មីឡើងវិញ:</label>
                            <input type="password" className="login_account w-full border-gray-400 focus:border-gray-400"/>
                        </div>
                        <div className="mt-5 w-full border text-center bg-primary hover:bg-secondaray text-white cursor-pointer">
                            បញ្ជូនព័ត៌មាន
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}