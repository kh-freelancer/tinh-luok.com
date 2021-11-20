import Image from "next/image"
import FOOTER_IMAGE from "../pages/footer_image"

export default function Footer() {
    return (
        <div>
            <footer className="hidden md:block bg-white border">
                <div className="ml-4 mr-4 md:ml-auto md:mr-auto max-w-screen-xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-4 py-5">
                        <div className="leading-10">
                            <h5 className="font-bold">ទំនាក់ទំនង</h5>
                            <p className="text-base">#B5, Street 265, Sangkat Tuek Laok III, Khan Toul Kork, Phnom Penh (Near Samnang 12 Market) info@anachakshopping.com (+855) 10 997 340 / (+855) 92 69 44 11</p>
                        </div>
                        <div className="leading-10">
                            <h5 className="font-bold">អំពីយើង</h5>
                            <p className="text-base">អាណាចក្រទំនិញគឺជាហាងទំនិញអនឡាញតែមួយគត់នៅក្នុងប្រទេសកម្ពុជាដែលធ្វើ អោយអ្នកទទួលបាននូវបទពិសោធន៍ល្អបំផុតនៃការទិញទំនិញតាមអនឡាញ។</p>
                        </div>
                        <div className="leading-10">
                            <h5 className="font-bold">ប​ណ្តា​ញ​សង្គម</h5>
                            <ul className="flex items-center">
                                <li>
                                    <Image className="bg-blue-500 cursor-pointer" src={FOOTER_IMAGE.facebook} alt=""/>
                                </li>
                                <li>
                                <Image className="bg-blue-500 cursor-pointer" src={FOOTER_IMAGE.linkedin} alt=""/>
                                </li>
                                <li>
                                <Image className="bg-blue-500 cursor-pointer" src={FOOTER_IMAGE.youtube} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 border-t text-center py-2">
                    <span className="text-sm text-gray-500">© Tinh-Luok Platform 2021. All rights reserved.</span>
                </div>
            </footer>
        </div>
    )
}