import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Inspo from './Inspo';
import House from './House';

export default function RouterApp() {

    return (
        <Routes>
            {/* <Route path="/house" element={<House />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/inspo" element={<Inspo />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}