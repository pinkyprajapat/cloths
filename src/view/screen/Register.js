import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../style/style.css'
function Register() {
  const nav=useNavigate();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

    let submitregister=async()=>{
      console.log(file);
      console.log(fileName);
      
        const formdata= new FormData();
        formdata.append("file",file)
        formdata.append("filename",fileName)
        let data =JSON.stringify( Object.fromEntries(formdata));
      
      console.log(data);
        let params={
        username:name,
        email:email,
        password:password,
        image:file
      }
      console.log(params);
      try {
          let res =await axios.post("register",params).catch(err=>alert(err))
          console.log(res.data);
          let {success,message} =res.data
          if(success){
            alert(message)
            nav("/Login")
          }
          else{
            alert(message)
          }
        } catch (error) {
          console.log("error==",error);
          alert(error)
        }
      
      setEmail("")
      setPassword("")
      setName("")
      }

  return (
    <>
      <h1>Register</h1>
      <Container style={{ width: 500 }} >
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(d) => setName(d.target.value)} />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(d) => setEmail(d.target.value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" onClick={submitregister}>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Register;