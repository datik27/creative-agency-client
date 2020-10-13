import React from 'react';
import Navbar from '../Navbar/Navbar';
import Feedbacks from './Feedbacks/Feedbacks';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Partners from './Partners/Partners';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Partners></Partners>
            <Services></Services>
            <Slider></Slider>
            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;