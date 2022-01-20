import { useState, useContext, useEffect } from 'react';
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
        <div className='flex justify-center'>
            <div className="w-full max-w-xs">
                {
                    !auth.isLogin && <div className="text-pink-600">{alert}</div>

                }
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={onChangeEmail} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={onChangePassword} />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onSubmit} type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Dylan. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Login;