import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row,Container, Button } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import upload from '../../../images/icons/upload.png'
import './Order.css'
import {UserContext} from '../../../App'
const Order = () => {
    const [data]=useContext(UserContext)
    const [order,setOrder]=useState({status:'pending'})
    useEffect(()=>{
        setOrder({
            ...order,email:data.user?.email, 
            projectImage:data.service?.img,
            serviceTitle:data.service?.serviceTitle,
            projectDetails:data.service?.description,
            name:data.user?.name
        })
    },[data])
    console.log(data)
    const addOrderForm=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3001/add-order',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    const inputHandler=(e)=>{
        setOrder({...order,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={9} >
                <h4 className='mt-4 ml-5'>Order</h4>
                    <Container className='order-form-container'>
                    <Form onSubmit={addOrderForm}>
                        <Row xs={12} className='p-5'>
                            <Col xs={12} md={7} lg={6}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onBlur={inputHandler} name='name' type="name" placeholder="Your name / Company's name" value={order.name}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onBlur={inputHandler} name='email' type="email" placeholder="Your email address" value={order.email}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicTitle">
                                    <Form.Control onBlur={inputHandler} name='serviceTitle' type="title" placeholder="Service title" value={order.serviceTitle}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onBlur={inputHandler} name='projectDetails' as="textarea" rows="5" placeholder='Project details' value={order.projectDetails}/>
                                </Form.Group>

                                <div className='d-flex justify-content-between'>
                                    <Form.Group className='mt-2' controlId="formBasicTitle">
                                        <Form.Control onBlur={inputHandler} name='price' type="title" placeholder="Price" />
                                    </Form.Group>
                                    <div className='file-upload ' 
                                        style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                        <input type="file"/>
                                        <p style={{color:'#009444',margin:'0', marginLeft:'5px'}}>Upload image</p>
                                    </div>
                                </div>
                                <Button type='submit' className='btn-dark px-4'>Send</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Order;