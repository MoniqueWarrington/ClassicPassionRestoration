/* eslint-disable react/style-prop-object */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClassicPassionLogo from '../static/ClassicPassionLogo.jpg';
import CSS from 'csstype';
import { Button } from 'react-bootstrap';

const LandingPageText: CSS.Properties = {
   paddingTop: '150px'
  };


function LandingPage() {
  return (
    <Container>
        <Row>
            <Col style={LandingPageText}>
                <h1>Classic Passion Restoration</h1>
                <h3>Your classic, our passion</h3>
                <p>Really cool blurb about how we build amazing cars really well and how we can 
                    definfitely build you whatever you like as long as you pay us those big $$$</p>
                <Button variant="primary">About Us</Button>
            </Col>
            <Col>
                <Image src={ClassicPassionLogo} fluid />
            </Col>
        </Row>
    </Container>
  );
}

export default LandingPage;