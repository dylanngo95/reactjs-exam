import React from 'react';
import Home from '../../pages/home/Home';
import Footer from '../footer/Footer';
import About from '../about/About';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='Body'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home changeTheme={this.props.changeTheme} />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default Body;