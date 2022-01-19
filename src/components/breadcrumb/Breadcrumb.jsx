import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbComponent = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/about">
                About
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/reducer">Reducer</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;