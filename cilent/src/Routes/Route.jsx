import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar"
import { Home } from "../Pages/Home"



export const Route = () => {
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route />


            </Routes>
            <Home/>
        </div>
    )
}