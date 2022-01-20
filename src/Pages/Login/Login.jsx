import { useState, useContext, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { AuthContext, LoginAction } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    let navigate = useNavigate();
    let { auth, dispatch } = useContext(AuthContext);

    let [name, setName] = useState();
    let [password, setPassword] = useState();
    let [alert, setAlert] = useState('Welcome to dylanops.com');

    function onSubmit() {
        const message = 'Please enter admin@gmail.com/admin to login.';
        if (
            name != 'admin@gmail.com'
            && password != 'admin'
        ) {
            setAlert(message);
            return;
        }

        if (
            name == 'admin@gmail.com'
            && password == 'admin'
        ) {
            LoginAction(dispatch, name);
            return;
        }
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
    }, [auth])

    return (
        <div className='Login'>
            {
                !auth.isLogin && <Alert variant={'info'}>{alert}</Alert>
            }
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="admin@gmail.com" onChange={onChangeEmail} />
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