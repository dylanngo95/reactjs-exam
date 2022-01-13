import React from 'react';
import { Placeholder } from 'react-bootstrap';
import Button from '../button/Button';
import ErrorBoundary from '../error/ErrorBoundary';


class Footer extends React.Component {
    render() {
        return (
            <div className='Footer'>
                <>
                    <Placeholder xs={6} />
                    <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                </>
                <ErrorBoundary>
                    <Button />
                </ErrorBoundary>
            </div>
        );
    }
}

export default Footer;