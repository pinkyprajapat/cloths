import { luxelehngas, luxekurti } from "../data/data"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Carousel, Col, Button, Container } from "react-bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Luxe() {

    let nav = useNavigate();
    return (
        <Container fluid>
            {/* <AwesomeSlider className="slideprp">
                {
                    luxelehngas.map(function(kr){
                        return(
                            <div>
                            <img src={kr.Image} className='bannerimage' style={{width:'1540px',height:'610px',margin:'0px'}}/>
                            </div>
                        )
                    })
                }
            </AwesomeSlider> */}
            <Row>
                <Col>
                    <Carousel style={{ height: 600 }}>
                        {
                            luxelehngas.map(function (kr) {
                                return (
                                    <Carousel.Item interval={1000} onClick={() => nav('/LuxeBanner', { state: { dataa: kr } })}>
                                        <img
                                            className="d-block w-100"
                                            src={kr.Image}
                                            alt="First slide"
                                            style={{ width: '100%', height: 600, margin: '0px' }}
                                        />
                                        {/* <div className="banner-div-div">
                                            <Button variant="dark" size="lg"><h3>shop now</h3></Button>{' '}
                                        </div> */}
                                        <Carousel.Caption style={{ top: '70%' }}>
                                            {/* <div className="banner-div-div">
                                            <Button variant="dark" size="lg"><h3>shop now</h3></Button>{' '}
                                        </div> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })

                        }

                    </Carousel>
                </Col>
            </Row><br />
            <Row>
                <Col>
                    <h2 style={{ textAlign: 'center' }}>CELEBS IN INDYA</h2>
                </Col>
            </Row><br></br>
            <Row> 
                    {
                        luxekurti.map(function(ku){
                            return(
                                <Col className="col-lg-2">
                                <img src={ku.img} style={{width:'100%',height:300}}/>
                                <p style={{marginTop:-40,textAlign:'center',color:'white',fontSize:20}}>
                                    {ku.name}
                                </p>
                                </Col>
                            )
                        })
                    }
            </Row>
        </Container>
    )
}