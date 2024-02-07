// import Swiper bundle with all modules installed
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { CarouselInfo } from '../Constants/CarouselInfo';

export const Home = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [selectedTabWrap, setSelectedTabWrap] = useState(1);

    const handleTabClick = (tabNumber) => {
        setSelectedTab(tabNumber);
    };


    const handleWrapClick = (tabNumber) => {
        setSelectedTabWrap(tabNumber);
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
            <div className='bg-[#4e18dd]  text-white h-[500px] '>
                <div className='mx-14 px-14 pt-16'>
                    <h2 className='text-4xl font-black '>Create Jaw-Dropping
                        <br />Videos and Presentations</h2>
                    <p className='text-lg  text-left'>Harness the power of toons to bring your message to life, making your viewers say “Got it!” with a little extra POW!</p>
                    <h6 className='text-xl text'>Get started for free today!</h6>
                    <button className='rounded-full bg-white text-blue-700'>START NOW</button>
                </div>
                <div className='mx-14'>

                </div>
            </div>

            {/* box-2 */}
            <div className="our-user flex mx-14 justify-center items-center user-block">
                <div className="flex justify-center items-center">
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
            <div className='grid justify-center items-center mx-14 mb-8'>

                <h2 className="mt-20 text-4xl text-center font-bold text-[#331877] mb-4">
                    Break through the noise with
                    <br />
                    visual communications
                </h2>
                <p className="sub text-[#490BE6] text-xl font-light" style={sub}>
                    Communicating visually with short videos and animation allows your<br />
                    entire team to achieve more, no matter what kind of work you do.
                </p>
            </div>



            {/* box-4 */}
            <div className='mx-14'>
                <div className="categories flex justify-center items-center tab-wrapper">
                    <ul className="categories-tabs grid   justify-start  items-center w-6/12 ">
                        <li className="py-5 hover:text-[#42a5f5] cursor-pointer" data-tab="1" onClick={() => handleWrapClick(1)}>
                            <h4 className='text-2xl font-bold  pb-1'>HR</h4>
                            <p>Recruit, Onboard, &amp; Retain Top Talent</p>
                        </li>
                        <hr />
                        <li data-tab="2" className="py-5 hover:text-[#42a5f5] cursor-pointer" onClick={() => handleWrapClick(2)}>
                            <h4 className='text-2xl font-bold  pb-1'>Training and L&amp;D</h4>
                            <p>Develop transformational leadership</p>
                        </li>
                        <hr />
                        <li data-tab="3" className=" py-5 hover:text-[#42a5f5] cursor-pointer" onClick={() => handleWrapClick(3)}>
                            <h4 className='text-2xl font-bold  pb-1'>Internal Communications</h4>
                            <p>Inspire genuine employee engagement</p>
                        </li>
                        <hr />
                        <li data-tab="4" className="py-5 hover:text-[#42a5f5] cursor-pointer" onClick={() => handleWrapClick(4)}>
                            <h4 className='text-2xl font-bold  pb-1'>Marketing</h4>
                            <p>Marketing strategy and lead generation with results you can measure</p>
                        </li>
                        <hr />
                        <li data-tab="5" className="py-5 hover:text-[#42a5f5] cursor-pointer" onClick={() => handleWrapClick(5)}>
                            <h4 className='text-2xl font-bold  pb-1'>Education</h4>
                            <p className='text-wrap'>For teachers &amp; students to inspire creativity and storytelling that will impress the whole class</p>
                        </li>
                    </ul>

                    <ul className="tabs-content  grid justify-center items-center my-10   pl-10">
                        <li data-tab-content="1" className={selectedTabWrap === 1 ? 'active grid justify-center items-center w-[750px] px-8 space-y-8' : 'hidden'}>

                            <picture>
                                <source srcSet="https://static.powtoon.co/images/hp/HR.webp" type="image/webp" />
                                <img alt="hr video template" className="main-img active" data-img="one" loading="lazy" src="https://static.powtoon.co/marketing/Landing_Pages/HR.png" />
                            </picture>
                            <p className='pl-5'>From talent acquisition to change management, visual communication helps your business stand out while you attract top talent, onboard new employees effectively, and retain them for the long haul.</p>
                            <div>

                                <a className=" bg-[#4643f0] text-white font-semibold  py-4 px-20 rounded-full cursor-pointer" data-action="click" data-category="CTA" data-label="create_hr_videos" data-value="50311" href="/solution/human-resources">CREATE AN HR VIDEO</a>
                            </div>
                        </li>
                        <li data-tab-content="2" className={selectedTabWrap === 2 ? 'active grid justify-center items-center w-[750px] px-8 space-y-8' : 'hidden'}>

                            <picture>
                                <source srcSet="https://static.powtoon.co/images/hp/Training.webp" type="image/webp" />
                                <img alt="training video maker" className="main-img" data-img="two" loading="lazy" src="https://static.powtoon.co/marketing/Landing_Pages/Training.png" />
                            </picture>
                            <p className='pl-5'>Training videos are just the first step to transforming the way your company grows. Creating visual experiences makes for integrated, bottom-up learning that bridges the skill gap in your organization.</p>
                            <div>

                                <a className=" bg-[#4643f0] text-white font-semibold  py-4 px-20 rounded-full cursor-pointer" data-action="click" data-category="CTA" data-label="learn_more_LnD" data-value="50308" href="/solution/learning-development">LEARN MORE</a>
                            </div>
                        </li>
                        <li data-tab-content="3" className={selectedTabWrap === 3 ? 'active grid justify-center w-[750px] items-center px-8 space-y-8' : 'hidden'}>

                            <picture>
                                <source srcSet="https://static.powtoon.co/images/hp/Internal_Comms.webp" type="image/webp" />
                                <img alt="internal comms video creating platform" className="main-img" data-img="three" loading="lazy" src="https://static.powtoon.co/marketing/Landing_Pages/Internal_Comms.png" />
                            </picture>
                            <p className='pl-5'>Fight information silos, email overload, and inconsistent communications to bridge the communication gap in your organization. Delivering your internal comms via video, animation, and visual content supports an engaged and connected company culture.</p>
                            <div>

                                <a className=" bg-[#4643f0] text-white font-semibold  py-4 px-20 rounded-full cursor-pointer" data-action="click" data-category="CTA" data-label="create_internal_comms_videos" data-value="50310" href="/solution/internal-communications">CREATE AN INTERNAL COMMS VIDEO</a>
                            </div>
                        </li>
                        <li data-tab-content="4" className={selectedTabWrap === 4 ? 'active grid justify-center items-center w-[750px]  px-8 space-y-8' : 'hidden'}>

                            <picture>
                                <source srcSet="https://static.powtoon.co/images/hp/Marketing.webp" type="image/webp" />
                                <img alt="Visual marketing video platform" className="main-img" data-img="four" loading="lazy" src="https://static.powtoon.co/marketing/Landing_Pages/Marketing.png" />
                            </picture>
                            <p className='pl-5'>Visual marketing — from brand awareness and explainer videos to sharing your quarterly ROI and annual marketing plans in a visually engaging way — makes a deeper impact and accelerates your company’s growth.</p>
                            <div>

                                <a className=" bg-[#4643f0] text-white font-semibold  py-4 px-20 rounded-full cursor-pointer" data-action="click" data-category="CTA" data-label="create_marketing_videos" data-value="50312" href="/solution/marketing">CREATE A MARKETING VIDEO</a>
                            </div>
                        </li>
                        <li data-tab-content="5" className={selectedTabWrap === 5 ? 'active grid justify-center items-center px-8 w-[750px] space-y-8' : 'hidden'}>

                            <picture>
                                <source srcSet="https://static.powtoon.co/images/hp/Education.webp" type="image/webp" />
                                <img alt="classroom video" className="main-img" data-img="five" loading="lazy" src="https://static.powtoon.co/marketing/Landing_Pages/Education.png" />
                            </picture>

                            <p className='pl-5 '>Flip the classroom, impress your teachers. Introduce blended learning and transform classroom lessons into visual experiences that will stick for a lifetime.</p>
                            <div className=''>
                                <a className="bg-[#4643f0] text-white font-semibold  py-4 px-20 rounded-full cursor-pointer" data-action="click" data-category="CTA" data-label="learn_more_edu" data-value="50309" href="/solution/education">LEARN MORE</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

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
                            <img alt="you can create" src="https://static.powtoon.co/cldn/site/lp/unbounce_hp/yes-you-can.png" />
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
                    <ul className="tabs-content flex justify-center items-center my-5 px-10">
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

                        <a href="/account/" className="btn form-btn trackmt-4 bg-[#4643f0] text-white   font-semibold  py-4 px-20 rounded-full hover:bg-blue-500 hover:text-white" data-action="click" data-category="CTA" data-label="start_now" data-value="20026">
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