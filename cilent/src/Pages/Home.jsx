

export const Home = () => {
    const sub = {
        fontSize: '19px',
        color: 'rgb(73, 11, 230)',
        textAlign: 'center',
        lineHeight: '1.45',
        fontWeight: 200,
    };
    return (
        <div>




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
            <div className="usedby bg-[#4e18dd] flex justify-center items-center text-white py-10 text-center">
                <div className="container items-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Powtoon is used by 96% of Fortune 500 Companies
                    </h2>
                    <img
                        alt="usedby"
                        className="switchimage items-center"
                        src="https://static.powtoon.co/cldn/site/home%20page/usedby.png"
                    />
                    <a
                        className="mt-4 bg-white text-[#4e18dd] font-bold py-2 px-4 rounded-full"
                        href="/enterprise/"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>
        </div>
    )
}