import { bgimg, sareeslide } from "../data/data"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Carousel,Col,} from "react-bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Indiya(){

    let nav = useNavigate();
    return(
        // <h1>Indiya</h1>
        <div>
            {/* <AwesomeSlider className="slideprp">
                {
                    sareeslide.map(function(krr){
                        return(
                            <div>
                            <img src={krr.Image} className='bannerimage' style={{width:'1540px',height:'610px',margin:'0px'}}/>
                            </div>
                        )
                    })
                }
            </AwesomeSlider> */}
            <Row>
                <Col>
                    <Carousel style={{height:600}}>
                        {
                            sareeslide.map(function (krr) {
                                return (
                                    <Carousel.Item interval={1000} onClick={() => nav('/IndyaBanner', { state: { dataa: krr } })}>
                                        <img
                                            className="d-block w-100"
                                            src={krr.Image}
                                            alt="First slide"
                                            style={{ width: '100%', height:600, margin: '0px' }}
                                        />
                                        {/* <div className="banner-div-div">
                                            <Button variant="dark" size="lg"><h3>shop now</h3></Button>{' '}
                                        </div> */}
                                        {/* <Carousel.Caption style={{top:'70%'}}>
                                        <div className="banner-div-div">
                                            <Button variant="dark" size="lg"><h3>shop now</h3></Button>{' '}
                                        </div>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                )
                            })

                        }

                    </Carousel>
                </Col>
            </Row>
            
            <div className="indy-div">
                <img src={bgimg} style={{width:'100%',height:85,position:'absolute'}} />
                <div className="indy-div1">
                    <div className="indy-div1A">
                        <p className="indy-p1">GET YOUR FAVOURITE STYLE CUSTOMIZED TO YOUR SIZE</p>
                    </div>
                    <div className="indy-div1B">
                        <div className="indy-div1B1">
                            <p>SHOP INDYA LUXE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}