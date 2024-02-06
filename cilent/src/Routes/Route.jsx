import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar"
import { Home } from "../Pages/Home"
import { Footer } from "../Components/Footer/Footer";



export const AppRoutes = () => {
    return(
        <div>
            <Navbar/>
    
            <Home/>
            <Footer/>
        </div>
    )
}