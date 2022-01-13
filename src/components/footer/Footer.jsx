import React, { Component } from 'react';
import { Placeholder } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <>
                    <Placeholder xs={6} />
                    <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                </>
            </div>
        );
    }
}

export default Footer;