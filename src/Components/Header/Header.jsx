/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { CustomerContext } from '../../Context/CustomerContext';
import './Header.css';

const NavComponent = () => {
    let { auth, dispatchAuth } = useContext(AuthContext);
    let { customer, _dispatchCustomer } = useContext(CustomerContext);
    let [ qty, setQty ] = useState(0);

    function onClickSignOut(_e) {
        dispatchAuth({ type: 'LOGOUT' });
        localStorage.setItem('auth', null);
    }

    useEffect(() => {
            localStorage.setItem('customer', JSON.stringify(customer));

            let totalQty = 0;
            customer.forEach(item => {
                totalQty += item.qty;
            });
            setQty(totalQty);
    }, [customer]);

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <a href='/' className="font-semibold text-xl tracking-tight">Dylanops.com</a>
                </div>
                <div className="w-auto block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        {/* <a href="/men" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Men
                        </a>
                        <a href="/women" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Women
                        </a>
                        <a href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </a> */}
                    </div>
                    <div>
                        <a href='/cart' className="inline-block text-teal-200 hover:text-white mr-4">{qty} items</a>
                        <a href="/about" className="inline-block text-sm px-4 py-2 leading-none rounded text-white mt-4 lg:mt-0">Hello, {auth.userName}</a>
                        {
                            auth.isLogin ? 
                            <a onClick={onClickSignOut} href="#" className="inline-block text-sm px-2 py-2 leading-none rounded text-teal-200 hover:text-white mt-5 lg:mt-0">Logout</a>
                            :
                            <a href="/login" className="inline-block text-sm px-2 py-2 leading-none rounded text-teal-200 hover:text-white mt-5 lg:mt-0">Login</a>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

const Header = () => {
    return (
        <div className='Header'>
            <NavComponent />
        </div>
    );
}

export default Header;