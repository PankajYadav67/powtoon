import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div id="navbarRoot" className="bg-[#4e18dd] h-20 flex justify-between items-center">
            <header id="header" className="flex justify-between w-full items-center mx-12">

                {/* Left side of the Navbar */}
                <div className="w-[#780px] flex justify-center items-center font-semibold text-white">
                    <a href="/">
                        <img src="https://library.powtoon.co/library/asset/15382/VCP_logo-02_pORGJlB.svg" alt="Powtoon logo" width={"200px"} height={"45px"} />
                    </a>

                    <nav role="navigation" className="mx-2 flex justify-center items-center space-x-1">
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
                                onMouseLeave={onClose}
                                fontSize={"larger"}
                            >
                                Create
                            </MenuButton>
                            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                                <MenuItem color={"black"}>5658
                                    {/* Content for Create Menu */}
                                </MenuItem>
                                {/* More MenuItems for Create Menu */}
                            </MenuList>
                        </Menu>

                        {/* Why Powtoon Menu */}
                        <Menu isOpen={isOpen}>
                            {/* Similar structure as Create Menu */}
                        </Menu>

                        {/* Solution Menu */}
                        <Menu isOpen={isOpen}>
                            {/* Similar structure as Create Menu */}
                        </Menu>

                        {/* EDU and Enterprise Links */}
                        <div><a href="">EDU</a></div>
                        <div><a href="">Enterprise</a></div>
                    </nav>
                </div>

                {/* Right side of the Navbar */}
                <div className="flex justify-end items-center font-semibold text-white space-x-5">
                    {/* Pricing Link */}
                    <a href="/premium">
                        <span>Pricing</span>
                    </a>

                    {/* Log In */}
                    <a href="/auth/login" className="transition duration-300 ease-in-out">
                        <span className="hover:border-b-2 border-gray-300">
                            Log In
                        </span>
                    </a>

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
