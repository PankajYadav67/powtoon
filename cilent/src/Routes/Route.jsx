import { Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar"
import { Home } from "../Pages/Home"
import { Login } from "../Components/Auth/Login/Login";
import { SignUp } from "../Components/Auth/SignUp/SignUp";
import { Education } from "../Pages/Education";
import { Pricing } from "../Pages/Pricing";
import { Enterprise } from "../Pages/Enterprise";



export const AppRoutes = () => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    // Define paths where you don't want to show the main Navbar
    const excludedPaths = ["/auth/login", "/auth/signup"];

    // Conditionally render the Navbar
    const renderNavbar = !excludedPaths.includes(currentPath);
    return(
        <div>
            {renderNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/auth/login" element={<Login />}/>
                <Route path="/edu-home/" element={<Education />}/>
                <Route path="/auth/signup" element={<SignUp />}/>
                <Route path="/premium" element={<Pricing />}/>
                <Route path="/enterprise" element={<Enterprise />}/>
            </Routes>
          
            
        </div>
    )
}