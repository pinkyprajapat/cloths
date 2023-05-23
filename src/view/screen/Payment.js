import axios from "axios";
import { useState } from "react"
import { Container ,Row,Col,Form,Button} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"


export default function Payment(){
let nav=useNavigate()
const loc=useLocation()
const[pay,setPay] =useState(loc.state)
console.log(pay);
const [acno,setAcno]=useState('');
const [user,setUserdata]=useState(localStorage.getItem('user'));
const [fsc,setFsc]=useState('');
const [acname,setAcname]=useState('');

console.log(user);
async function paymentpage(){
    if(acno!==''&& fsc!==''&& acname!==''){
      let params={
        acno:acno,
        acname:acname,
        fsc:fsc,
        pay:pay,
        user:user
      }
      let res= await axios.post("payment",params).catch(e=>console.log(e));
      const{success,message} = res?.data
if(success){

  alert(message)
  nav('/profile')

}
else{
  alert(message)

}
    }
    else{
        alert("Fill All Input")
    }
}
    return(
        <>
       <Container className="m-5">
        <Row>
            <Col>
            <h1 className="bg-primary text-light p-3">Payment</h1>
          
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="w-25 bg-success m-auto rounded p-3 text-light">
            <h4>Bank Account Details</h4>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Bank Account Number" value={acno} onChange={d=>setAcno(d.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="IFSC"  value={fsc} onChange={d=>setFsc(d.target.value)}/>
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="Account Holder Name"  value={acname} onChange={d=>setAcname(d.target.value)}/>
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" value={`Rs.${pay}`} />
       
     </Form.Group>

      <Button variant="primary" onClick={paymentpage} >
        submit
      </Button>
    </Form>
            </div>
            </Col>
        </Row>
       </Container >
        </>

    )
}