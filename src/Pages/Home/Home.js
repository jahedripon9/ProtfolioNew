import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import WhatIDo from '../HeroSection/WhatIDo';
// import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Share/Header/Header';

const Home = () => {
    return (
       <div bg="light">
           <Header></Header>
           <HeroSection></HeroSection>
           <WhatIDo></WhatIDo>

       </div>
    );
};

export default Home;