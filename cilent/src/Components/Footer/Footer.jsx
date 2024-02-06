import { FooterCopyRight } from "../../Constants/FooterInfo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebookF, faLinkedinIn, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {

    return (
        <div id="footerRoot">
            <footer className="footer flex justify-center items-center text-black">

                <div className="container mx-14">

                    <div className="grid pt-16 pl-14 pb-5 md:grid-cols-5 gap-6">
                        <div className="mb-8">
                            <p className="  font-semibold mb-4">Company</p>
                            <ul className="footer-list">
                                <li><a href="/aboutus/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }}  >About Powtoon</a></li>
                                <li><a href="https://www.fiverr.com/stores/powtoon-powtoonist?utm_source=20984&amp;utm_medium=cx_affiliate&amp;utm_campaign=Footer&amp;afp=&amp;cxd_token=20984_17436177&amp;show_join=true"
                                    className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Hire a Powtoonist</a></li>
                                <li><a href="https://apply.workable.com/powtoon/?lng=en" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Careers</a></li>
                                <li><a href="https://press.powtoon.com/?_gl=1*1vngk61*_ga*MTEzMzY1NDExNC4xNjE3MDk3MjM0*_ga_98Q92H2JTQ*MTYxODMyMjE1NS40Ni4xLjE2MTgzMjIyNzEuMzU."
                                    className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Press Kit</a></li>
                                <li><a href="/privacy-policy/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Privacy Policy</a></li>
                                <li><a href="https://powtoonsupport.powtoon.com/hc/en-gb/articles/11772808852497-Contacting-Powtoon-Customer-Support"
                                    className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <p className="text font-semibold mb-4">Features</p>
                            <ul className="footer-list">
                                <li><a href="https://www.powtoon.com/create/animated-videos" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Animated Videos</a></li>
                                <li><a href="https://www.powtoon.com/capture-screen-recorder/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video Messaging</a></li>
                                <li><a href="https://www.powtoon.com/lp/character-builder/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Character Builder</a></li>
                                <li><a href="https://www.powtoon.com/powtoon-for-powerpoint/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >PowerPoint to Video</a></li>
                            </ul>
                        </div>
                        <div className="mb-8 ">
                            <p className="text-lg font-semibold mb-4">Solutions</p>
                            <ul className="footer-list ">
                                <li><a href="https://www.powtoon.com/enterprise/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Videos for Enterprise</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Learning & Development</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for Learning & Development</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for Internal Comms</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for Consulting</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for HR</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for IT</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for Education</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for Sales</a></li>
                                <li><a href="https://www.powtoon.com/solution/learning-development" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Video for Marketing</a></li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <p className="text-lg font-semibold mb-4">Learn</p>
                            <ul className="footer-list">
                                <li><a href="https://www.powtoon.com/blog/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Blog</a></li>
                                <li><a href="https://www.powtoon.com/webinars/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Content Library</a></li>
                                <li><a href="https://www.powtoon.com/faq/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Customer Stories</a></li>
                                <li><a href="https://support.powtoon.com/en/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Partners</a></li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <p className="text-lg font-semibold mb-4">Support</p>
                            <ul className="footer-list">
                                <li><a href="https://www.powtoon.com/webinars/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Integrations</a></li>
                                <li><a href="https://www.powtoon.com/faq/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Extensions</a></li>
                                <li><a href="https://support.powtoon.com/en/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Knowledge Base</a></li>
                                <li><a href="https://support.powtoon.com/en/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Tutorials</a></li>
                                <li><a href="https://support.powtoon.com/en/" className="text-gray-500 whitespace-nowrap hover:text-gray-400 mt- font-extralight" style={{ lineHeight: "1", fontSize: "14px" }} >Terms and Conditions</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="social pt-28 pr-14 pb-5">
                    <a href="/index/" className="footer-logo" aria-label="Powtoon homepage">


                    </a>

                    <text >
                        <tspan x="0" y="0">The Visual Communication Platform</tspan>
                    </text>
                    <div className="flex justify-between items-center mt-8">
                        <ul className="footer-list social-list flex space-x-4">
                            <li>
                                <a href="https://www.facebook.com/Powtoon" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/powtoon-limited" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-gray-400" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/powtoon-limited" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-400" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/powtoon-limited" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-400" />

                                </a>
                            </li>
                            {/* Add more social links */}

                        </ul>
                        <div className="app-store-links flex space-x-4">
                            <a href="https://itunes.apple.com/us/app/powtoon/id471369279?ls=1&amp;mt=8" target="_blank">
                                <FontAwesomeIcon icon={faGooglePlay} className="hover:text-gray-400" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.powtoon.powtoon" target="_blank">
                                <FontAwesomeIcon icon={faApple} className="hover:text-gray-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="mx-14">
                {FooterCopyRight.p}
            </div>
        </div>

    )
}