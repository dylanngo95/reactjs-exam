import React, { Component } from 'react';
import './Header.css';

const LogoComponent = () => {
    return (
        <div className='Logo'>
            <a href='#'>
                <p>Dylan</p>
            </a>
        </div>
    );
}

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <LogoComponent />
            </div>
        );
    }
}

export default Header;