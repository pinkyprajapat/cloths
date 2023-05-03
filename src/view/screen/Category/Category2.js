import { useLocation } from "react-router-dom";
import { useState } from "react";
import { tops } from "../../data/data";
import { useNavigate } from "react-router-dom";
export default function Category2(){
    let nav = useNavigate();
    const loc=useLocation();
    const[variety2,setvariety2]=useState(loc.state.variety)
    return(
    <div>
        <h1>varieties2</h1>
        <div className="Category-imagessld1">
        <div className="imagessld1">
                {
                    tops.map(function (tpr) {
                        return (
                            <>
                                <div className="imgflexbox1" onClick={() => nav('/details', { state: { product: tpr }})}>
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
        
    </div>
    )
}