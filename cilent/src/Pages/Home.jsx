import { Carousel } from "react-responsive-carousel";


export const Home = () => {
    const CarouselInfo = [
        {
            index: 1,
            imageSrcSet:
                "https://static.powtoon.co/cldn/site/lp/unbounce_hp/group-5.png",
            imageAlt: "Roland Frei Training eLearning Expert and Instructor",
            imageH6:
                "“Powtoon enables us to share our best training explanations with our entire company. Until now, these lessons were exclusively provided during classroom lessons. But now, we make Powtoon videos available through our LMS. Students can watch the videos where, when, and as many times as they want.”",
            imageB: "Roland Frei ",
            imagePara: " | Training eLearning Expert & Instructor,",
            imagePara2: " Skyguide",
        },
        {
            index: 2,
            imageSrcSet:
                "https://static.powtoon.co/cldn/site/lp/unbounce_hp/group-7.png",
            imageAlt: "Ami Sheffield",
            imageH6:
                "“Powtoon is intuitive and helps create energized, fun, and attention-grabbing videos. It brings us into the future of learning.”",
            imageB: "Ami Sheffield ",
            imagePara: " | Instructional Designer,",
            imagePara2: " Conagra Brands",
        },
        {
            index: 3,
            imageSrcSet:
                "https://static.powtoon.co/cldn/site/lp/unbounce_hp/group-8.png",
            imageAlt: "Tony Wind Communication Specialist",
            imageH6:
                "“Powtoon has been a big help in breathing life into our otherwise bland company newsletters.”",
            imageB: "Tony Wind ",
            imagePara: " | Communication Specialist,",
            imagePara2: " ProVision",
        },
        {
            index: 4,
            imageSrcSet:
                "https://static.powtoon.co/cldn/site/lp/unbounce_hp/group-4.png",
            imageAlt: "Ryan Deiss CEO Digital Marketer",
            imageH6:
                "“Our subscription to Powtoon has paid for itself 100 times over.”",
            imageB: "Ryan Deiss ",
            imagePara: " | CEO,",
            imagePara2: " Digital Marketer",
        },
    ];

    const sub = {
        fontSize: '19px',
        color: 'rgb(73, 11, 230)',
        textAlign: 'center',
        lineHeight: '1.45',
        fontWeight: 200,
    };


    return (
        <div>

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

            <div style={{ fontFamily: "Poppins" }} className=" flex justify-center items-center text-white py-20 text-center">
                <div>
                    <h2>Over 40 Million Happy Customers</h2>
                    <h6>Here’s what they have to say...</h6>
                </div>
            </div>
            {/* box-7 */}

            <div style={{ fontFamily: "Poppins" }} className=" bg-[#4e18dd] grid justify-center items-center text-white py-20 text-center">
                <div>
                    <h2 className="text-4xl mx-3">Over 40 Million Happy Customers</h2>
                    <h6 className="text-xl">Here’s what they have to say...</h6>
                </div>
                <div style={{ fontFamily: "Poppins" }} className=" bg-[#4e18dd] text-white py-20">

                    <Carousel autoPlay>
                        {CarouselInfo.forEach((item) => (
                            <div key={item.index}>
                                <img alt={item.imageAlt} src={item.imageUrl} />
                                <div>
                                    <h6 className="w-1/2">{item.imageH6}</h6>
                                    <p className=""><b>{item.imageB}</b> {item.imagePara}{item.imagePara2}</p>
                                </div>
                            </div>
                        ))}
                        
                    </Carousel>

                </div>

            </div>
        </div>
    )
}