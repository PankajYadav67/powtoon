import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { EducationConstantsData } from '../Constants/EdcationConstants';
import { Footer } from '../Components/Footer/Footer';


export const Education = () => {

    return (
        <>

            {/* box-1 */}
            <div className="top mx-14 flex justify-center items-center">
                {/* inside-1 */}
                <div className="left-cont ">
                    <div className="px-14 space-y-4 ">
                        <h2 className="text-[#2f4ffd] font-black text-4xl">
                            Create Awesome<br />
                            Videos &amp; Presentations<br />
                            for the Classroom.
                        </h2>

                        <p className="text-medium text-xl ">
                            Teachers &amp; students can now produce<br />
                            engaging videos, easy as 1-2-3.
                        </p>

                        <div className="pt-6">
                            <a className=" ring-1 px-12 py-2 bg-blue-600 text-white text-bold rounded-full ring-blue-600 hover:bg-white hover:text-blue-600"
                                href="/auth/signup">
                                TRY IT FREE
                            </a>{" "}
                            <a
                                className="watch-vid ring-1 px-12 py-2 text-bold text-green-600 rounded-full ring-green-600 hover:bg-green-600 hover:text-white"


                                href="https://fast.wistia.net/embed/iframe/n03qx09fs9"
                            >
                                WATCH VIDEO
                            </a>
                        </div>

                        <p className="text-black text-lg">
                            Want to bring Powtoon to your School, District, or University?{" "}
                            <br />
                            <span className="text-[#2f4ffd] underline">Contact Us</span>
                        </p>
                    </div>
                </div>
                {/* inside-2 */}
                <div>
                    <div className="rigth-cout">
                        <div className="wrapper-div">
                            <img src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1564917222/site/Solution-pages/fold-image.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>

            {/* box-2 */}
            <div className="used-by relative  flex justify-center items-center used-by-animate">
                <ul className="space-x-5 flex ">
                    <li className="text-xl font-bold">
                        <h6>USED BY:</h6>
                    </li>
                    <li className="w-[100px] h-[65px]">
                        <img
                            alt="Clever logo"
                            className="embodo"
                            src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1566114062/site/Solution-pages/CleverLogo.png"
                        />
                    </li>
                    <li className="w-[100px] h-[65px]">
                        <img
                            alt="Book Creator logo"
                            className="rutgers"
                            src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1566111296/site/Solution-pages/back-to-school-2019-13.png"
                        />
                    </li>
                    <li className="w-[100px] h-[65px]">
                        <img
                            alt="Google Drive logo"
                            className="discovery"
                            src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1566111296/site/Solution-pages/back-to-school-2019-14.png"
                        />
                    </li>
                    <li className="w-[100px] h-[65px]">
                        <img
                            alt="Kaltura logo"
                            className="school-tube"
                            src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1566111296/site/Solution-pages/back-to-school-2019-15.png"
                        />
                    </li>
                    <li className="w-[100px] h-[65px]">
                        <img
                            alt="TeachPeach logo"
                            className="edu-net"
                            src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1566111296/site/Solution-pages/back-to-school-2019-16.png"
                        />
                    </li>
                    <li className="w-[100px] h-[65px]">
                        <img
                            alt="Skoletube logo"
                            className="edu-net"
                            src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1566111296/site/Solution-pages/back-to-school-2019-17.png"
                        />
                    </li>
                    <li className="w-[100px] h-[65px]">
                        <img
                            alt="Indiana Uni logo"
                            className="edu-net"
                            src="https://res.cloudinary.com/powtoon-dev/image/upload/v1607524033/site/Indiana_grey.svg"
                        />
                    </li>
                </ul>
            </div>

            {/* box-3 */}
            <div>

            </div>
            {/* box-4 */}
            <div className="mid-second bg-green-400 flex justify-center items-center ">
                <div className="center-cont  flex justify-center items-center  ">
                    <img
                        alt="Computer image with people"
                        className="guide-img"
                        src="https://res.cloudinary.com/powtoon-dev/image/upload/f_auto,q_auto/v1561987103/site/Solution-pages/third-image-cont.png"
                    />
                    
                    <div className="text-container bg-white rounded-md">
                        <h4 className="text-2xl">Already have a PowerPoint<br />presentation you love?</h4>
                        <a className="text-[#2f4ffd] text-xl underline " href="/powtoon-for-powerpoint/">
                            Convert any PPT to a jaw-dropping<br />video with just a click
                        </a>
                    </div>
                </div>
            </div>


            {/* box-5 */}
            <div className=' h-28 bg-green-600'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{height: "500px", color: 'black' }}
                >
                    {
                        EducationConstantsData.map((data) => {
                            <SwiperSlide key={data.tabIndex} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }} className="mx-12">
                                <div className='flex justify-center items-center'>
                                    <div>
                                        <h2 className='text-3xl font-medium' >
                                            {data.leftSide.h2}
                                        </h2>
                                        <h5 >
                                            {data.leftSide.h5}
                                        </h5>
                                        <p >
                                            {data.leftSide.p}
                                        </p>
                                        <a href={data.leftSide.a.href}></a>
                                    </div>
                                    <div>
                                        <img src={data.rightSide.src} alt={data.rightSide.alt} />
                                    </div>
                                </div>

                            </SwiperSlide>
                        })
                    }

                </Swiper>

            </div>
            {/* box-6 */}
                    <Footer/>
            {/* box-7 */}


        </>
    )
}
