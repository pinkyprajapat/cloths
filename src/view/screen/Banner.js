import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { dressInfo, vartops } from "../data/data";
import { Card, Row, Col, nav, d, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";



// import { Col, Row, Dropdown, Container } from "react-bootstrap";
export default function Banner() {
    const loc = useLocation();
    const [data, setdata] = useState(loc.state.dataa)
    return (<>
        <h3>banner</h3>
        <div className="Banner-div">
            <div className="Banner-leftdiv">
                <div className="left-div-box">
                    <h4>SALE</h4>
                    <div className="ban-leftdiv-line"></div>
                    <div><br /></div>

                    <Dropdown className="d-inline mx-2" autoClose={false}>
                        <Dropdown.Toggle id="dropdown-autoclose-false">
                            Clothing
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Winter Wear</Dropdown.Item>
                            <Dropdown.Item href="#">Tops</Dropdown.Item>
                            <Dropdown.Item href="#">Dresses</Dropdown.Item>
                            <Dropdown.Item href="#">Bottoms</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Row>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="--bs-light-rgb" id="dropdown-basic">
                                    CLOTHING
                                </Dropdown.Toggle>                                
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Winter Wear</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Tops</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Dresses</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>                            
                        </Col>
                    </Row> */}
                </div>
            </div>
            <div className="Banner-rightdiv">
                <h6>Home | sale</h6>
                <div className="manyform-div">
                    <div className="manyform-div1">
                        {
                            dressInfo.map(function (di) {
                                return (
                                    <div className="manyform-div-div">
                                        <div className="manyform-div-div-div">
                                            <form action="/action_page.php">

                                                <select id="Categories" name="Categories" className="Banner-rightdiv-select">
                                                    <option value={di.name} selected disabled hidden className="Banner-rightdiv-select-opt">{di.name}</option>
                                                    <option value={di.opt1}>{di.opt1}</option>
                                                    <option value={di.opt2}>{di.opt2}</option>
                                                    <option value={di.opt3}>{di.opt3}</option>
                                                    <option value={di.opt4}>{di.opt4}</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="banner-Second-rightdiv">
                        <div className="banner-Second-rightdiv1">
                            <div className="banner-Second-rightdiv1A">
                                <p style={{ position: 'relative', top: 3 }}>SALE</p>
                            </div>
                            <div className="banner-Second-rightdiv1B">
                                <p style={{ position: 'relative', left: 20, top: 3 }}>1088 SYLE FOUND</p>
                            </div>
                            <div className="banner-Second-rightdiv1C">
                                <p style={{ position: 'relative', left: 20, top: 3 }}>VIEW 201</p>
                            </div>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            {
                                vartops.map(function (dv) {
                                    return (
                                        <Col>
                                            <div className="banner-Third-rightdiv">
                                                <Card style={{ width: '15rem', marginTop: '5px' }}  >
                                                    <div className="banner-Third-rightdiv-Img" style={{ height: 300 }}>
                                                        <Card.Img variant="top" src={dv.img} alt="image" style={{ height: '100%' }} />
                                                    </div>
                                                    <Card.Body style={{ width: 260, height: 150 }}>
                                                        <Card.Title>{dv.name}</Card.Title>
                                                        <Card.Text>
                                                            {dv.price}
                                                            <br />
                                                            {dv.SUK}
                                                            {/* <br></br> */}
                                                            {/* <div className='Bag'>
                                                            <p>ADD TO BAG</p>
                                                        </div> */}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <ListGroup className="list-group-flush" style={{ alignItems: 'center' }}>
                                                        <div className='Bag2'>
                                                            <p>ADD TO BAG</p>
                                                        </div>
                                                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                                                    </ListGroup>
                                                    {/*<Card.Body>
                                                    <Card.Link href="#">more</Card.Link>
                                                    <Card.Link href="#">shop now</Card.Link>
                                                </Card.Body> */}
                                                </Card>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </div >
    </>
    )
}

/*onClick={() => nav('/detail', { state: { productdata: dv } })}*/