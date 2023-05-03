import { bgimg, sareeslide } from "../data/data"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 

export default function Indiya(){
    return(
        // <h1>Indiya</h1>
        <div>
            <AwesomeSlider className="slideprp">
                {
                    sareeslide.map(function(krr){
                        return(
                            <div>
                            <img src={krr.Image} className='bannerimage' style={{width:'1540px',height:'610px',margin:'0px'}}/>
                            </div>
                        )
                    })
                }
            </AwesomeSlider>
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