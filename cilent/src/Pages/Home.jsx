// import Swiper bundle with all modules installed
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { CarouselInfo } from '../Constants/CarouselInfo';

export const Home = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setSelectedTab(tabNumber);
    };


    //css

    const sub = {
        fontSize: '19px',
        color: 'rgb(73, 11, 230)',
        textAlign: 'center',
        lineHeight: '1.45',
        fontWeight: 200,
    };

    const tabStyles = {
        // Styles for non-active tabs
        categoryTab: {
           
        },
        // Styles for active tab
        activeCategoryTab: {
            border: '1px solid #ccc',
            borderRadius: '1rem', 
            boxShadow: '0px 0px 10px 0px #ccc',
            color: "#4d0ce4",
            
        },
    };

    return (
        <div >

            {/* box-1 */}


            {/* box-2 */}
            <div className="our-user flex justify-center items-center user-block">
                <div className="counter-box our-user-no">
                    <span id="counter">
                        <span className="counter-digit" style={{ height: '40px', width: '30px', display: 'inline-block', backgroundImage: 'url(\'https://powtoon-prod-static.s3.amazonaws.com/cms-assets/home-new/digit.png\')', backgroundRepeat: 'no-repeat', backgroundPosition: '0px 0px' }}>
                            <span style={{ visibility: 'hidden' }}>1</span>
                        </span>
                        {/* Add more counter-digit spans as needed with different background positions */}
                        <input type="hidden" name="counter-value" value="114727579.51891886" />
                    </span>
                    <span className="created-text">powtoons<br />created</span>
                </div>

                <div className="user-logo-block">
                    <span>Used By:</span>
                    <ul className="user-logo">
                        <li className="coke"><i className="sprite sprite-cocacola"></i></li>
                        <li className="pfizer"><i className="sprite sprite-pfizer-logo"></i></li>
                        <li className="ebay"><i className="sprite sprite-ebay"></i></li>
                        <li className="costko"><i className="sprite sprite-costco"></i></li>
                        <li className="starbucks"><i className="sprite sprite-user-logo"></i></li>
                        <li className="cisco"><i className="sprite sprite-cisco"></i></li>
                    </ul>
                </div>
            </div>

            {/* box-3 */}
            <div>

                <h2 className="mt-20">
                    Break through the noise with
                    <br />
                    visual communications
                </h2>
                <p className="sub" style={sub}>
                    Communicating visually with short videos and animation allows your<br />
                    entire team to achieve more, no matter what kind of work you do.
                </p>
            </div>



            {/* box-4 */}


            {/* box-5 */}
            <div style={{ fontFamily: "Poppins" }} className="usedby bg-[#4e18dd] flex justify-center items-center text-white py-20 text-center">
                <div className="container grid justify-center items-center" >
                    <h2 className="text-3xl font-semibold mb-12">
                        Powtoon is used by 96% of Fortune 500 Companies
                    </h2>
                    <img
                        alt="usedby"
                        className="switchimage items-center mb-2"
                        src="https://static.powtoon.co/cldn/site/home%20page/usedby.png"
                    />
                    <div>

                        <a
                            className="mt-4 bg-white text-[#4643f0] font-semibold  py-4 px-20 rounded-full hover:bg-blue-500 hover:text-white"
                            href="/enterprise"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>

            {/* box-6 */}

            <div style={{ fontFamily: "Poppins" }} className=" grid mx-20 justify-center items-center text-white py-20 text-center">

                <h2 className="text-[#331877] text-4xl font-bold mb-8">Why Visual Communications? Why Powtoon?</h2>
                <div className="visual-tabs grid justify-center align-center">
                    <ul className="categories-tabs flex justify-center items-center px-5  mb-10 visual-tabs w-full">
                        <li
                            className="category-tab w-1/5 "
                            style={selectedTab === 1 ? tabStyles.activeCategoryTab : tabStyles.categoryTab}
                            data-tab="1"
                            onClick={() => handleTabClick(1)}
                        >
                            <img  alt="you can create" src="https://static.powtoon.co/cldn/site/lp/unbounce_hp/yes-you-can.png" />
                            <p className='text-black px-8'>Yes, you can create your own videos!</p>
                        </li>
                        <li
                            className="category-tab w-1/5"
                            style={selectedTab === 2 ? tabStyles.activeCategoryTab : tabStyles.categoryTab}
                            data-tab="2"
                            onClick={() => handleTabClick(2)}
                        >
                            <img alt="work smart" src="https://static.powtoon.co/cldn/site/lp/unbounce_hp/work-smart.png" />
                            <p className='text-black px-8'>Work smarter, not harder</p>
                        </li>
                        <li
                            className="category-tab w-1/5"
                            style={selectedTab === 3 ? tabStyles.activeCategoryTab : tabStyles.categoryTab}
                            data-tab="3"
                            onClick={() => handleTabClick(3)}
                        >
                            <img alt="noise" src="https://static.powtoon.co/cldn/site/lp/unbounce_hp/benefits-thumbnails-4.png" />
                            <p className='text-black  px-8'>Miscommunication is costing you</p>
                        </li>
                        <li
                            className="category-tab w-1/5"
                            style={selectedTab === 4 ? tabStyles.activeCategoryTab : tabStyles.categoryTab}
                            data-tab="4"
                            onClick={() => handleTabClick(4)}
                        >
                            <img alt="get more" src="https://static.powtoon.co/cldn/site/lp/unbounce_hp/get-more.png" />
                            <p className='text-black  px-8'>Get more from your existing platforms</p>
                        </li>
                        <li className="category-tab w-1/5"
                            style={selectedTab === 5 ? tabStyles.activeCategoryTab : tabStyles.categoryTab}
                            data-tab="5"
                            onClick={() => handleTabClick(5)}
                        >
                            <img alt="benefits" src="https://static.powtoon.co/cldn/site/lp/unbounce_hp/benefits-thumbnails.png" />
                            <p className='text-black   px-8'>Bring visual experiences to your entire business</p>
                        </li>
                    </ul>

                    <hr />

                    {/* second unorderList */}
                    <ul className="tabs-content my-5 px-10">
                        <li data-tab-content="1" className={selectedTab === 1 ? 'active flex justify-center items-center px-8' : 'hidden'}>
                            <span className="mob-close">X</span>
                            <p className='text-black w-2/4 text-2xl font-light text-left'>No matter your skill level or the task at hand, creating visual communications with Powtoon amplifies your results. Tell compelling stories through hundreds of animated characters, templates, video backgrounds, soundtracks, and more. With Powtoon, making your own videos requires no design or tech skills to start making a deeper impact at work.</p>
                            <div>
                                <img src="https://uploads-ssl.webflow.com/604eb6ba0b6beb14f8ba505c/63f633bc4c0c1b3b7caabb6f_Create%20your%20own%20videos%20.webp" alt="creating visual communications" className='w-full' />
                            </div>
                        </li>
                        <li data-tab-content="2" className={selectedTab === 2 ? 'active flex justify-center items-center px-8' : 'hidden'}>
                            <span className="mob-close">X</span>
                            <p className='text-black w-2/4 text-2xl font-light  text-left'>Powtoon’s professionally-designed templates help you create more video & visual content faster. Build off of the successes of over 40 million users worldwide in every kind of business, and benefit from tons of helpful tips, tricks, training sessions, and guides created to shorten the learning curve and help you get measurable results.</p>
                            <div>
                                <img src="https://uploads-ssl.webflow.com/604eb6ba0b6beb14f8ba505c/63f633bc5af1251b1c05a782_Work%20smarter%2C%20not%20harder%20copy.webp" alt="designed templates" className='w-full' />
                            </div>
                        </li>
                        <li data-tab-content="3" className={selectedTab === 3 ? 'active flex justify-center items-center px-8' : 'hidden'}>
                            <span className="mob-close">X</span>
                            <p className='text-black w-2/4 text-2xl font-light text-left'>On average, SMBs lose $420,000 a year to miscommunication between employees. And in large enterprises, that figure grows to a whopping $62.4 million per year. Empower your company to bring down those unseen costs and replace them with higher revenue and a company that actually communicates effectively.</p>
                            <div>
                                <img src="https://uploads-ssl.webflow.com/604eb6ba0b6beb14f8ba505c/63f633bc73ee6b50148a87ab_Miscommunication%20is%20costing%20you%20copy.webp" alt="communicate effectively" className='w-full' />
                            </div>
                        </li>
                        <li data-tab-content="4" className={selectedTab === 4 ? 'active flex justify-center items-center px-8' : 'hidden'}>
                            <span className="mob-close">X</span>
                            <p className='text-black w-2/4 text-2xl font-light text-left'>Building a company intranet, using an LMS or LXP, populating your blog or website, and spreading delightful animated videos and visual messages to your audience via email or social media has never been easier. Get the most out of these platforms by sharing visual experiences that boost your results.</p>
                            <div>
                                <img src="https://uploads-ssl.webflow.com/604eb6ba0b6beb14f8ba505c/63f633bcae677508263818d7_Get%20more%20from%20your%20existing%20platformscopy.webp" alt="spreading animated videos" className='w-full' />
                            </div>
                        </li>
                        <li data-tab-content="5" className={selectedTab === 5 ? 'active flex justify-center items-center px-8' : 'hidden'}>
                            <span className="mob-close">X</span>
                            <p className='text-black w-2/4 text-2xl font-light text-left'>For enterprise-grade data security, compliance, team and license management, collaboration, and additional capabilities that were developed especially for large organizations, Powtoon Business empowers you to transform everyday communications into powerful visual experiences, company-wide. See every department grow in reach and impact with our highest level of service and security.</p>
                            <div>
                                <img src="https://uploads-ssl.webflow.com/604eb6ba0b6beb14f8ba505c/63f633bd56b5941de19ccdec_Bring%20visual%20experiences%20to%20your%20entire%20business%20copy%20%20copy.webp" alt="enterprise solutions" className='w-full' />
                            </div>
                        </li>
                    </ul>


                    <div>

                        <a href="/account/" className="btn form-btn trackmt-4 bg-[#4643f0] text-white font-semibold  py-4 px-20 rounded-full hover:bg-blue-500 hover:text-white" data-action="click" data-category="CTA" data-label="start_now" data-value="20026">
                            START NOW
                        </a>
                    </div>
                </div>





            </div>
            {/* box-7 */}

            <div style={{ fontFamily: "Poppins" }} className=" bg-[#4e18dd] grid justify-center items-center text-white py-20 text-center">
                <div>
                    <h2 className="text-4xl mx-3">Over 40 Million Happy Customers</h2>
                    <h6 className="text-xl mb-10">Here’s what they have to say...</h6>
                </div>

                <Swiper
                    style={{ width: '1000px', alignItems: "center", marginRight: '30px' }}
                    cssMode={true}

                    mousewheel={true}
                    keyboard={true}
                    modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {CarouselInfo.map((item) => (
                        <SwiperSlide key={item.index} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }} className="mx-12">
                            <img alt={item.imageAlt} src={item.imageSrcSet} />

                            <div>
                                <h6 className="w-full text-3xl mb-4">{item.imageH6}</h6>

                                <p className="  text-xl"><b>{item.imageB}</b> {item.imagePara} {item.imagePara2}</p>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}