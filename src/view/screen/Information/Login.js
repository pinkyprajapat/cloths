import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const nav = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    let submitlogin = async () => {

        let params = {
            email: email,
            password: password
        }

        console.log(params);
        try {
            let res = await axios.post("login", params).catch(err => alert(err))
            console.log(res.data);

            let { success, message, data } = res.data
            if (success) {
                alert(message)
                console.log(data);
                localStorage.setItem('user', true)
                nav("/")
            }
            else {
                alert(message)
            }
        } catch (error) {
            alert(error)
        }
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <h1>Login</h1>
            <Container style={{ width: 500 }} >
                <Row>
                    <Col>
                        <Form>
                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(d) => setName(d.target.value)} />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> 
                            </Form.Group> */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(d) => setEmail(d.target.value)} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
                            <Button variant="primary" onClick={submitlogin}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
