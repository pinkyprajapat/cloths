/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-Link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);*/

import { topimgs, topimgss, topimgsss, about, newimg, cont1, cont2, cont3, bars, menubar, footer, footerimg, footerplaystr, footerappstr } from './view/data/data'
import Home from './view/screen/Home'
import About from './view/screen/about'
import 'react-awesome-slider'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './view/style/style.css'
import Training from './view/screen/training'
import Welcome from './view/screen/Welcome'
import Indiya from './view/screen/indiya'
import Luxe from './view/screen/Luxe'
import Newin from './view/screen/menu/Newin'
import Rimzim from './view/screen/menu/Rimzim'
import Ss from './view/screen/menu/Ss'
import Clothing from './view/screen/menu/CLOTHING'
import Coords from './view/screen/menu/Coords'
import Curve from './view/screen/menu/curve'
import Dresses from './view/screen/menu/DRESSES'
import Lookbooks from './view/screen/menu/lookbooks'
import Partywear from './view/screen/menu/partywear'
import Tops from './view/screen/menu/TOPS'
import Sale from './view/screen/menu/sale'
import Details from './view/screen/details'
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from './view/screen/boot'
import Banner from './view/screen/Banner'
import Category1 from './view/screen/Category/Category1'
import Bucket from './view/screen/Information/Bucket'
import Login from './view/screen/Information/Login'
import Signup from './view/screen/Information/Signup'
import Store from './view/screen/Information/Store'
import Trackorder from './view/screen/Information/Trackorder'
import Firstdiv from './view/screen/ThreeDiv/Firstdiv'
import Seconddiv from './view/screen/ThreeDiv/Seconddiv'
import Thirddiv from './view/screen/ThreeDiv/Thirddiv'
import Happy from './view/screen/Happy'
import Category2 from './view/screen/Category/Category2'
import Category3 from './view/screen/Category/Category3'
import Register from './view/screen/Register'
import { useState } from 'react'

import { Button, Container } from 'react-bootstrap'
import LuxeBanner from './view/screen/LuxeBanner'
import IndyaBanner from './view/screen/IndyaBanner'






function App() {
    const [user, setUser] = useState(localStorage.getItem('user'));
    console.log(localStorage.getItem('user'));


    function logout() {
        alert('logout')
        localStorage.setItem('user', false)
        setUser(false)
    }

    return (<>
        <BrowserRouter>
            <div style={{width:1508}}>
                <div className='menu09'>
                    <Link to="/" className='Link'>Home</Link>
                    {/* <Link to="/About" className='Link'>About</Link>
                    <Link to="/Training" className='Link'>Training</Link>
                    <Link to="/Boot" className='Link'>Boot</Link>
                    <Link to="/Register" className='Link'>Register</Link>
                    <Link to="/Login" className='Link'>Login</Link> */}

                    {
                        menubar.map(function (m) {
                            return (
                                <Link to={`/${m}`} className='Link'>{m}</Link>
                            )
                        })
                    }
                    {user ? null : <>
                        <Link to="/Register" className='Link'>Register</Link>
                        <Link to="/Login" className='Link'>Login</Link></>
                    }
                    {user ? <Button style={{ marginLeft: '57%', height: '6%', marginTop: 18 }} onClick={logout}>logout</Button> : null}
                </div>


                <div className="top1">
                    <div className="back">
                        <div className="bck">
                            {
                                topimgs.map(function (d) {
                                    return (
                                        <>
                                            <div className="images">
                                                <Link to="/" className='link1'><img src={d.Image} style={{ width: '75%', height: '60%', position: "relative", left: '13px', top: '4px' }} /></Link>
                                            </div>
                                        </>
                                    )
                                })

                            }
                            {
                                topimgss.map(function (a) {
                                    return (
                                        <>
                                            <div className="imagess">
                                                <Link to="/Indiya" className='link1'><img src={a.Image} style={{ width: '60%', height: '60%', position: "relative", left: '20px', top: '4px' }} /></Link>
                                            </div>
                                        </>
                                    )
                                })

                            }
                            {
                                topimgsss.map(function (e) {
                                    return (
                                        <>
                                            <div className="imagesss">
                                                <Link to="/Luxe" className='link1'><img src={e.Image} style={{ width: '60%', height: '60%', position: "relative", left: '20px', top: '4px' }} /></Link>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="top2">
                        <div className="top22">
                            {
                                about.map(function (f) {
                                    return (
                                        <>
                                            <div className="content">
                                                <Link to={`/${f.path}`} className='link2'>{f.name}</Link>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="nexttop">
                    <div className="next1">
                        {
                            newimg.map(function (g) {
                                return (
                                    <>
                                        <div className="logo">
                                            <img src={g.Image} style={{ width: '75%', height: '60%', position: "relative", left: '13px', top: '10px' }} />
                                        </div>
                                    </>
                                )
                            })

                        }
                    </div>
                    <div className="next2">
                        {
                            bars.map(function (o) {
                                return (
                                    <>
                                        <div className="barslist">
                                            <ul style={{ listStyle: 'none', padding: '5px', }}>
                                                <Link to={`/${o.path}`} className='link2'><li>{o.name}</li></Link>
                                            </ul>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="next3">

                    </div>
                </div>
                <div className="divbk">
                    <div className="div1">
                        {
                            cont1.map(function (l) {
                                return (
                                    <>
                                        <div className="text" style={{ textAlign: 'center', marginTop: '6px' }}>
                                            <Link to="/Firstdiv" className='link2'>{l.name}</Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="div2">
                        {
                            cont2.map(function (m) {
                                return (
                                    <>
                                        <div className="text" style={{ textAlign: 'center', marginTop: '6px' }}>
                                            <Link to="Seconddiv" className='link2'>{m.name}</Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="div3">
                        {
                            cont3.map(function (n) {
                                return (
                                    <>
                                        <div className="text" style={{ textAlign: 'center', marginTop: '6px' }}>
                                            <Link to="Thirddiv" className='link2'>{n.name}</Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
            {/* <div className='Header'>
                <h3>visit again</h3>
            </div> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Training" element={<Training />} />

                {user ? null : <>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} /></>
                }

                <Route path="/Welcome" element={<Welcome />} />
                <Route path="/Indiya" element={<Indiya />} />
                <Route path="/Luxe" element={<Luxe />} />
                <Route path="/Newin" element={<Newin />} />
                <Route path="/Rimzim" element={<Rimzim />} />
                <Route path="/Ss" element={<Ss />} />
                <Route path="/Clothing" element={<Clothing />} />
                <Route path="/Coords" element={<Coords />} />
                <Route path="/Curve" element={<Curve />} />
                <Route path="/Dresses" element={<Dresses />} />
                <Route path="/Lookbooks" element={<Lookbooks />} />
                <Route path="/Partywear" element={<Partywear />} />
                <Route path="/Sale" element={<Sale />} />
                <Route path="/Tops" element={<Tops />} />
                <Route path="/details" element={<Details />} />
                <Route path="/Boot" element={<Boot />} />
                <Route path="/Banner" element={<Banner />} />
                <Route path="/Category1" element={<Category1 />} />
                <Route path="/Category2" element={<Category2 />} />
                <Route path="/Category3" element={<Category3 />} />
                <Route path="/Trackorder" element={<Trackorder />} />
                <Route path="/Bucket" element={<Bucket />} />

                <Route path="/Signup" element={<Signup />} />
                <Route path="/Store" element={<Store />} />
                <Route path="/Firstdiv" element={<Firstdiv />} />
                <Route path="/Seconddiv" element={<Seconddiv />} />
                <Route path="/Thirddiv" element={<Thirddiv />} />
                <Route path="/Happy" element={<Happy />} />

                <Route path="/LuxeBanner" element={<LuxeBanner />}></Route>
                <Route path="/IndyaBanner" element={<IndyaBanner />}></Route>


            </Routes>
            <div className='footer'>
                {/* { */}
                {/* // footer.map(function (d)  */}
                {/* // return ( */}
                <>
                    <div className='footer-div'>
                        <Container>
                            <p>{footer}</p>
                            <div className="footer-line"></div>
                            <div className='footer-img'>

                                <div className='footimg'>
                                    <div className='footblock'>
                                        <img src={footerimg} style={{ width: '95%', marginTop: '10px' }} />
                                    </div>
                                </div>
                                <div className='footdownld'>
                                    <h5 style={{ textAlign: 'center', marginTop: '15px' }}>Download The App</h5>
                                    <div className='divbck1'>
                                        <div className='divlft'>
                                            <img src={footerplaystr} style={{ position: 'relative', left: '30px', top: '5px', width: '130px' }} />
                                        </div>
                                        <div className='divrght'>
                                            <img src={footerplaystr} style={{ position: 'relative', left: '30px', top: '5px', width: '130px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>

                </>
                {/* //         )
                //     })
                // } */}

            </div>
        </BrowserRouter>

    </>)
}

export default App; 