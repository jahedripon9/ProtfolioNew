import React from 'react';
import { Col, Container, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Slide } from 'react-reveal';

const WhatIDo = () => {
    return (
        <div>
            <Slide right>
            <Container >
            <Row>
                
                    <h1 className='text-center my-5'>What I Do?</h1>
                
                    
                <Col sm={6}>
                    <img class="img-fluid"width="auto" height="auto" src="https://i.ibb.co/wRbqZ7k/Screenshot-2022-05-20-at-15-11-10.png" alt=""/>
                </Col>
       
      
            <Col sm={6}>
            <div className='my-3 '>
                <h1>Data Science & AI</h1>

                <ListGroup horizontal className='my-4'>
                    <ListGroup.Item><img class=""width="50" height="50" src="https://i.ibb.co/88d2dtV/tensorflow1.png" alt=""/></ListGroup.Item>
                    <ListGroup.Item><img class=""width="50" height="50" src="https://i.ibb.co/MnqDS2P/kesar.png
                    " alt=""/></ListGroup.Item>
                    <ListGroup.Item><img class=""width="50" height="50" src="
                    https://i.ibb.co/NWrSNh8/python.png" alt=""/></ListGroup.Item>
                    <ListGroup.Item><img class=""width="50" height="50" src="
                    
                    https://i.ibb.co/rcBbmPx/pytroch.png" alt=""/></ListGroup.Item>
                </ListGroup>

                <p>⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases</p>
                <p>⚡ Experience of working with Computer Vision and NLP projects</p>
                <p>⚡ Complex quantitative modelling for dynamic forecasting and time series analysis</p>
                
                

            </div>

            </Col>
            
            
            </Row>
            </Container>
            </Slide>
        </div>
    );
};

export default WhatIDo;