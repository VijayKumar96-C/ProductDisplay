import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faTiktok, faSnapchat, faAndroid, faApple } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="bg-gray-200 w-full" >
            <div className="flex flex -row mx-36" >
                <div className="flex flex-row w-1/2 justify-between pt-6 pb-6" >
                    <div className="flex flex-col" >
                        <p className="pb-2 font-bold" >COMPANY INFO</p>
                        <p>About</p>
                        <p>Social Responsibility</p>
                        <p>Affilitate</p>
                        <p>Fashion Blogger</p>
                    </div>
                    <div className="flex flex-col" >
                        <p className="pb-2 font-bold" >HELP & SUPPORT</p>
                        <p>Returns</p>
                        <p>How to Order</p>
                        <p>How to Track</p>
                        <p>Size Chart</p>
                    </div>
                    <div className="flex flex-col" >
                        <p className="pb-2 font-bold" >CUSTOMER CARE</p>
                        <p>Contact Us</p>
                        <p>Payment</p>
                        <p>Bonus Point</p>
                        <p>Notices</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col" >
                    <div className="flex flex-row justify-between pl-16 " >
                        <div className="pt-6 font-bold" >
                            <p className="" >SOCIALS</p>
                            <FontAwesomeIcon icon={faFacebook} size="xl" className="pr-2 pt-2" />
                            <FontAwesomeIcon icon={faTwitter} size="xl" className="px-2" />
                            <FontAwesomeIcon icon={faInstagram} size="xl" className="px-2" />
                            <FontAwesomeIcon icon={faTiktok} size="xl" className="px-2" />
                            <FontAwesomeIcon icon={faSnapchat} size="xl" className="px-2" />
                        </div>
                        <div className="pt-6 font-bold" >
                            <p className="pl-2"  >PLATFORMS</p>
                            <FontAwesomeIcon icon={faAndroid} className="px-2" size="xl pt-2" />
                            <FontAwesomeIcon icon={faApple} className="px-2" size="xl" />
                        </div>
                    </div>
                    <div className="pl-16 pt-8" >
                        <p className="pb-2" >SIGN UP</p>
                        <>
                            <input
                                className="h-10 w-96 pl-2  border bg-white placeholder-gray-600 border-gray-300 text-black"
                                type="text"
                                placeholder="Your email"
                            />
                            <button className="bg-black h-10 w-32 text-white font-bold  rounded" >SUBSCRIBE</button>
                        </>
                        <p className="text-sm pt-4" >By clicking the SUBSCRIBE button, you are agreeing to our Privacy & Cookie Policy</p>
                    </div>
                </div>
            </div>
            <div className="mx-36" >
                <p>2010-2022 All Rights Reserved</p>
                <div className="flex flex-wrap pt-6 w-1/2 underline underline-offset-1" >
                    <a className="border-r-2 border-gray-400 pr-2" >Privacy Center</a>
                    <a className="border-r-2 border-gray-400 pr-2 pl-2" >Privacy & Cookie Policy</a>
                    <a className="border-r-2 border-gray-400 pr-2 pl-2 " >Manage Cookies</a>
                    <a className="border-r-2 border-gray-400 pr-2 pl-2 " >Terms & Conditions</a>
                    <a className="border-r-2 border-gray-400 pr-2  " >Copyright Notice</a>
                    <a className="border-r-2 border-gray-400 pr-2 pl-2" >imprint</a>
                </div>
            </div>
        </div>
    )

}

export default Footer