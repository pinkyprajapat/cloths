import { banner,team1,img1,team2,team3,hotdiv,hotdivv,tops} from "../data/data"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 


export default function Welcome(){
    return(
        <>
            <AwesomeSlider className="slideprp">
                {
                    banner.map(function(k){
                        return(
                            <div>
                            <img src={k.Image} className='bannerimage' style={{width:'1540px',height:'610px',margin:'0px'}}/>
                            </div>
                        )
                    })
                }
            </AwesomeSlider>

            <div className="ctghead">
            {
                team1.map(function(pr){
                    return(
                        <>
                            <div className="team1">
                                {pr.name} 
                            </div>                                                                
                        </>
                    )
                })
            }
            </div>
            <div className="imagesdiv">
                {
                img1.map(function(q){
                    return(
                    
                        <>
                            <div className="divs1">
                                <div className="divs2">
                                    <img src={q.img} style={{width:'100%',height:'100%',position:'absolute'}}/> 
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
                            <div className="ctgheadd">
            {
                team2.map(function(pr){
                    return(
                        <div>
                            <div className="team2">
                                {pr.name} 
                            </div>                                                                
                        </div>
                    )
                })
            }            
            </div>
            <div className="imagesdivv">
                <img src={hotdiv} style={{width:'100%',height:'100%',}}/>
            </div>

            <div className="ctgheadd">
            {
                team3.map(function(prr){
                    return(
                        <div>
                            <div className="team3">
                                {prr.name} 
                            </div>                                                                
                        </div>
                    )
                })
            } 
            </div>           
            
            <div className="imagesdivvv">
                <img src={hotdivv} style={{width:'100%',height:'100%',}}/>
            </div>


            <div className="imagessld">
            {
            tops.map(function(tpr){
                return(
                    <>
                        <div className="imgflexbox">
                            <div className="imgbox">
                                <img src={tpr.img} style={{width:'100%',height:'80%'}}/>
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
                        </>
                    )
                })
                }                
            </div>
        </>
    )
}