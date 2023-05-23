import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Details() {
const nav =useNavigate()

    const loc = useLocation();
    const [pro, setPro,] = useState(loc.state.product)
    const [proo, setProo,] = useState(loc.state.productdata)
    const [user, setUser,] = useState(localStorage.getItem('user'))

    async function addToCart(pro){

        let params = {
            ...pro,
            username : user
        }
        
        let res = await axios.post("addtocart",params).catch(e=>console.log(e));
        console.log(res?.data);

        let {success,message} = res.data
        console.log(success);
        if(success){
            alert(message)

            nav('/addtocart')
        }
        else{
            alert(message)
        }
    }

    console.log(pro);
    return (
        <div>
            
            <div className='details'>
                <div className='details-image'>
                    <div className='details-image-inner'>
                        <div className='details-image-inner1'>
                            <img src={pro.img} style={{width:'95%',height:'95%'}} />
                        </div>
                        <div className='details-image-inner1'>
                            <img src={pro.img2} style={{width:'95%',height:'95%'}} />
                        </div> 
                        <div className='details-image-inner1'>
                            <img src={pro.img3} style={{width:'95%',height:'95%'}} />
                        </div>
                        <div className='details-image-inner1'>
                            <img src={pro.img4} style={{width:'95%',height:'95%'}} />
                        </div>
                        <div className='details-image-inner1'>
                            <img src={pro.img5} style={{width:'95%',height:'95%'}} />
                        </div>
                        <div className='details-image-inner1'>
                            <img src={pro.img6} style={{width:'95%',height:'95%'}} />
                        </div>
                    </div>
                    {/* <div className='details-image-inner'>

                        <img src={pro.img} style={{ width: '100%', height: '100%' }} /> 
                    </div> */}
                </div>
                <div className='details-info'>
                    <div className='details-name'>
                        <h2>{pro.name}</h2>
                    </div>
                    <div className='details-rate'>
                        <h3>{pro.price}</h3>
                        {/* <p style={{color:'black',fontSize:'20px'}}>M.R.P.: ₹899</p>
                        <p>Inclusive of all taxes</p> */}
                        <div className='line'></div>
                        <div className='Taxes'>
                            <p>Inclusive of all Taxes</p>
                        </div>
                        <div className='suk'>
                            <p>{pro.SUK}</p>
                            <p>EXPRESS<span style={{color:'grey'}}> | </span>span 3 Day Delivery on orders placed before 2pm</p>
                        </div>
                        <div className='Bag' onClick={()=>addToCart(pro)} style={{cursor:'pointer'}}>
                            <p>ADD TO BAG</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
export default Details;