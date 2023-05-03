import {useLocation} from 'react-router-dom'
import React, { useState } from 'react'

export default function Happy(){
    const loc=useLocation();
    const[content,setcontent]=useState(loc.state)
    return(
        <>
        <h1>Happyy!!!!</h1>
        <div>
            <img src={content}/>
        </div>
        </>
    )
}