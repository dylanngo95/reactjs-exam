import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { LoginContext } from '../../context/LoginConext';

const Login = () => {

    let { stateLogin, dispatch } = useContext(LoginContext);

    let [name, setName] = useState();
    let [password, setPassword] = useState();

    function onSubmit() {
        const HOST = 'http://localhost:3005/'

        fetch(HOST)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    data: {
                        userName: result.userName,
                        token: result.token
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: 'LOGIN_ERROR',
                    data: {
                    }
                })
            });

    }

    function onChangeEmail(e) {
        setName(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
                    <Form.Text className="text-muted">
                        Well never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onChangePassword} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={onSubmit}>
                    Submit
                </Button>
                {stateLogin.isLogin && <p><Form.Label>Login sucess</Form.Label></p>}
            </Form>
        </div>
    );
}

export default Login;