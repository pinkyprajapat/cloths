import { topimgs, topimgss, topimgsss, about, newimg, banner, cont1, cont2, cont3, bars, team1, img1, team2, team3, hotdiv, hotdivv, tops, } from "../data/data";
import AwesomeSlider from 'react-awesome-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Carousel, Container} from "react-bootstrap";

import 'react-awesome-slider/dist/styles.css';

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col } from "react-bootstrap";

function Home() {

    let nav = useNavigate();
    function Cloths() {
        console.log(hotdiv);
        nav('/Happy', { state: hotdiv })

    }
    function Cloth1() {
        nav('/Happy', { state: hotdivv })
    }
    console.log();
    return (
        <div style={{width:1508}}>

            {/* <AwesomeSlider className="slideprp">
                {
                    banner.map(function (k) {
                        return ( 
                            <div className="banner-div"  onClick={() => nav('/Banner', { state: { dataa: k }})}>
                                <img src={k.Image} className='bannerimage' style={{ width: '100%', height: '100%', margin: '0px', position: 'absolute' }} />
                                <div className="banner-div-div">
                                <Button variant="dark" size="lg"><h3>shop now</h3></Button>{' '}
                                </div>
                            </div>
                        )
                    })
                }
            </AwesomeSlider> */}
            <Row>
                <Col>
                    <Carousel>
                        {
                            banner.map(function (k) {
                                return (
                                    <Carousel.Item interval={1000} onClick={() => nav('/Banner', { state: { dataa: k } })}>
                                        <img
                                            className="d-block w-100"
                                            src={k.Image}
                                            alt="First slide"
                                            style={{ width: '100%', height: '100%', margin: '0px' }}
                                        />
                                        {/* <div className="banner-div-div">
                                            <Button variant="dark" size="lg"><h3>shop now</h3></Button>{' '}
                                        </div> */}
                                        <Carousel.Caption style={{top:'70%'}}>
                                        <div className="banner-div-div">
                                            <Button variant="dark" size="lg"><h3>shop now</h3></Button>{' '}
                                        </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })

                        }

                    </Carousel>
                </Col>
            </Row>

            <div className="ctghead">
                {
                    team1.map(function (p) {
                        return (
                            <>
                                <div className="team1">
                                    {p.name}
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="imagesdiv" >
                {
                    img1.map(function (q) {
                        return (

                            <>
                                <div className="divs1" onClick={() => nav(`/${q.path}`, { state: { variety: q } })}>
                                    <div className="divs2">
                                        <img src={q.img} style={{ width: '100%', height: '100%', position: 'absolute' }} alt="new" />
                                        <div className="types1">
                                            {/* {
                                        fonttxt.map(function(r){
                                            return(
                                                <> */}
                                            <div className="styletxt">
                                                {q.name}
                                                <div className="styletxxt">
                                                    {q.about}
                                                </div>
                                            </div>
                                            {/* </>
                                            )
                                        })
                                        } */}
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="ctgheadd">
                {
                    team2.map(function (pr) {
                        return (
                            <div>
                                <div className="team2">
                                    {pr.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="imagesdivv" onClick={() => { Cloths(hotdiv) }}>
                <img src={hotdiv} style={{ width: '100%', height: '100%', }} />
            </div>

            <div className="ctgheadd">
                {
                    team3.map(function (prr) {
                        return (
                            <div>
                                <div className="team3">
                                    {prr.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="imagesdivvv" onClick={() => { Cloth1(hotdivv) }}>
                <img src={hotdivv} style={{ width: '100%', height: '100%', }} />
            </div>


            <div className="imagessld">
                {
                    tops.map(function (tpr) {
                        return (
                            <>
                                <div className="imgflexbox" onClick={() => nav('/details', { state: { product: tpr } })}>
                                    <div className="imgbox">
                                        <img src={tpr.img} style={{ width: '100%', height: '80%' }} />
                                        <div className="topsname">
                                            <p className="p1">{tpr.name}</p>
                                            <p className="p2">{tpr.price}</p>
                                        </div>
                                    </div>


                                </div>

                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Home;

