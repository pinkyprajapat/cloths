import { luxelehngas } from "../data/data"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 

export default function Luxe(){
    return(
        <>
            <AwesomeSlider className="slideprp">
                {
                    luxelehngas.map(function(kr){
                        return(
                            <div>
                            <img src={kr.Image} className='bannerimage' style={{width:'1540px',height:'610px',margin:'0px'}}/>
                            </div>
                        )
                    })
                }
            </AwesomeSlider>
        </>
    )
}