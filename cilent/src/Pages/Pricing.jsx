import { Stack, Switch } from '@chakra-ui/react'
import { Footer } from '../Components/Footer/Footer'
import { useState } from 'react'


export const Pricing = () => {
    const [isToggle, setIsToggle] = useState(false);


    const amount1 = isToggle ? 15 : 40;
    const amount2 = isToggle ? 40 : 190;
    const amount3 = isToggle ? 125 : 125;
    const span1 = isToggle ? "$180 / Billed Yearly" : "$Billed Monthly";
    const span2 = isToggle ? "$480 / Billed Yearly" : "$Billed Monthly";
    const span3 = isToggle ? "$1500 / Billed Yearly" : "Aunnal Only";


    const handleToggleChange = () => {
        setIsToggle((prevToggle) => !prevToggle);
    };

    return (
        <>
            <div className='mx-14 mb-12'>
                <div className='my-12 h-24 space-y-2'>
                    <div className='flex justify-around items-center '>
                        <h1 className='text-3xl   font-bold text-[#424f61] '></h1>
                        <h1 className='text-3xl   font-bold text-[#424f61] '></h1>
                        <h1 className='text-3xl font-bold text-[#424f61]'
                        >Pricing &amp; Plans
                        </h1>
                        <div className='flex justify-end'>
                            <button className=' px-4 font-black py-1 ring-1 ring-[#2c4cf3] text-[#2c4cf3] hover:text-[#424f61] hover:ring-black'>ENTERPRISE PLANS</button>
                        </div>
                    </div>

                    <div>
                        <h6 className='flex justify-center items-center gap-3'>
                            Monthly
                            <Stack align='center' direction='row'>
                                <Switch size='md' colorScheme='gray' isChecked={isToggle} onChange={handleToggleChange} />
                            </Stack>
                            Annual
                        </h6>
                    </div>
                </div>



                {/* box-2 */}
                <div className='h-96 flex justify-around items-center my-5'>

                    {/* lite */}
                    <div className='ring-[#858585] ring-2  w-72  grid justify-center items-center px-5'>
                        <div className='flex justify-center items-center  pb-3 pt-5 font-bold'>
                            <h2 className='font-black text-2xl'>
                                LITE
                            </h2>
                        </div>

                        <div className="flex justify-center items-center plan__benefits__icon">
                            <div className="icon icon--premium icon--premium--pro">
                                <svg viewBox="0 0 257.57 230.69" width="105" height="95">
                                    <defs>
                                        <style type="text/css">
                                            {`
            #main_2 .cls-1{opacity:0.54;}
            #main_2 .cls-2{fill:#7d9af4;}
            #main_2 .cls-3{fill:#2c4cf3;}
            #main_2 .cls-4{fill:#fff;}
            #main_2 .cls-5{fill:blue;}
            #main_2 .cls-6{fill:#6991e2;}
          `}
                                        </style>
                                    </defs>
                                    <g id="main_2">
                                        <g>
                                            <g className="cls-1">
                                                <path className="cls-2" d="M127.55,206.31c-145.48,0-136.16,12.23-116.63,17.83,13.82,4,36.67,5.83,58.65,6.34a472.9,472.9,0,0,0,51.37-1.11c9-.7,10.08-2.54,7.42-3.71-9.37-4.13,26-3.65,32.19-3.65,40.61,0,97-.89,97-7.55S147.19,206.31,127.55,206.31Z"></path>
                                            </g>
                                            <path className="cls-3" d="M109.82,215.78a1.5,1.5,0,0,1-1.48-1.28A30.12,30.12,0,0,0,50,209.43a1.5,1.5,0,0,1-2.85-1,33.12,33.12,0,0,1,64.17,5.58,1.5,1.5,0,0,1-1.26,1.71Z"></path>
                                            <path className="cls-3" d="M184.71,136.21H67.85a2,2,0,0,1-1.62-.82c-1-1.32-1.08-5.66-.37-12.89s7.14-14.57,15.29-24c4.39-5.08,9.36-10.83,14.08-17.3a94.35,94.35,0,0,0,9.4-17.43l.36-.87.17-.42a1.93,1.93,0,0,1,.08-.25c.49-1.12.87-2,1.23-2.88.56-1.37,1.11-2.77,1.65-4.18,9.41-24.51,16.22-41.84,16.29-42a2,2,0,0,1,2-1.27,2,2,0,0,1,1.83,1.44c.14.46,13.74,46.73,29.13,67.86,4.72,6.47,9.69,12.23,14.08,17.31,8.15,9.43,14.59,16.88,15.29,24s.59,11.58-.37,12.89A2,2,0,0,1,184.71,136.21ZM69.66,133.36Zm113.25,0ZM69.48,132.21H183.09a54.87,54.87,0,0,0-.36-9.32c-.58-5.86-6.65-12.88-14.33-21.77-4.44-5.14-9.47-11-14.29-17.57C141.35,66,130.19,33.08,126.05,20c-2.72,7-7.86,20.17-14.18,36.64q-.83,2.16-1.69,4.26c-.35.85-.72,1.72-1.19,2.79a1.87,1.87,0,0,1-.07.21l-.23.55-.39.93a98.12,98.12,0,0,1-9.84,18.19C93.65,90.16,88.62,96,84.18,101.11,76.49,110,70.42,117,69.84,122.89A55,55,0,0,0,69.48,132.21Z"></path>
                                            <path className="cls-4" d="M141.62,28.53A34.41,34.41,0,0,0,140,19.21a62.63,62.63,0,0,0-13.5-1.61A53.24,53.24,0,0,0,113,19.41a34.11,34.11,0,0,0-1.55,9.12l-10,105.68h50.21Z"></path>
                                            <path className="cls-3" d="M151.62,136.21H101.41a2,2,0,0,1-2-2.19l10-105.59A36.33,36.33,0,0,1,111,18.85a2,2,0,0,1,1.41-1.37,55,55,0,0,1,14.07-1.88,64.2,64.2,0,0,1,13.93,1.66,2,2,0,0,1,1.48,1.38,36.6,36.6,0,0,1,1.7,9.8l10,105.59a2,2,0,0,1-2,2.19Zm-48-4h45.82L139.63,28.72c0-.06,0-.13,0-.19a30.49,30.49,0,0,0-1.2-7.62,59.06,59.06,0,0,0-11.9-1.31,50.67,50.67,0,0,0-11.95,1.47,30.29,30.29,0,0,0-1.16,7.47c0,.06,0,.13,0,.19Zm40-103.68h0Z"></path>
                                            <path className="cls-4" d="M126.51,2h0c-5.93,0-11.09,9-13.56,17.41a53.24,53.24,0,0,1,13.56-1.81A62.63,62.63,0,0,1,140,19.21C137.52,10.9,132.4,2,126.51,2Z"></path>
                                            <path className="cls-3" d="M113,21.41A2,2,0,0,1,111,18.85C113.6,10.15,119.19,0,126.51,0s12.83,10,15.41,18.63a2,2,0,0,1-2.35,2.53,60.22,60.22,0,0,0-13.06-1.56,51,51,0,0,0-13,1.74A2,2,0,0,1,113,21.41ZM126.51,4c-3.91,0-8,5.94-10.52,12.66a54,54,0,0,1,10.52-1.06,60.94,60.94,0,0,1,10.48,1C134.45,9.91,130.39,4,126.51,4Z"></path>
                                            <path className="cls-3" d="M146.53,212.79a1.5,1.5,0,0,1-1.44-1.93,33.13,33.13,0,0,1,61.25-5.53,1.5,1.5,0,0,1-2.67,1.36,30.13,30.13,0,0,0-55.7,5A1.5,1.5,0,0,1,146.53,212.79Z"></path>
                                            <path className="cls-4" d="M85,215.9a38.91,38.91,0,0,1,77.83,0"></path>
                                            <path className="cls-3" d="M162.81,217.4a1.5,1.5,0,0,1-1.5-1.5,37.41,37.41,0,1,0-74.83,0,1.5,1.5,0,0,1-3,0,40.41,40.41,0,1,1,80.83,0A1.5,1.5,0,0,1,162.81,217.4Z"></path>
                                            <circle className="cls-5" cx="126.28" cy="167.84" r="2.5"></circle>
                                            <path className="cls-5" d="M126.28,160.34a2,2,0,0,1-2-2v-14a2,2,0,1,1,4,0v14A2,2,0,0,1,126.28,160.34Z"></path>
                                            <rect className="cls-6" height="34.8" rx="1.16" ry="1.16" width="19.72" x="18.06" y="179.99"></rect>
                                            <rect className="cls-3" height="30.16" rx="1.16" ry="1.16" width="19.72" x="8.78" y="184.63"></rect>
                                            <rect className="cls-4" height="3.48" rx="1.16" ry="1.16" width="3.48" x="12.84" y="189.85"></rect>
                                            <rect className="cls-4" height="3.48" rx="1.16" ry="1.16" width="3.48" x="18.64" y="189.85"></rect>
                                            <rect className="cls-4" height="3.48" rx="1.16" ry="1.16" width="3.48" x="12.84" y="195.65"></rect>
                                            <rect className="cls-4" height="3.48" rx="1.16" ry="1.16" width="3.48" x="18.64" y="195.65"></rect>
                                            <rect className="cls-4" height="3.48" rx="1.16" ry="1.16" width="3.48" x="12.84" y="201.45"></rect>
                                            <rect className="cls-4" height="3.48" rx="1.16" ry="1.16" width="3.48" x="18.64" y="201.45"></rect>
                                            <rect className="cls-3" height="35.37" rx="3.57" ry="3.57" width="7.13" x="161.81" y="108.99"></rect>
                                            <rect className="cls-3" height="35.37" rx="3.57" ry="3.57" width="7.13" x="84.24" y="108.99"></rect>
                                            <circle className="cls-4" cx="126.51" cy="40.21" r="7.95"></circle>
                                            <path className="cls-3" d="M126.51,50.16a10,10,0,1,1,10-10A10,10,0,0,1,126.51,50.16Zm0-15.91a6,6,0,1,0,6,6A6,6,0,0,0,126.51,34.25Z"></path>
                                            <rect className="cls-6" height="25.63" rx="1.21" ry="1.21" width="18.16" x="224.62" y="186.68"></rect>
                                            <rect className="cls-3" height="31.48" rx="1.21" ry="1.21" width="20.59" x="213.12" y="180.35"></rect>
                                            <rect className="cls-4" height="3.63" rx="1.55" ry="1.55" width="11.3" x="219.98" y="186.2"></rect>
                                            <rect className="cls-4" height="3.63" rx="1.55" ry="1.55" width="11.3" x="219.98" y="192.86"></rect>
                                            <rect className="cls-4" height="3.63" rx="1.55" ry="1.55" width="11.3" x="219.98" y="199.52"></rect>
                                            <path className="cls-3" d="M162.81,217.4a1.5,1.5,0,0,1-1.5-1.5,37.41,37.41,0,1,0-74.83,0,1.5,1.5,0,0,1-3,0,40.41,40.41,0,1,1,80.83,0A1.5,1.5,0,0,1,162.81,217.4Z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className='grid justify-center items-center pt-5'>
                            <div className='flex justify-center items-center'>
                                <span className='text-[#858585] text-xl'>$</span>
                                <span className='text-5xl font-extrabold'>{amount1}</span>
                            </div>
                            <span style={{ fontSize: "11px" }} className='font-bold'>
                                {span1}
                            </span>
                        </div>

                        <div className='pt-2 px-4 pb-10'>
                            <ul style={{ fontSize: "13px" }} className="list-disc text-gray-600">
                                <li>Export without Powtoon branding</li>
                                <li>5 premium exports per month</li>
                                <li>Download as mp4</li>
                                <li>Access to free assets & templates</li>
                                <li>Length up to 10 min</li>
                            </ul>
                        </div>

                        <div className='py-6  flex justify-center items-center '>
                            <button style={
                                {
                                    fontSize: "17px"
                                }
                            } className='ring-1 ring-black w-10/12 font-semibold text-[#686868] py-2 px-8 hover:text-white hover:bg-blue-800'>
                                GET PLAN
                            </button>
                        </div>

                    </div>

                    {/* PROFESSIONAL */}
                    <div className='ring-[#858585] bg-[#cce6f9] w-80 ring-2 grid justify-center items-center px-5'>
                        <div className='flex justify-center items-center pb-3 pt-5 font-bold'>

                            <h2 className='font-black text-2xl text-[#2C4CF3]'>
                                PROFESSIONAL
                            </h2>
                        </div>
                        <div className="flex justify-center items-center plan__benefits__icon">
                            <div className="icon icon--premium icon--premium--proplus">
                                <img src="https://res.cloudinary.com/powtoon-dev/image/upload/v1585478747/site/pricing-assets/pro_2.svg" alt="Premium Icon" />
                            </div>
                        </div>

                        <div className=' grid justify-center items-center pt-5'>
                            <div className='flex justify-center items-center text-[#2C4CF3]'>
                                <span className='text-3xl'>$</span>
                                <span className='text-5xl font-black'>{amount2}</span>
                            </div>
                            <span style={{ fontSize: "11px" }} className='font-bold'>
                                {span2}
                            </span>
                        </div>

                        <div className='pt-2 px-4 pb-10'>
                            <ul style={{ fontSize: "13px" }} className="list-disc  text-gray-600">
                                <li>Everything in Lite</li>
                                <li>Unlimited premium exports</li>
                                <li>Access to complete content library</li>
                                <li>Access to all images, footage & music</li>
                                <li>Access to all PRO templates</li>
                                <li>Length up to 20 mins</li>
                            </ul>
                        </div>

                        <div className='py-6  flex justify-center items-center '>
                            <button style={
                                {
                                    fontSize: "17px"
                                }
                            } className='ring-1 ring-black w-10/12 font-semibold hover:bg-blue-900 hover:text-white py-2 px-8 text-white bg-blue-800'>
                                GET PLAN
                            </button>
                        </div>

                    </div>

                    <div className='ring-[#858585] ring-2  w-72 grid justify-center items-center px-5 '>
                        <div className='flex justify-center items-center pb-3 pt-5 font-bold'>
                            <h2 className='font-black text-2xl text-[#a1a1a1]'>
                                BUSINESS
                            </h2>
                        </div>

                        <div className="flex justify-center items-center plan__benefits__icon">
                            <div className="icon icon--premium icon--premium--proplus">
                                <img src="https://res.cloudinary.com/powtoon-dev/image/upload/v1585478747/site/pricing-assets/pro_2.svg" alt="Premium Icon" />
                            </div>
                        </div>

                        <div className='pt-5 grid justify-center text-[#858585] items-center'>
                            <div className='flex justify-center items-center'>
                                <span className=' text-xl'>$</span>
                                <span className='text-5xl font-extrabold'>{amount3}</span>
                            </div>
                            <span style={{ fontSize: "11px" }} className='font-bold'>
                                {span3}
                            </span>
                        </div>

                        <div className='pt-2 px-4 pb-10'>
                            <ul style={{ fontSize: "13px" }} className="list-disc text-gray-600">
                                <li>Everything in Lite</li>
                                <li>Unlimited premium exports</li>
                                <li>Access to complete content library</li>
                                <li>Access to all images, footage & music</li>
                                <li>Access to all PRO templates</li>
                                <li>Length up to 20 mins</li>
                            </ul>
                        </div>
                        <div className='py-6  flex justify-center items-center '>
                            <button style={
                                {
                                    fontSize: "17px"
                                }
                            } className='ring-1 ring-black w-10/12 font-semibold py-2 px-8 text-[#858585] '>
                                AUNNAL ONLY
                            </button>
                        </div>
                    </div>

                </div>

            </div>
            {/* box-3 */}
            <div className='mx-20 mt-24'>

                <div className='h-10 bg-[#f5f7fc] text-[#424f61] flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-4 '>
                        <p className='font-bold text-sm'>

                        ALL PLANS INCLUDE: 
                        </p>
                        <p style={{fontSize: "14px"}}>Powtoon branding removed | Download as MP4 | Full HD video (1080p) | Full privacy control | Commercial rights | 24/7 priority support</p>

                    </span>
                </div>
            </div>


            <Footer />

        </>
    )
}