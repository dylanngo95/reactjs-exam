import React, { Component } from 'react';
import Home from '../../pages/home/Home';
import Footer from '../footer/Footer';

class Body extends Component {
    render() {
        return (
            <div className='Body'>
                <Home />
                <Footer/>
            </div>
        );
    }
}

export default Body;