import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
} from "@chakra-ui/react";
import { useAuth } from "../../Contexts/Auth.Context";

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isLoggedIn, logout } = useAuth();

    return (
        <div id="navbarRoot" className="bg-[#4e18dd] text-white  h-20 flex justify-between items-center">
            <header id="header" className="flex justify-between w-full items-center mx-12">

                {/* Left side of the Navbar */}
                <div className="w-[#780px] flex justify-center items-center font-semibold ">
                    <a href="/">
                        <img
                            src="https://library.powtoon.co/library/asset/15382/VCP_logo-02_pORGJlB.svg"
                            alt="Powtoon logo"
                            width={"200px"}
                            height={"45px"}
                            style={{ fill: "white" }}
                            className="filter grayscale  brightness-100  "
                        />
                    </a>

                    <nav role="navigation" className="mx-2 flex justify-center items-center space-x-4
                    .">
                        {/* Create Menu */}
                        <Menu isOpen={isOpen}>
                            <MenuButton
                                variant="ghost"
                                mx={1}
                                py={[1, 2, 2]}
                                px={4}
                                borderRadius={5}
                                _hover={{ bg: "gray.100" }}
                                aria-label="Courses"
                                fontWeight="normal"
                                onMouseEnter={onOpen}
                                fontSize={"larger"}
                            >
                                Create
                            </MenuButton>
                            <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose}>
                                <MenuItem fontSize="sm" color={"black"}>Videos</MenuItem>
                                <MenuItem fontSize="sm" color={"black"}>WhiteBoard Doodling</MenuItem>
                                <MenuItem fontSize="sm" color={"black"}>Animated Videos</MenuItem>
                                <MenuDivider />
                                <MenuItem fontSize="sm" color={"black"}>Screen Recordings</MenuItem>
                                <MenuItem fontSize="sm" color={"black"}>Presentations</MenuItem>
                                <MenuItem fontSize="sm" color={"black"}>Customs Character</MenuItem>
                         
                            </MenuList>
                        </Menu>

                        {/* Why Powtoon Menu */}
                        <Menu isOpen={isOpen}>
                          
                        </Menu>

                        {/* Solution Menu */}
                        <Menu isOpen={isOpen}>
                            {/* Similar structure as Create Menu */}
                        </Menu>

                        {/* EDU and Enterprise Links */}
                        <div><a href="/edu-home">EDU</a></div>
                        <div><a href="/enterprise">Enterprise</a></div>
                    </nav>
                </div>

                {/* Right side of the Navbar */}
                <div className="flex justify-end items-center font-semibold text-white space-x-5">
                    {/* Pricing Link */}
                    <a href="/premium" className="transition duration-300 ease-in-out">
                        <span className="hover:border-b-2 border-gray-300">Pricing</span>
                    </a>

                    {/* Log In */}
                    {isLoggedIn ? (
                        <button onClick={logout} className="hover:border-b-2 border-gray-300">
                            Log Out
                        </button>
                    ) : (
                        <a href="/auth/login" className="transition duration-300 ease-in-out">
                            <span className="hover:border-b-2 border-gray-300">
                                Log In
                            </span>
                        </a>
                    )}


                    {/* Sign Up  */}
                    <div>
                        <a href="/auth/signup">
                            <button className="bg-white text-blue-700 rounded-full p-3 border border-blue-700 hover:bg-blue-700 hover:text-white hover:border-transparent hover:ring-2 hover:ring-white transition duration-300 ease-in-out">
                                SIGN UP
                            </button>
                        </a>
                    </div>


                </div>
            </header>
        </div>
    );
};
