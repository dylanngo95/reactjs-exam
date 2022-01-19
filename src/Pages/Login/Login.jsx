import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let { auth, dispatch } = useContext(AuthContext);
    let [name, setName] = useState();
    let [password, setPassword] = useState();
    let navigate = useNavigate();

    function onSubmit() {
        const HOST = 'https://api.github.com/users/dylanngo95'

        fetch(HOST)
            .then(res => res.json())
            .then(result => {
                console.log('login', result);
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    data: {
                        userName: result.login,
                        token: result.node_id
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

    useEffect(() => {
        if (auth.isLogin) {
            localStorage.setItem('auth', JSON.stringify(auth));
            let from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        }
    },[auth])

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
                    <Form.Check type="checkbox" label="Remember" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={onSubmit}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;