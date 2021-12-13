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
                    <div className="hide md:show w-1/2 bg-white  overflow-hidden">
                        
                    </div>
                    <div className="w-1/2 leading-10 wrapper-login pt-5 px-8 pb-10 h-auto m-auto bg-white">
                        <div className="pb-3 my-3">
                            <h1 className="text-lg font-bold">កំណត់លេខសង្ងាត់តាមរយៈអ៊ីមែល</h1>
                        </div>
                        <div className="w-full inline-block">
                            {/* <label className="text-base">អ៊ីមែល:</label> */}
                            <input type="text" className="login_account w-full border-gray-400 focus:border-gray-400" placeholder="អ៊ីមែលរបស់លោកអ្នក"/>
                        </div>
                        <div className="mt-5 w-full border text-center bg-primary text-white">
                            កំណត់ពាក្យសង្ងាត់ឡើងវិញ
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}