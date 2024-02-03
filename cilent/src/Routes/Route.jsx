import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar"
import { Home } from "../Pages/Home"



export const AppRoutes = () => {
    return(
        <div>
            <Navbar/>
            <Routes>
               


            </Routes>
            <Home/>
        </div>
    )
}