import React from 'react';
import Navbar from '../../Navbar/Navbar';
import {Container, Row, Col, Button} from 'react-bootstrap'
import headerImg from '../../../../images/logos/header-img.png'
import headerBg from '../../../../images/header-bg.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header-container' style={{background:`url(${headerBg}) no-repeat`, height:'700px',backgroundSize:'cover' }}>
            <Navbar></Navbar>
            <Container className='mt-5'>
                <Row xs={12} className='align-items-center'>
                    <Col md={5} >
                        <h1 style={{fontWeight:'bold', color:'#111430'}} className='header-font'>
                            Let's Grow Your Brand To The Next Level
                        </h1>
                        <Button className='btn-dark mt-3 px-4'>Hire me</Button>
                    </Col>
                    <Col md={7} >
                        <img style={{width:'90%'}} src={headerImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;