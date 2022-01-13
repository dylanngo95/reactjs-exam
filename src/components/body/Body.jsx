import React from 'react';
import Home from '../../pages/home/Home';
import Footer from '../footer/Footer';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='Body'>
                <Home changeTheme = {this.props.changeTheme} />
                <Footer/>
            </div>
        );
    }
}

export default Body;