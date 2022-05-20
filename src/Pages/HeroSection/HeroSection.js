import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Slide } from 'react-reveal';
import WhatIDo from './WhatIDo';


const HeroSection = () => {
    return (
        <Slide bottom>
        <Container className=''>
            <Row>
            <Col sm={6}>

            <div className='my-5 '>
                <h1 className='display-4 font-weight-bold'>Jahed Ahmed Ripon</h1>
                <h5 className='text-right font-weight-bold'>JahedRipon9</h5>
                <p>A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact</p>
                <ListGroup horizontal>
                    <ListGroup.Item><img class=""width="30" height="30" src="https://i.ibb.co/TYVsB4K/github.png" alt=""/></ListGroup.Item>
                    <ListGroup.Item><img class=""width="30" height="30" src="https://i.ibb.co/Sv7mzY2/linkedin.png" alt=""/></ListGroup.Item>
                    <ListGroup.Item><img class=""width="30" height="30" src="https://i.ibb.co/pWqgSVY/google.png" alt=""/></ListGroup.Item>
                    <ListGroup.Item><img class=""width="30" height="30" src="https://i.ibb.co/p4WvYwh/facebook.png" alt=""/></ListGroup.Item>
                    <ListGroup.Item><img class=""width="30" height="30" src="
                    https://i.ibb.co/8PH4Cvb/twitter.png" alt=""/></ListGroup.Item>
                </ListGroup>
                <button className='py-2 px-4 rounded-pill bg-white my-3 '> ⭐ Star Me On Github</button>

            </div>

            </Col>
            <Col sm={6}><img class="img-fluid"width="auto" height="auto" src="
                    https://i.ibb.co/RCc2PFL/Screenshot-2022-05-20-at-15-10-58.png" alt=""/></Col>
            </Row>
        </Container>
        </Slide>
    );
};

export default HeroSection;