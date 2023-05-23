import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Container ,Row ,Col, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Addtocart(){
    const nav =useNavigate()
    const[user,setUser]=useState(localStorage.getItem('user'))
    const[data,setData]=useState('')
    const[pay,setPay]=useState('')
    useEffect(()=>{
        async function show(){
        let res =await axios.post('showtocart',{username:user}).catch(d=>console.log(d))
        //console.log(res?.data);
        setData(res?.data);
        let p=0
       
        res?.data.map(d=>{
           p+=d.price

       }) 
       console.log(p);
       setPay(p)
    }
        show()
    
    },[])

    console.log(data);
    async function show(){
        let res =await axios.post('showtocart',{username:user}).catch(d=>console.log(d))
        //console.log(res?.data);
        setData(res?.data);
        let p=0
       
         res?.data.map(d=>{
            p+=d.price

        }) 
        console.log(p);
        setPay(p)
    }

    async  function removeitem(index) {
       
        let arr=[]
        data.map((d, index1) => {
                        if(index !== index1){
                            arr.push(d)
                        }        })
                console.log(arr);        
        let res = await axios.post('removecartitem', arr).catch(e=>console.log(e))
                    console.log(res?.data);
               await setData(arr)
        
                show()
        
            }
    return(
        <>
        <Container>
            <Row>
            <Col className="bg-primary">
                { data&& data.map((d,index)=>(
                    
                    <div className="m-4 d-flex">
                        <div className="m-4 d-flex">
                        <img src={d.img} style={{width:100}} />
                        <div className="">
                        <p>{d.name}</p>
                        <p>{d.price}</p>
                        
                        <button onClick={()=>removeitem(index)}>Remove</button>
                        </div>
                        </div>
                       
                    </div>
                 
                ))
                
                }
                   </Col>

                <Col>
                <div className="p-5">
                    <div>
                        <h1>Payment show</h1>
                    </div>
                <p>Payment:{pay}</p>
                <Button onClick={()=>nav('/payment',{state:pay})}>Buy Now</Button>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}