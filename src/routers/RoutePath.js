import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";

const RoutePath = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />} />   
                <Route path='/hakkimizda' element={<AboutUs />} />   
                <Route path='/iletisim' element={<Contact />} />   
                <Route path='/rezervasyon' element={<Reservation />} />   




            </Routes>
        
    );
}

export default RoutePath;
